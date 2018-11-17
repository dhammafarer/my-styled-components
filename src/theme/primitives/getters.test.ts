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
