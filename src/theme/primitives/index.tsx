import { Scale, styled, css, theme } from "src/theme";
import { getProperty, getLiteral, getWithDirections } from "./getters";
import { prop } from "ramda";

// directions map
const dps = [
  {dir: "left", l: ["l","x",""]},
  {dir: "right", l: ["r","x",""]},
  {dir: "top", l: ["t","y",""]},
  {dir: "bottom", l: ["b","y",""]},
];

const getDirectionalProperty = getWithDirections(dps)(theme.space);
const getPadding = getDirectionalProperty("padding");
const getMargins = getDirectionalProperty("margin");

const getFromColor = getProperty(theme.color);
const getBackground = getFromColor(prop("bg"))("background");
const getColor = getFromColor(prop("color"))("color");
const getBorderColor = getFromColor(prop("borderColor"))("border-color");

const getBoxShadow = getProperty(theme.shadow)(prop("shadow"))("box-shadow");
const getBorder = getProperty(theme.border)(prop("border"))("border");
const getBorderRadius = getProperty(theme.radius)(prop("radius"))("border-radius");

const getFontWeight = getProperty(theme.fontWeight)(prop("fontWeight"))("font-weight");
const getFontFamily = getProperty(theme.fontWeight)(prop("fontFamily"))("font-family");

const getLineHeight = getProperty(theme.lineHeight)(prop("lineHeight"))("line-height");
const getLetterSpacing = getProperty(theme.letterSpacing)(prop("letterSpacing"))("letter-spacing");
const getTextTransform = getLiteral(prop("textTransform"))("text-transform");

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
     ${getMargins(props)}
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
    ${getLiteral(prop("flexDirection"))("flex-direction")(props)}
    ${getLiteral(prop("flexWrap"))("flex-wrap")(props)}
    ${getLiteral(prop("justifyContent"))("justify-content")(props)}
    ${getLiteral(prop("alignItems"))("align-items")(props)}
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
    ${getTextTransform(props)}
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
    ${getTextTransform(props)}
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
