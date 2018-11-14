import * as React from "react";
import { DrawerMenu } from "../DrawerMenu";
import { FormattedMessage } from "react-intl";
import { app } from "./Layout.messages";
import { styled, theme } from "../../theme";
import { Text } from "../Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.common.white};
  padding: ${theme.space(2)} ${theme.space(3)};
  box-shadow: ${theme.shadow(1)};
  z-index: ${theme.zIndex(5)};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  width: ${theme.dimension(2)};
  margin-right: ${theme.space(3)};
`;

export const Logo = styled.img`
  width: 100%;
`
export const BrandName = styled(Text)`
  display: none;
  font-size: ${theme.fontSize(3)};
  font-weight: ${theme.fontWeight(4)};
  color: ${theme.colors.primary.main};

  ${theme.devices.md} {
    display: block;
  }
`;

interface HeaderProps {
  logo: any;
}

export const Header: React.SFC<HeaderProps> = ({ logo }) => (
  <Wrapper>
    <Brand>
      <LogoWrapper>
        <Logo src={logo.childImageSharp.fixed.src}/>
      </LogoWrapper>
      <BrandName>
        <FormattedMessage {...app.title}/>
      </BrandName>
    </Brand>
    <DrawerMenu/>
  </Wrapper>
);
