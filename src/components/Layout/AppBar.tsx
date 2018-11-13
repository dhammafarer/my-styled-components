import * as React from "react";
import { Nav } from "../Nav";
import { styled } from "../../theme";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 100;
  boxShadow: 2px 2px 2px rgba(0,0,0,0.25);
  background: grey;
  padding: ${props => props.theme.scale[3]}px;
`;

interface AppBarProps {
  logo: any;
}

export const AppBar: React.SFC<AppBarProps> = ({ logo }) => (
  <Flex>
    Title
    <Nav/>
  </Flex>
);
