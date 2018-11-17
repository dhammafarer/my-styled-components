import { identity, ifElse, always,  isNil } from "ramda";

// css property template
const template = (key:string, val: string) => `${key}: ${val};`;

// parse props to build a css property as a string
// fn is a function that interprets the property value,
// eg. a scale-based property from theme
const getP = (tfn: any) => (fn: any) => (getter: any) => (property: string) => (props: any) =>
  ifElse(
    isNil,
    always(""),
    x => tfn(property, fn(x))
  )(getter(props)
);

// a getter for literal property values
const getProperty = getP(template);
const getLiteral = getProperty(identity);

export {
  getProperty,
  getLiteral,
};
