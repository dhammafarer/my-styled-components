import { Scale, styled, css, theme } from "src/theme";

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

interface BoxProps extends SpaceProps {
  bg?: string;
}

const space = css<SpaceProps>`
  ${props => css`
     ${getPadding(props)}
    `
  }
`;

const box = css<BoxProps>`
  ${space}
  ${props => css`
    background: ${props => props.bg};
    `
  }
`

export const Box = styled.div<BoxProps>`
  ${box}
`;

function getPadding(props: SpaceProps) {
  const k = "p";

  const r = props[`${k}r`] || props[`${k}x`] || props[k];
  const l = props[`${k}l`] || props[`${k}x`] || props[k];
  const t = props[`${k}t`] || props[`${k}y`] || props[k];
  const b = props[`${k}b`] || props[`${k}y`] || props[k];

  const val = (x: Scale | undefined) => x ? theme.space(x) : null;

  return (`
    padding-right: ${val(r)};
    padding-left: ${val(l)};
    padding-top: ${val(t)};
    padding-bottom: ${val(b)};
  `);
}
