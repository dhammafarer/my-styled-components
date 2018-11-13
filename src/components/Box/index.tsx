import * as React from "react";
import { css } from "styled-components";
import { styled, SpaceScale } from "src/theme";

interface BaseProps {
  className?: string;
  as?: "p"
    | "div"
    | "button"
  ;
}

export const Base: React.SFC<BoxProps> = ({ as, className, children }) => {
  const Component = as || "div";
  return <Component className={className}>{children}</Component>
}

interface SpaceProps {
  p?: SpaceScale;
  px?: SpaceScale;
  py?: SpaceScale;
  pt?: SpaceScale;
  pb?: SpaceScale;
  pl?: SpaceScale;
  pr?: SpaceScale;
  m?: SpaceScale;
  mx?: SpaceScale;
  my?: SpaceScale;
  mt?: SpaceScale;
  mb?: SpaceScale;
  ml?: SpaceScale;
  mr?: SpaceScale;
}

interface BoxProps extends BaseProps, SpaceProps {
  bg?: string;
  onClick(): void;
}

export const Box = styled(Base)<BoxProps>`
  ${props => css`
    background: ${props.bg};
    ${props.theme.s("p", {
      r: props.pr,
      l: props.pl,
      t: props.pt,
      b: props.pb,
      x: props.px,
      y: props.py,
      a: props.p
    })}
    ${props.theme.s("m", {
      r: props.mr,
      l: props.ml,
      t: props.mt,
      b: props.mb,
      x: props.mx,
      y: props.my,
      a: props.m
    })}
  `}
`;

interface ButtonProps extends BoxProps{
}

const UnstyledButton :React.SFC<ButtonProps> = (props) => <Box {...props} as="button"/>

export const Button = styled(UnstyledButton)`
  background: ${props => props.bg || "none"};
  border: none;
`;
