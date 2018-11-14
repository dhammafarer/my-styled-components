import chroma from "chroma-js";

const darken = (color: string) => (v: number) => chroma(color).darken(v).hex();
const lighten = (color: string) => (v: number) => chroma(color).brighten(v).hex();

const primary = "#832";
const secondary = "#832";

export const colors = {
  primary: {
    light: lighten(primary)(1/5),
    main: primary,
    dark: darken(primary)(1/5),
  },
  secondary: {
    light: lighten(secondary)(1/5),
    main: secondary,
    dark: darken(secondary)(1/5),
  },
  error: "red",
  divider: "rgba(0, 0, 0, 0.12)",
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  background: {
    paper: "#fff",
    default: "#fafafa",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
  common: {
    white: "#fff",
    black: "#000",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(0, 0, 0, 0.14)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
  },
};
