import React from "react";
import "../styles/aqi.css";

const AQI = ({ aqi, category, color }) => {
  return (
    <div className="aqi-card" style={{ color: color }}>
      <div className="aqi-circle">
        <h1>{aqi}</h1>
      </div>
      <h3>{category}</h3>
    </div>
  );
};

export default AQI;
