import React from "react";
import { HeaderTitle, QuickViewPanel } from "../components";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="quick-info">
      <HeaderTitle />
      <QuickViewPanel />
    </section>
  );
};

export default Hero;
