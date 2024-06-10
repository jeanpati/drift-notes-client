import React, { useEffect } from "react";

export function Map() {
  const mapRef = React.useRef(null);
  useEffect(() => {
    const initMap = async () => {
      console.log("map init");
    };
    initMap();
  }, []);
  return <h1>Google Maps</h1>;
}
