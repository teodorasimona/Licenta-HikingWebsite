// src/components/Map.tsx
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const MyMarker = ({ lat, lng }: { lat: number; lng: number }) => (
  <LocationOnOutlinedIcon style={{ color: "red" }} />
);

const Map = () => {
  const [latitude, setLatitude] = useState(45.64745600845086);
  const [longitude, setLongitude] = useState(25.60292595143676);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.error("Error getting location: ", error)
    );
  }, []);

  return (
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={{ lat: 45.64745600845086, lng: 25.60292595143676 }}
        center={{ lat: latitude, lng: longitude }}
        defaultZoom={14}
      >
        <MyMarker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
