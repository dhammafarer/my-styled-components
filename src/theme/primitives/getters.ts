import { complement, isEmpty, compose, reduce, either, map, prop, concat, identity, ifElse, always,  isNil } from "ramda";

// css property template
const template = (key:string, val: string, fn: any) => `${key}: ${fn(val)};`;

// parse props to build a css property as a string
// fn is a function that interprets the property value,
// eg. a scale-based property from theme
const getP = (tfn: any) => (fn: any) => (getter: any) => (property: string) => (props: any) =>
  ifElse(
    isNil,
    always(""),
    x => tfn(property, x, fn)
  )(getter(props)
);

// a getter for literal property values
const getProperty = getP(template);
const getLiteral = getProperty(identity);

type Direction = "right" | "left" | "top" | "bottom";
type DirectionCode = "r" | "l" | "t" | "b" | "x" | "y" | "";

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


export {
  getP,
  getProperty,
  getLiteral,
  getWithDirections,
};
