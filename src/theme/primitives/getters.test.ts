import {identity, map, compose, concat, prop, reduce, either, isNil } from "ramda";

const propPrefix = (p:string) => compose(prop, concat(p));
const makeList = (list: string[]) => (p: string) => map(propPrefix(p), list);

const getEither = reduce(either, isNil);

const getDir = (l: string[]) => (p: string) => getEither(makeList(l)(p));

const getCode = (p: string) => p.slice(0,1);

const makeKey = (...ss: string[]) => ss.join("-");

const left = getDir(["l", "x", ""]);
const right = getDir(["r", "x", ""]);

const getProperty = (fn: any) => (n: string) => (getter: any) => (p: string) => (props: any) =>  {
  const key = makeKey(p,n);
  const val = fn(getter(getCode(p))(props));
  return `${key}: ${val};`
}

const getLeft = getProperty(identity)("left")(left);
const getRight = getProperty(identity)("right")(right);

const build = (fns: any) => (prop: string) => (props: any) => fns.map((fn:any) => fn(prop)(props)).join("\n");


test("getProperty", () => {
  expect(build([getLeft, getRight])("padding")({pl: 1, px: 2, p: 3})).toBe("padding-left: 1;\npadding-right: 2;");
});
