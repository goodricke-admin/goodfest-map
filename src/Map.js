import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactModal from "react-modal";
import Stage from "./markers/Stage";
import Merch from "./markers/Merch";
import { createRoot } from "react-dom/client";
import { IoBeerOutline, IoShirtOutline } from "react-icons/io5";
import { GiFrenchFries } from "react-icons/gi";
import { GiHotDog } from "react-icons/gi";
//import { LiaHotdogSolid } from "react-icons/lia";

import { BsSpeaker } from "react-icons/bs";
import styled from "styled-components";
import GlassHouse from "./markers/GlassHouse";
import FacePainting from "./markers/FacePainting";
import VintageClothing from "./markers/VintageClothing";
import FriendshipBracelets from "./markers/FriendshipBracelets";
import Magazine from "./markers/Magazine";
import Yuzu from "./markers/Yuzu";
import Coffee from "./markers/Coffee";
const { REACT_APP_MAPACCESSTOKEN } = process.env;

mapboxgl.accessToken = REACT_APP_MAPACCESSTOKEN;
console.log(REACT_APP_MAPACCESSTOKEN)
const MapContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const Title = styled.div`
  position: absolute;
  z-index: 0;
  display: flex;
  padding-top: 16px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 50px;
`;

const Map = () => {
  const mapContainerRef = useRef(null);

 
  const [lng, setLng] = useState(53);
  const [lat, setLat] = useState(-1);
  const [zoom, setZoom] = useState(1.5);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  // Initialize map when component mounts
  useEffect(() => {

    const box = [
      [-1.03497, 53.94624], //SW corner
      [-1.02813, 53.95003], //NE corner
    ];
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng,lat],
      zoom: zoom,
      maxBounds: box, // User cannot navigate past these bounds

    });

    createMarker(
      map,
      53.947123,
      -1.032193,
      <Stage
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <BsSpeaker size={50} />
    );
    createMarker(
      map,
      53.946964,
      -1.032602,
      <Yuzu
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <GiFrenchFries size={50} />
    );

    createMarker(
      map,
      53.947024,
      -1.032540,
      <GlassHouse
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <IoBeerOutline size={50} />
    );

    createMarker(
      map,
      53.946910,
      -1.032641,
      <Coffee
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <GiHotDog size={50} />
    );

    createMarker(
      map,
      53.947382,
      -1.031851,
      <Merch
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <IoShirtOutline size={50} />
    );

    createMarker(
      map,
      53.9474,
      -1.0317,
      <VintageClothing
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <img src={require("./images/vintage-clothing.png")} alt="Vintage Clothing Logo" height="50px" width="50px" />
    );

    createMarker(
      map,
      53.9474423,
      -1.032192,
      <FriendshipBracelets
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <img src={require("./images/friendship-bracelets.png")} alt="Bracelets Logo" height="50px" width="50px" />
    );

    createMarker(
      map,
      53.947313,
      -1.031560,
      <Magazine
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <img src={require("./images/circulation-mag.png")} alt="Circulation Magazine Logo" height="50px" width="50px" />
    );
    
    createMarker(
      map,
      53.947399,
      -1.031967,
      <FacePainting
        closeModal={() => setShowModal(false)}
        onClickFunc={(modalContent) => {
          console.log("Open Modal");
          setShowModal(true);
          setModalContent(modalContent);
        }}
      />,
      <img
        src={require("./images/face-painting.png")}
        alt ="Face Painting Logo"
        height="50px"
        width="50px"
      />
    );

    //Whenever you pan or zoom the map, the script will update the longitude, latitude, and zoom level, ensuring real-time tracking of the map’s position.
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4)); 
    });

    /*map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });*/

    const bbox = [
      [-1.04, 53.94], //southwest corner
      [-1.03, 53.95], //northeast corner
    ];
    //adjusts the map's viewport ot ensure that the bounding box is always fully visible
    map.fitBounds(bbox, {
      padding: { top: 10, bottom: 25, left: 15, right: 5 },
    });

    map.on("load", function () {
      console.log("Map loaded");
      map.addSource("radar", {
        type: "image",
        url: "https://www.goodricke.co.uk/wp-content/uploads/2022/04/Nucleus-Map-2.png",
        coordinates: [
          [-1.0313051485826463, 53.94867458853355],
          [-1.0309324482159923, 53.94868076436762],
          [-1.0309243113024706, 53.94834823038076],
          [-1.0313168632305008, 53.94834836762021],
        ],
      });
      map.addLayer({
        id: "radar-layer",
        type: "raster",
        source: "radar",
        paint: {
          "raster-fade-duration": 0,
        },
      });
    });
    // Clean up on unmount
    return () => map.remove();
  }, );

  return (
    <Container>
      <MapContainer ref={mapContainerRef}>
        <Title>
          <a href="https://www.goodrickecollege.com/">
            <Logo src={require("./images/Goodricke_college.png")} height="50px" width="50px" />
          </a>
        </Title>
      </MapContainer>

      <div id="ReactModal">
        <ReactModal
          isOpen={showModal}
          contentLabel="Map overlay displaying further information of selected marker"
          appElement={document.getElementById("ReactModal")}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
        >
          {modalContent}
        </ReactModal>
      </div>
    </Container>
  );
};

export default Map;

function createMarker(map, lat, lng, popupElement, markerIcon) {
  const popupNode = document.createElement("div");
  const popupNodeRoot = createRoot(popupNode);
  popupNodeRoot.render(popupElement);
  const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupNode);
  const markerElement = document.createElement("div");
  const markerElementRoot = createRoot(markerElement);
  markerElementRoot.render(markerIcon);
  markerElement.id = "marker";
  new mapboxgl.Marker(markerElement)
    .setLngLat([lng, lat])
    .setPopup(popup) // add popup
    .addTo(map);
}
