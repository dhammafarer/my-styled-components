import { always, identity, prop } from "ramda";
import { getProperty } from "./getters";
import { getWithDirections } from "./directional-getters";
import { getResponsiveProperty } from "./responsive-getters";

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

test("getWithDirections", () => {
  const props = {pl: 1, px: 2};
  const fn = identity;
  const property = "padding";
  const dps = [
    {dir: "left", l: ["l","x",""]},
    {dir: "right", l: ["r","x",""]},
    {dir: "top", l: ["t","y",""]},
    {dir: "bottom", l: ["b","y",""]},
  ];

  const expected = "padding-left: 1;\npadding-right: 2;";

  expect(getWithDirections(dps)(fn)(property)(props)).toBe(expected);
});

test.skip("getResponsiveProperty", () => {
  const fn = identity;
  const getter = undefined;
  const property = "width";
  const props = {width: [1/2, 1]};

  const expected = `
    @media (min-width: 600px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 100%;
    }
  `;

  expect(getResponsiveProperty(fn)(getter)(property)(props)).toBe(expected);
});
