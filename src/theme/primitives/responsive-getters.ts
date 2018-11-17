// import { isEmpty, complement, map, compose, concat, prop, reduce, either, isNil } from "ramda";
import { getP } from "./getters";

//const template = (property: string, value: any) => `${property}: ${value};`;

const mediaFn = (property: string, val: string[]) => {
  return `@media (min-width: 600px) {
  ${property}: ${val[0]};
}
@media (min-width: 1200px) {
  ${property}: ${val[1]};
}`
}

const getResponsiveProperty = getP(mediaFn);

export {
  getResponsiveProperty
};
