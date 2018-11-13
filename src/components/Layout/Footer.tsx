import * as React from "react";
import { styled } from "../../theme";

const FooterWrapper = styled.footer`
  padding: 10px;
`;


export const Footer: React.SFC<{}> = () => (
  <FooterWrapper>
    footer
  </FooterWrapper>
);
