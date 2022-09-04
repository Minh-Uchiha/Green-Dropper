import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Green_Drop_Logo.png";
const Logo = () => {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <h3 style={{ fontSize: "1.5rem" }}>
          <span style={{ color: "green" }}>Green</span>
          <span style={{ fontWeight: 900 }}>__</span>Drop
        </h3>
      </Link>
    </div>
  );
};

export default Logo;
