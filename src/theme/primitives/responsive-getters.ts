// import { isEmpty, complement, map, compose, concat, prop, reduce, either, isNil } from "ramda";
import { getProperty } from "./getters";

const getResponsiveProperty = (fn: any) => getProperty(fn);

export {
  getResponsiveProperty
};
