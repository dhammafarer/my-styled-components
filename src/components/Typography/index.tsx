import { styled, css } from "src/theme";

const baseStyles = css`
  ${({theme}) => css`
    font-family: ${theme.fonts.sans};
    font-size: ${theme.fontSize(2)}; 
    color: ${theme.colors.text.primary};
  `
  }
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

const h1 = css`
  font-size: ${props => props.theme.fontSize(8)};
  line-height: 1;
`;

export const Text = styled.p`
  ${baseStyles}
`;

export const H1 = styled.h1`
  ${baseStyles}
  ${h1}
`;
