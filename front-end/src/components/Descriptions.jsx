import React from "react";

const Descriptions = ({
  dominant_pollutant,
  sources,
  concentration,
  health_recommendations,
}) => {
  return (
    <section className="descriptions" style={{ fontSize: "1.1rem" }}>
      <p>
        <span>Dominant Pollutant: </span> {dominant_pollutant.toUpperCase()}
      </p>
      <p>
        <span>Concentration: </span>
        {concentration.value} {concentration.units}
      </p>
      <p>
        <span>Sources of pollution: </span> {sources}
      </p>
      <p>
        <span>Heath recommendations: </span>
        {health_recommendations}
      </p>
    </section>
  );
};

export default Descriptions;
