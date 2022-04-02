import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const box = [
      [-1.03497, 53.94624],
      [-1.02813, 53.95003],
    ];
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      maxBounds: box,
    });
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      '<div class="popup"><h1>Main Stage Schedule</h1><p>Theses are all of the acts that will be happing during the day in a table format with aprox start times :)</p></br><p> Or should this be a link to a neater version of the schedule?</p></div>'
    );

    // create DOM element for the marker
    const el = document.createElement("div");
    el.id = "marker";

    const marker = new mapboxgl.Marker(el)
      .setLngLat([-1.031986604550525, 53.948434952146755])
      .setPopup(popup) // add popup
      .addTo(map);

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    const bbox = [
      [-1.033, 53.949],
      [-1.03, 53.948],
    ];
    map.fitBounds(bbox, {
      padding: { top: 10, bottom: 25, left: 15, right: 5 },
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
