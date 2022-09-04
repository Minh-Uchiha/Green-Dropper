import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/searchbar.css";
import { useLocationContext } from "../context/location-context";

const SearchBar = ({ changeCoors }) => {
  const [location, setLocation] = useState("Hanoi");
  const { setRequestedLocation } = useLocationContext();

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeCoors = async (location) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      location
    )}.json?access_token=pk.eyJ1IjoibWluaHVjaGloYSIsImEiOiJjbDdlOHhwZGkxcDJjM29qbG5mZ3o4a2ljIn0.w7H9IYX3jLj_sPaXgN-iuA&limit=1`;
    await axios.get(url).then((response) => {
      if (response.data.features.length != 0)
        changeCoors({
          latitude: response.data.features[0].center[1],
          longitude: response.data.features[0].center[0],
        });

      setRequestedLocation({
        latitude: response.data.features[0].center[1],
        longitude: response.data.features[0].center[0],
      });
    });
  };

  return (
    <section className="searchbar">
      <h1>Choose a different area to check out</h1>
      <input type="text" value={location} onChange={handleChange} />
      <button onClick={() => handleChangeCoors(location)}>Check out</button>
    </section>
  );
};

export default SearchBar;
