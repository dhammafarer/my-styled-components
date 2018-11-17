import { theme } from "src/theme";

type DirectionProp = "padding" | "margin";
type DirectionName = "right" | "left" | "top" | "bottom";
type DirectionCode = "r" | "l" | "t" | "b";
type DirectionAxis = "x" | "y";

interface Direction {
  code: DirectionCode;
  name: DirectionName;
  axis: DirectionAxis;
}

const directions: Direction[] = [
  {code: "r", axis: "x", name: "right"},
  {code: "l", axis: "x", name: "left"},
  {code: "t", axis: "y", name: "top"},
  {code: "b", axis: "y", name: "bottom"},
];

// constructs a string with prop-direction values from a scale
const getWithDirectionFrom = (scaleFn: any) => (key: DirectionProp) => (props: any) => {
  const k = key.slice(0, 1);

  return directions
    .reduce((acc, dir) => {
      const val = (props[k + dir.code] || props[k + dir.axis] || props[k]);
      return acc + (val ? `${key}-${dir.name}: ${scaleFn(val)};\n` : "");
    }, "");
}

const getSpacedDirectionFor = getWithDirectionFrom(theme.space);
export const getMargins = getSpacedDirectionFor("margin");
export const getPadding = getSpacedDirectionFor("padding");
