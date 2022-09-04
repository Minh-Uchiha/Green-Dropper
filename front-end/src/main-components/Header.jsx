import React, { useEffect } from "react";
import { Logo, Options } from "../components";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <Options />
    </div>
  );
};

export default Header;
