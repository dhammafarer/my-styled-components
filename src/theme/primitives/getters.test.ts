import {identity, map, compose, concat, prop, reduce, either, isNil } from "ramda";

const propPrefix = (p:string) => compose(prop, concat(p));

const makeList = (list: string[]) => (p: string) => map(propPrefix(p), list);

const getEither = reduce(either, isNil);

const getCode = (p: string) => p.slice(0,1);

const getDir = (l: string[]) => (p: string) => getEither(makeList(l)(getCode(p)));

const template = (key:string, val: string) => `${key}: ${val};`;

const getProperty = (fn: any) => (getter: any) => (property: string) => (props: any) =>  {
  const val = getter(props);
  return (val ? template(property, (val)) : "");
}

const getDirectionalProperty = (fn: any) => (dp: {dir: string, l: string[]}) => (property: string) =>
  getProperty(fn)(getDir(dp.l)(property))(`${property}-${dp.dir}`);

const getWithDirections = (fn: any) => (dps: any[]) => (property: string) => (props: any) => dps
  .map(d => getDirectionalProperty(fn)(d)(property)(props))
  .join("\n");
;

test("getProperty works for simple properties", () => {
  expect(getProperty(identity)(prop("color"))("color")({color: "red"})).toBe("color: red;");
});

test("getProperty works for directional properties", () => {
  expect(getDirectionalProperty(identity)({l:["l","x",""], dir: "left"})("padding")({pl: 1, px: 2, p: 3})).toBe("padding-left: 1;");
});

test("getWithDirections", () => {
  expect(getWithDirections(identity)([{dir: "left", l: ["l","x",""]}])("padding")({pl: 1, px: 2, p: 3})).toBe("padding-left: 1;");
});
