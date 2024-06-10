import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        loader.importLibrary("maps"),
        loader.importLibrary("marker"),
      ]);

      const position = {
        lat: 43.642693,
        lng: -79.3871189,
      };
      //map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };
      //setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // add a marker
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        gmpClickable: true,
      });
    };
    initMap();
  }, []);
  return <div style={{ height: "600px" }} ref={mapRef} />;
}
