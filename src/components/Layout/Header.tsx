import * as React from "react";
import { AppBar } from "./AppBar";

export interface HeaderProps {
  logo: any;
}

interface State {
  menu: boolean;
}

class Header extends React.Component<HeaderProps, State> {
  state: State = {
    menu: false,
  };

  toggleMenu = () => {
    this.setState({menu: !this.state.menu});
  }

  handleClose = () => {
    this.setState({menu: false});
  }

  render() {
    const { logo } = this.props;

    return (
      <AppBar
        logo={logo}
      />
    );
  }
}

export {
  Header
};
