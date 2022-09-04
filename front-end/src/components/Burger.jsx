import React from "react";
import { useEffect } from "react";
import "../styles/burger.css";

const Burger = () => {
  const addAnimationToBurger = () => {
    const burger = document.querySelector(".burger");
    burger.classList.toggle("active");
  };

  return (
    <div className="burger" onClick={addAnimationToBurger}>
      <div className="top"></div>
      <div className="mid"></div>
      <div className="bot"></div>
    </div>
  );
};

export default Burger;
