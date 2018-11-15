import { Scale, styled, css, theme } from "src/theme";

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

const getDirectionValue = (fn: any) => (key: "padding" | "margin") => (props: any) => {
  const k = key.slice(0, 1);

  return directions
    .reduce((acc, dir) => {
      const val = (props[k + dir.code] || props[k + dir.axis] || props[k]);
      return acc + (val ? `${key}-${dir.name}: ${fn(val)};\n` : "");
    }, "");
}

const getSpaceValue = getDirectionValue(theme.space);
const getMargin = getSpaceValue("margin");
const getPadding = getSpaceValue("padding");

const getValFrom = (fn: any) => (key: string, code: string) => (props: any) => {
  return (props[code] ? `${key}: ${fn(props[code])};` : "");
};

const getVal = (key: string, code: string) => (props: any) => {
  return (props[code] ? `${key}: ${props[code]};` : "");
};

const getFromColor = getValFrom(theme.color);
const getBackground = getFromColor("background", "bg");
const getColor = getFromColor("color", "color");

type Width = string | number;

const width = (xs: Width[]) => xs
  .map((x) => {
    const val = (typeof x === "number" ? `${x * 100}%` : x);
    return `width: ${val};`;
  })
  .map(theme.media);

const getWidth = (props: any) => (props.width ? width(props.width) : "");

interface SpaceProps {
  p?: Scale;
  px?: Scale;
  py?: Scale;
  pr?: Scale;
  pl?: Scale;
  pt?: Scale;
  pb?: Scale;
  m?: Scale;
  mx?: Scale;
  my?: Scale;
  mr?: Scale;
  ml?: Scale;
  mt?: Scale;
  mb?: Scale;
}

const space = css<SpaceProps>`
  ${props => css`
     ${getPadding(props)}
     ${getMargin(props)}
    `
  }
`;

interface BoxProps extends SpaceProps {
  bg?: string;
  color?: string;
  width?: number[] | string[];
}

interface FlexProps extends BoxProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

const box = css<BoxProps>`
  ${space}
  ${props => css`
    ${getBackground(props)};
    ${getColor(props)};
    ${getWidth(props)};
    `
  }
  box-sizing: border-box;
`;

const flex = css<FlexProps>`
  ${box}
  ${props => css`
    ${getVal("flex-direction", "flexDirection")(props)}
    ${getVal("flex-wrap", "flexWrap")(props)}
    ${getVal("justify-content", "justifyContent")(props)}
    ${getVal("align-items", "alignItems")(props)}
  `}
  display: flex;
`;

export const Box = styled.div<BoxProps>`
  ${box}
`;

export const Flex = styled.div<FlexProps>`
  ${flex}
`;
