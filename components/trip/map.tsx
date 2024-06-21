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
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );

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

      const cityBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(
          latlong.coordinates[0] - 0.5,
          latlong.coordinates[1] - 0.5
        ),
        new google.maps.LatLng(
          latlong.coordinates[0] + 0.5,
          latlong.coordinates[1] + 0.5
        )
      );

      //setup autocomplete
      const gAutoComplete = new google.maps.places.Autocomplete(
        placeAutoCompleteRef.current as HTMLInputElement,
        {
          bounds: cityBounds,
          strictBounds: true,
          fields: ["formatted_address", "geometry", "name"],
        }
      );

      gAutoComplete.addListener("place_changed", () => {
        const place = gAutoComplete.getPlace();
        if (place.geometry) {
          if (place.geometry.viewport) {
            gMap.fitBounds(place.geometry.viewport);
          } else if (place.geometry.location) {
            gMap.setCenter(place.geometry.location);
            gMap.setZoom(16);
          }

          const marker = new google.maps.marker.AdvancedMarkerElement({
            position: place.geometry.location,
            map: gMap,
            title: place.name,
          });

          const gInfoWindow = new google.maps.InfoWindow();
          setInfoWindow(gInfoWindow);

          marker.addListener("click", () => {
            gInfoWindow.setContent(`
              <div>
                <h3>${place.name}</h3>
                <p>${place.formatted_address}</p>
              </div>
            `);
            gInfoWindow.open(gMap, marker);
          });
        }
      });

      setAutoComplete(gAutoComplete);
      setMap(gMap);
    }
  }, [isLoaded, latlong]);
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
