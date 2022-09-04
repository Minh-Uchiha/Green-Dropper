import React, { useState } from "react";
import "../styles/info.css";
import { InfoTitle, AQI, Descriptions, Action } from "../components";
import { useEffect } from "react";
import axios from "axios";

const Info = ({ longitude, latitude }) => {
  let url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=a871b7f09eb44708b1e1c7cc8d0aede9&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`;

  const [info, setInfo] = useState({
    aqi: 64,
    dominant_pollutant: "no",
    category: "Excellent air quality",
    sources:
      "Typically originates from incomplete combustion of carbon fuels, such",
    concentration: {
      value: 14.25,
      units: "ppb",
    },
    health_recommendations:
      "With this level of air quality, you have no limitations. Enjoy...",
    color: "#A2DB26",
  });

  useEffect(() => {
    const fetchData = async () => {
      let newInfo;
      await axios.get(url).then((response) => {
        const res = response.data.data;
        newInfo = {
          aqi: res.indexes.baqi.aqi,
          dominant_pollutant: res.indexes.baqi.dominant_pollutant,
          category: res.indexes.baqi.category,
          color: res.indexes.baqi.color,
          sources:
            res.pollutants[res.indexes.baqi.dominant_pollutant]
              .sources_and_effects.sources,
          concentration:
            res.pollutants[res.indexes.baqi.dominant_pollutant].concentration,
          health_recommendations: res.health_recommendations.general_population,
        };
      });
      setInfo(newInfo);
    };
    fetchData();
  }, [longitude, latitude]);

  return (
    <main className="info">
      <InfoTitle />
      <section className="info-container">
        <AQI {...info} />
        <section className="detailed-info-container">
          <Descriptions {...info} />
        </section>
      </section>
      <Action />
    </main>
  );
};

export default Info;
