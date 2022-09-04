import React from "react";
import "../styles/quickviewcard.css";

const QuickViewCard = ({ aqi, dominantPollutant, name, color }) => {
  return (
    <div className="quickview-card">
      <h2 style={{ color: color }}>AQI: {aqi}</h2>
      <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{name}</p>
      <p>
        Dominant pollutant:{" "}
        <span style={{ fontWeight: "600" }}>{dominantPollutant}</span>
      </p>
    </div>
  );
};

export default QuickViewCard;
