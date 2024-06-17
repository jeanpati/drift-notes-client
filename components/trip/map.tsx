import { Library, Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import { LatLong } from "../../types";
import { useJsApiLoader } from "@react-google-maps/api";

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

  useEffect(() => {}, []);

  // useEffect(() => {
  //   const initMap = async () => {
  //     const loader = new Loader({
  //       apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  //       version: "weekly",
  //     });

  //     const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
  //       loader.importLibrary("maps"),
  //       loader.importLibrary("marker"),
  //     ]);

  //     const position = {
  //       lat: 43.642693,
  //       lng: -79.3871189,
  //     };
  //     //map options
  //     const mapOptions: google.maps.MapOptions = {
  //       center: position,
  //       zoom: 17,
  //       mapId: "MY_NEXTJS_MAPID",
  //     };
  //     //setup map
  //     const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

  //     // add a marker
  //     const marker = new AdvancedMarkerElement({
  //       map: map,
  //       position: position,
  //       gmpClickable: true,
  //     });
  //   };
  //   initMap();
  // }, []);
  // return <div style={{ height: "600px" }} ref={mapRef} />;
}
