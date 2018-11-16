import { Button as Base } from "src/theme/primitives";
import { styled, css, theme } from "src/theme";

interface ButtonProps {
  to?: string;
  variant?: "primary" | "secondary" | "white";
  fill?: boolean;
}

const defaultStyle = css<ButtonProps>`
  transition: all .3s eas-out;
  color: ${theme.color("text.primary")};
  padding: ${theme.space(2)} ${theme.space(2)};
  border: ${theme.border(1)};
  border-color: ${theme.color("grey.500")};
  border-radius: ${theme.radius(2)};
  min-height: ${theme.dimension(1)};
  min-width: ${theme.dimension(2)};
  background: transparent;
  &:hover {
    border-color: ${theme.color("text.secondary")};
    background: ${theme.color("grey.100")};
  }
  &:focus {
    outline: none;
    background: ${theme.color("grey.200")};
  }
`;

const byVariant = (props: any) => {
  const {variant, fill} = props;

  if (!variant) return null;

  return css<ButtonProps>`
    border-color: ${theme.color("secondary.main")};
    color: ${theme.color(fill ? "common.white" : "secondary.main")};
    background: ${fill ? theme.color("secondary.main") : "transparent"};
    &:hover {
      border-color: ${theme.color("secondary.light")};
      background: ${theme.color(fill ? "secondary.light" : "transparent")};
    }
    &:focus {
      outline: none;
      background: ${theme.color(fill ? "secondary.dark" : "grey.100")};
    }
  `;
}

export const Button = styled(Base)<ButtonProps>`
  ${defaultStyle}
  ${props => byVariant(props)}
`

