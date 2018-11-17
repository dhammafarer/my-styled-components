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

// build a set of css properties for all directions
const getWithDirections = (dps: any[]) => (fn: any) => (property: string) => (props: any) => dps
  .map(d => getDirectionalProperty(fn)(d)(property)(props))
  .filter(complement(isEmpty))
  .join("\n");
;

const dps = [
  {dir: "left", l: ["l","x",""]},
  {dir: "right", l: ["r","x",""]},
  {dir: "top", l: ["t","y",""]},
  {dir: "bottom", l: ["b","y",""]},
];

test("getProperty works for simple properties", () => {
  expect(getProperty(identity)(prop("color"))("color")({color: "red"})).toBe("color: red;");
});

test("getProperty works for directional properties", () => {
  expect(getDirectionalProperty(identity)({l:["l","x",""], dir: "left"})("padding")({pl: 1, px: 2, p: 3})).toBe("padding-left: 1;");
});

test("getWithDirections", () => {
  expect(getWithDirections(dps)(identity)("padding")({pl: 1, px: 2})).toBe("padding-left: 1;\npadding-right: 2;");
});
