// Initialize and add the map
function initMap() {
  // The location of the company
  const address = { lat: 54.170838, lng: -8.606031 };
  // The map, centered at the premises
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: address,
  });
  // The marker, positioned at our address
  const marker = new google.maps.Marker({
    position: address,
    map: map,
  });
}