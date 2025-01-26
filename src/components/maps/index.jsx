import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link, useNavigate } from "react-router-dom";
import { dotenv } from "dotenv";

function SimpleMap() {
  const key = import.meta.env.VITE_APIKEY;

  console.log(key, "key");
  const containerStyle = {
    width: "100%",
    height: "300px",
  };
  const [pointerList, setPointerList] = useState([]);

  const pointer = (event) => {
    const coordinater = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setPointerList([...pointerList, coordinater]);
  };

  console.log(pointerList, "o");
  const navigate = useNavigate();
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div className="bg-primary mapbg">
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onClick={pointer}
          zoom={10}
        >
          {pointerList.map((each) => (
            <Marker position={{ lat: each.lat, lng: each.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn text-white"
      >
        Back
      </button>
    </div>
  );
}

export default SimpleMap;
