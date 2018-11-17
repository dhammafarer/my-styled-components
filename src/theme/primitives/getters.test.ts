import { isEmpty, ifElse, always, complement, identity, map, compose, concat, prop, reduce, either, isNil } from "ramda";

type Direction = "right" | "left" | "top" | "bottom";
type DirectionCode = "r" | "l" | "t" | "b" | "x" | "y" | "";

// css property template
const template = (key:string, val: string) => `${key}: ${val};`;

// parse props to build a css property as a string
const getProperty = (fn: any) => (getter: any) => (property: string) => (props: any) =>
  ifElse(
    isNil,
    always(""),
    x => template(property, fn(x))
  )(getter(props)
);

// prefix each DirectionCode with property identifier, e.g. pr, ml, etc.
const prefixProp = (pref: string) => compose(prop, concat(pref));

// make a prefix to identify property
const getPrefix = (property: string) => property.slice(0,1);

// make a prefixed priority list of direction codes
const makeList = (list: DirectionCode[]) => (pref: string) => map(prefixProp(pref), list);

// helper function to get a property by applying a list of getter functions
const getEither = reduce(either, isNil);

// extract the property with direction value from props
const getDirValue = (l: DirectionCode[]) => (p: string) => getEither(makeList(l)(getPrefix(p)));

// build a css property with direction
const getDirectionalProperty = (fn: any) => (dp: {dir: Direction, l: DirectionCode[]}) => (property: string) =>
  getProperty(fn)(getDirValue(dp.l)(property))(`${property}-${dp.dir}`);

const dps = [
  {dir: "left", l: ["l","x",""]},
  {dir: "right", l: ["r","x",""]},
  {dir: "top", l: ["t","y",""]},
  {dir: "bottom", l: ["b","y",""]},
];

// build a set of css properties for all directions
const getWithDirections = (dps: any[]) => (fn: any) => (property: string) => (props: any) => dps
  .map(d => getDirectionalProperty(fn)(d)(property)(props))
  .filter(complement(isEmpty))
  .join("\n");
;

test("getProperty works for properties with literal values", () => {
  const props = {color: "red"};
  const fn = identity;
  const getter = prop("color");
  const property = "color";

  const expected = "color: red;";

  expect(getProperty(fn)(getter)(property)(props)).toBe(expected);
});

test("getProperty works for with a custom function", () => {
  const props = {color: "red"};
  const fn = always("pink");
  const getter = prop("color");
  const property = "color";

  const expected = "color: pink;";

  expect(getProperty(fn)(getter)(property)(props)).toBe(expected);
});

test("getDirectionalProperty works for directional properties", () => {
  const props = {pl: 1, px: 2, p: 3};
  const fn = identity;
  const property = "padding";

  const expected = "padding-left: 1;";

  expect(getDirectionalProperty(fn)({l:["l","x",""], dir: "left"})(property)(props)).toBe(expected);
});

test("getWithDirections", () => {
  const props = {pl: 1, px: 2};
  const fn = identity;
  const property = "padding";

  const expected = "padding-left: 1;\npadding-right: 2;";

  expect(getWithDirections(dps)(fn)(property)(props)).toBe(expected);
});
