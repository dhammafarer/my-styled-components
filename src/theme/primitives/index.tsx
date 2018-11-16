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
const getBoxShadow = getValFrom(theme.shadow)("box-shadow", "shadow");
const getBorder = getValFrom(theme.border)("border", "border");
const getBorderColor = getValFrom(theme.color)("border-color", "borderColor");
const getBorderRadius = getValFrom(theme.radius)("border-radius", "radius");
const getFontWeight = getValFrom(theme.fontWeight)("font-weight", "fontWeight");
const getFontFamily = getValFrom(theme.fontFamily)("font-family", "fontFamily");
const getLineHeight = getValFrom(theme.lineHeight)("line-height", "lineHeight");
const getLetterSpacing = getValFrom(theme.letterSpacing)("letter-spacing", "letterSpacing");

type Width = string | number;

const width = (xs: Width[]) => xs
  .map((x) => {
    const val = (typeof x === "number" ? `${x * 100}%` : x);
    return `width: ${val};`;
  })
  .map(theme.media);

const getWidth = (props: any) => (props.width ? width(props.width) : "");

const fontSize = (xs: Scale[]) => xs
  .map(x => `font-size: ${theme.fontSize(x)};`)
  .map(theme.media);

const getFontSize = (props: any) => (props.fontSize ? fontSize(props.fontSize) : "");

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
  spacing?: Scale;
}

interface CardProps extends FlexProps {
  shadow?: Scale;
  radius?: Scale;
  border?: Scale;
  borderColor?: string;
}

interface ButtonProps extends BoxProps{
  shadow?: Scale;
  radius?: Scale;
  border?: Scale;
  borderColor?: string;
  fontFamily?: string;
  fontSize?: Scale[];
  fontWeight?: Scale;
  textTransform?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface TextProps extends BoxProps {
  fontFamily?: string;
  fontSize?: Scale[];
  fontWeight?: Scale;
  shadow?: Scale;
  textTransform?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
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
  ${props => (props.spacing && props.spacing > 0) && css`
    padding: ${props.theme.space(props.spacing)};
    & > * {
      padding: ${props.theme.space(props.spacing)};
    }
  `} 
  display: flex;
`;

const card = css<CardProps>`
  ${flex}
  ${props => css`
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderRadius(props)}
  `}
  overflow: hidden;
  flex-direction: column;
`;

const text = css<TextProps>`
  ${box}
  ${props => css`
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getVal("text-transform", "textTransform")(props)}
  `}
  font-family: ${theme.fontFamily("sans")};
  margin: 0;
  padding: 0;
`;

const button = css<ButtonProps>`
  ${box}
  ${props => css`
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderRadius(props)}
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getVal("text-transform", "textTransform")(props)}
  `}
  font-family: ${theme.fontFamily("sans")};
  text-decoration: none;
  cursor: pointer;
  &:hover {
  }
  &:focus {
  }
  &:active {
  }
`;

export const Box = styled.div<BoxProps>`${box}`;
export const Flex = styled.div<FlexProps>`${flex}`;
export const Card = styled.div<CardProps>`${card}`;
export const Text = styled.p<TextProps>`${text}`;
export const Button = styled.button<ButtonProps>`${button}`;

export {
  BoxProps, FlexProps, TextProps, CardProps, ButtonProps
}
