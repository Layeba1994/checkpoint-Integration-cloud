import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styled from "styled-components";

const MapContainer = styled.div`
  height: 400px;
  width: 600px;
  margin: auto;
  margin-top: 50px;
`;

const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Coordonnées de San Francisco, à remplacer par les vôtres

const App = () => {
  return (
    <>
      <LoadScript
        googleMapsApiKey="VOTRE_CLE_API_GOOGLE_MAPS"
        libraries={["places"]}
      >
        <MapContainer>
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            center={defaultCenter}
            zoom={10}
          >
            {/* Contenu personnalisé du marqueur ou autres éléments sur la carte */}
          </GoogleMap>
        </MapContainer>
      </LoadScript>
    </>
  );
};

export default App;
