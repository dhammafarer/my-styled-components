import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const colors = {
  primary: "#333",
  secondary: "red",
  common: {
    white: "#fff",
    black: "#000",
  }
}
;

const fonts = {
  sans: "Muli",
};

const scale = [
  0,
  4,
  8,
  16,
  32,
  64
].map(x => x + "px");

type SpaceProperty = "p" | "m";
export type SpaceScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
type SpaceDirection = "x" | "y" | "r" | "l" | "t" | "b" | "a";
type SpaceArg = {[P in SpaceDirection]: SpaceScale}

const s = (key: SpaceProperty, val: SpaceArg) => {
  const prop = key === "p" ? "padding" : "margin";
  const r = val.r || val.x || val.a;
  const l = val.l || val.x || val.a;
  const t = val.t || val.y || val.a;
  const b = val.b || val.y || val.a;

  return css`
    ${prop}-right: ${r ? scale[r] : null};
    ${prop}-left: ${l ? scale[l] : null};
    ${prop}-top: ${t ? scale[t] : null};
    ${prop}-bottom: ${b ? scale[b] : null};
  `;
}

const space = (val: SpaceScale) => val ? scale[val] : null;

const fsizes = [
  10,
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72
];

const fontSizes = fsizes.map(x => x + "px");
const lineHeights = fsizes.map(x => x * 1.25 + "px");

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const devices = {
  sm: `min-width: ${size.mobileS}px`,
  md: `min-width: ${size.tablet}px`,
  lg: `min-width: ${size.tablet}px`,
  xl: `min-width: ${size.desktop}px`,
}

const maxWidth = size.laptopL;

const theme = {
  colors,
  fonts,
  devices,
  fontSizes,
  lineHeights,
  maxWidth,
  scale,
  s,
  space,
};

export {
  theme
};

export const styled = baseStyled as ThemedStyledInterface<typeof theme>;
