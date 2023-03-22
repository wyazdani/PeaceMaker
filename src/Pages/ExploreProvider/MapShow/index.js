import SecondHeader from "Components/Header/SecondHeader";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import map from "../../../Images/map.png";
import MapPopUp from "../PopUp";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const MapShow = (props) => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [providers, setProviders] = useState([]);
  const [loader, setLoader] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const center = {
    lat: user.latitude,
    lng: user.longitude,
  };
  const containerStyle = {
    width: "1050px",
    height: "590px",
  };

  const providerData = () => {
    setProviders(location.state.providers);
    setLoader(false);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBihcJq7Cq91Mgn5UYQ9q0c2nahodsgsWc",
  });

  useEffect(() => {
    providerData();
  }, []);

  return (
    <>
      <SecondHeader />
      <div>
        {isLoaded ? (
          <>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
              {providers.map((provider, index) => {
                let markerPosition = {
                  lat: provider.latitude,
                  lng: provider.longitude,
                };
                return <Marker key={index} position={markerPosition} onClick={() => setModalShow(true)} />;
              })}
            </GoogleMap>
          </>
        ) : (
          <div>
            <Spinner animation="grow" />
          </div>
        )}
      </div>
      {/* <div><img onClick={() => setModalShow(true)} src={map} alt="" /></div> */}
      <MapPopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default MapShow;
