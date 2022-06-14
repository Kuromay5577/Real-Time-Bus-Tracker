var markers = [];
async function run() {
  const locations = await getBusLocations();
  //   const result = locations.vehicle.filter((item) => {
  //     return item.signMessage === "Red Line to Beaverton";
  //   });
  markers.map((marker) => {
    marker.remove();
  });
  markers = [];
  locations.vehicle.map((item) => {
    markers.push(
      new mapboxgl.Marker({
        color: "orange",
      })
        .setLngLat([item.longitude, item.latitude])
        .addTo(map)
    );
  });

  setTimeout(run, 1500);
}
async function getBusLocations() {
  const url =
    "https://developer.trimet.org/ws/v2/vehicles&appID=D2D373E323BA05B7C3A3D8347";
  const response = await fetch(url);
  const json = await response.json();
  return json.resultSet;
}

// TODO: add your own access token
mapboxgl.accessToken =
  "pk.eyJ1IjoibWF5NTU3NyIsImEiOiJjbDQ4eWk2cWoweDQ2M2pscmVtOG1uMm9lIn0.3RdLUwqiNTjkefZ6clW9Qg";

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-122.6793, 45.519],
  zoom: 11.5,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  run();
}

// TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
// Use counter to access bus stops in the array busStops
// Make sure you call move() after you increment the counter.

// Do not edit code past this point
if (typeof module !== "undefined") {
  module.exports = { move };
}
