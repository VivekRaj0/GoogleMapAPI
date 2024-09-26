async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: -25.802237, lng: 14.913736 },
    zoom: 3,
    mapId: "4504f8b37365c3d0",
  });
  const flightPlanCoordinates = [
    { lat: 19.0760, lng: 72.8777 },
    { lat: -25.802237, lng: 14.913736 },
    { lat: 40.7128, lng: -74.0060},
  ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    const pinNoGlyph = new PinElement({
      glyph: "",
    });
  const markerS = new AdvancedMarkerElement({
    map,
    position: { lat: 19.0760, lng: 72.8777 },
    content: pinNoGlyph.element,
  });
  const pinBackground = new PinElement({
    background: "#FBBC04",
  });
  const markerD = new AdvancedMarkerElement({
    map,
    position: { lat: 40.7128, lng: -74.0060},
    content: pinBackground.element,
  });
  const pinScaled = new PinElement({
    scale: 1.5,
  });
  const markerC = new AdvancedMarkerElement({
    map,
    position: { lat: -25.802237, lng: 14.913736 },
    content: pinScaled.element,
  })
  flightPath.setMap(map);
}

initMap();