import * as React from "react";
import { Menu } from "styled-icons/material/Menu";

const Hamburger: React.SFC<{onClick(): void}> = ({onClick}) => (
  <button onClick={onClick}>
    <Menu size={24} color="blue"/>
  </button>
);

export { Hamburger };
