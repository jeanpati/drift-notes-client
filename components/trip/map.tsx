import { Library, Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import { LatLong } from "../../types";
import { useJsApiLoader } from "@react-google-maps/api";
import { Input } from "../form-elements";

const libs: Library[] = ["core", "maps", "places", "marker"];

export function Map(latlong: LatLong) {
  // const mapRef = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autoComplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    libraries: libs,
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const placeAutoCompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded) {
      const mapOptions = {
        center: {
          lat: latlong.coordinates[0],
          lng: latlong.coordinates[1],
        },
        zoom: 16,
        mapId: "MY-MAP",
      };
      //setup the map
      const gMap = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );
      //setup autocomplete
      const gAutoComplete = new google.maps.places.Autocomplete(
        placeAutoCompleteRef.current as HTMLInputElement
      );
      setAutoComplete(gAutoComplete);
      setMap(gMap);
    }
  }, [isLoaded]);
  return (
    <div className="flex flex-col space-y-4">
      <Input id="autocomplete" ref={placeAutoCompleteRef} />
      {isLoaded ? (
        <div style={{ height: "600px" }} ref={mapRef} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
