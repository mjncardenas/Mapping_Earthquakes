// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};
// Create the map object with a center, zoom level and default layer.
let map = L.map('mapid', {
  center:[39.5, -98.5],
  zoom: 3,
  layers: [streets]
});
// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the Toronto neighborhoods GeoJSON URL.
// let earth = "https://raw.githubusercontent.com/mjncardenas/Mapping_Earthquakes/master/torontoNeighborhoods.json";

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJSON(data).addTo(map);

// })
// Retrieve the earthquake GeoJSON data.

 
});
