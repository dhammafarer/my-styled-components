import * as React from "react";
import { styled } from "../../theme";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 100;
  boxShadow: 2px 2px 2px rgba(0,0,0,0.25);
  background: ${props => props.theme.colors.primary.main};
  padding-top: ${props => props.theme.space(4)};
  padding-bottom: ${props => props.theme.space(4)};
`;

export const Footer: React.SFC<{}> = () => (
  <Wrapper>
    text
  </Wrapper>
);
