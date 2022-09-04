import { Header, Hero, Info, Footer, SearchBar } from "../main-components";
import { useEffect, useState } from "react";

function Home() {
  const [coordinates, setCoordinates] = useState({});

  const changeCoors = (coordinates) => setCoordinates(coordinates);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <Hero />
      <Info {...coordinates} />
      <SearchBar changeCoors={changeCoors} />
    </div>
  );
}

export default Home;
