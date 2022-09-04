import React from "react";
import axios from "axios";
import { QuickViewCard } from "../components";
import { useState } from "react";
import "../styles/quickviewpanel.css";
import { useEffect } from "react";

const QuickViewPanel = () => {
  const [areas, setAreas] = useState([
    { aqi: 65, dominantPollutant: "co2", name: "New York", color: "green" },
    { aqi: 65, dominantPollutant: "co2", name: "New York", color: "green" },
    { aqi: 65, dominantPollutant: "co2", name: "New York", color: "green" },
    { aqi: 65, dominantPollutant: "co2", name: "New York", color: "green" },
    { aqi: 65, dominantPollutant: "co2", name: "New York", color: "green" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const newYorkUrl = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=40.730610&lon=-73.935242&key=a871b7f09eb44708b1e1c7cc8d0aede9`;
      const dubaiUrl = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=25.276987&lon=55.296249&key=a871b7f09eb44708b1e1c7cc8d0aede9`;
      const tokyoUrl = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=35.652832&lon=139.839478&key=a871b7f09eb44708b1e1c7cc8d0aede9`;
      const hanoiUrl = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=21.030653&lon=105.847130&key=a871b7f09eb44708b1e1c7cc8d0aede9`;
      const beijingUrl = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=39.916668&lon=116.383331&key=a871b7f09eb44708b1e1c7cc8d0aede9`;

      let newAreas = [];

      await axios.get(newYorkUrl).then((response) => {
        newAreas.push({
          aqi: response.data.data.indexes.baqi.aqi,
          dominantPollutant: response.data.data.indexes.baqi.dominant_pollutant,
          name: "New York",
          color: response.data.data.indexes.baqi.color,
        });
      });

      await axios.get(dubaiUrl).then((response) => {
        newAreas.push({
          aqi: response.data.data.indexes.baqi.aqi,
          dominantPollutant: response.data.data.indexes.baqi.dominant_pollutant,
          name: "Dubai",
          color: response.data.data.indexes.baqi.color,
        });
      });

      await axios.get(tokyoUrl).then((response) => {
        newAreas.push({
          aqi: response.data.data.indexes.baqi.aqi,
          dominantPollutant: response.data.data.indexes.baqi.dominant_pollutant,
          name: "Tokyo",
          color: response.data.data.indexes.baqi.color,
        });
      });

      await axios.get(hanoiUrl).then((response) => {
        newAreas.push({
          aqi: response.data.data.indexes.baqi.aqi,
          dominantPollutant: response.data.data.indexes.baqi.dominant_pollutant,
          name: "Hanoi",
          color: response.data.data.indexes.baqi.color,
        });
      });

      await axios.get(beijingUrl).then((response) => {
        newAreas.push({
          aqi: response.data.data.indexes.baqi.aqi,
          dominantPollutant: response.data.data.indexes.baqi.dominant_pollutant,
          name: "Beijing",
          color: response.data.data.indexes.baqi.color,
        });
      });

      setAreas(newAreas);
    };
    fetchData();
  }, []);

  return (
    <div className="quickview-panel">
      {areas.map((area, index) => {
        return <QuickViewCard {...area} key={index} />;
      })}
    </div>
  );
};

export default QuickViewPanel;
