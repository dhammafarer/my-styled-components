import * as React from "react";
import styled from "styled-components";

interface InjectedDrawerProps {
  width: number;
  open: boolean;
  handleClose(): void;
  toggleMenu(): void;
}

interface DrawerProps extends InjectedDrawerProps {
  anchor: "left" | "right" | "top" | "bottom";
  children(props: InjectedDrawerProps): React.ReactNode;
}

const DrawerWrapper = styled.div<{width: number, open: boolean}>`
  z-index: 1400;
  position: absolute;
  width: ${props => props.width}px;
  top: 0;
  right: 0;
  display: block;
  transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-out;
  border: "1px solid black";
`;

const DrawerOverlay = styled.div<{open: boolean, onClick(): void}>`
  z-index: 1400;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: ${props => props.open ? "auto" : "none"};
  background: rgba(0,0,0,0.4);
  height: 100%;
`;

const DrawerContent = styled.div<{open: boolean}>`
  z-index: 1400;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Drawer: React.SFC<DrawerProps> = ({width, open, toggleMenu, handleClose, children}) => {
  return (
    <>
      <DrawerOverlay open={open} onClick={handleClose}/>
      <DrawerWrapper
        open={open}
        width={width}
      >
        <DrawerContent open={open}>
          {children({
            open: open,
            handleClose: handleClose,
            toggleMenu: toggleMenu,
            width: width,
          })}
        </DrawerContent>
      </DrawerWrapper>
    </>
  );
}

export {
  Drawer
};
