import React, { useContext } from "react";
import { useState } from "react";

const LocationContext = React.createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState();

  const setRequestedLocation = (location) => {
    setLocation(location);
    console.log("Hello");
  };

  return (
    <LocationContext.Provider value={{ location, setRequestedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};
