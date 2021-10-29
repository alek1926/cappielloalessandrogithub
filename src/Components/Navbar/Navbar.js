import * as React from "react";
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
};