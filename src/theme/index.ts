import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from "styled-components";
import { shadows } from "./shadows";
import { colors } from "./colors";
import { unit } from "./utils";

const fonts = {
  sans: "Muli",
  serif: "serif",
};

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type SpaceScale = Scale;
type FontSizeScale = Scale;
type FontWeightScale = Scale;
type DimensionScale = Scale;

const sizes = unit("px", [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]);
const fontSizes = unit("px", [ 12, 14, 16, 20, 24, 36, 48, 64, 72 ]);
const fontWeights = [100, 200, 300, 400, 500,600, 700, 800, 900];
const dimensions = unit("px", [16, 32, 64, 128, 256, 512, 768, 1024, 1536]);
const zIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800];

const space = (val: SpaceScale) => sizes[val];
const fontSize = (val: FontSizeScale) => fontSizes[val];
const fontWeight = (val: FontWeightScale) => fontWeights[val];
const dimension = (val: DimensionScale) => dimensions[val];
const shadow = (val: Scale) => shadows[val];
const zIndex = (val: Scale) => zIndexes[val];

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const devices = {
  xs: `@media (min-width: 0px)`,
  sm: `@media (min-width: 425px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1440px)`,
};

const maxWidth = breakpoints.laptopL;

const shape = {
  borderRadius: "4px",
};

const theme = {
  colors,
  devices,
  dimension,
  fonts,
  fontSize,
  fontWeight,
  lineHeights,
  maxWidth,
  shape,
  space,
  shadow,
  zIndex,
};

export {
  theme,
  colors,
  space
};

export const styled = baseStyled as ThemedStyledInterface<typeof theme>;
export const css = baseCss as ThemedCssFunction<typeof theme>;
