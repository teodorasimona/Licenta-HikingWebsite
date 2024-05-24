import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Paper, useMediaQuery } from "@mui/material";
import Rating from "@mui/lab";

interface MyMarkerProps {
  lat: number;
  lng: number;
}
//45.64745600845086, 25.60292595143676

const MyMarker: React.FC<MyMarkerProps> = () => (
  <div>
    <LocationOnOutlinedIcon style={{ color: "red" }} />
  </div>
);

export default function Map() {
  const [latitude, setLatitude] = useState(45.64745600845086);
  const [longitude, setLongitude] = useState(25.60292595143676);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log("Error getting location: " + error.message);
      }
    );
  }, []);
  return (
    <div className="pt-40 h-[100vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAzKDwUofqEnwS6DHqoi2roaE6AaIR9FWA" }}
        defaultCenter={{
          lat: 10.657974,
          lng: 77.601198,
        }}
        defaultZoom={14}
        center={{ lat: latitude, lng: longitude }}
        margin={[50, 50, 50, 50]}
        options={undefined}
        onChange={undefined}
        onChildClick={undefined}
      >
        <MyMarker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
}
