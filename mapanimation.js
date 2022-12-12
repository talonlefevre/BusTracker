// // This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGFsb25teWVycyIsImEiOiJjbGJoZDdtcHIwaWIxM3ZwZ3hxdXBjMmM3In0.nqfknhwEwtJd7XNg7kPbog';
  
  // TODO: create the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  let marker0 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.093729, 42.359244]).addTo(map);
  let marker1 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.094915, 42.360175]).addTo(map);
  let marker2 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.0958, 42.360698]).addTo(map);
  let marker3 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.099558, 42.362953]).addTo(map);
  let marker4 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.103476, 42.365248]).addTo(map);
  let marker5 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.106067, 42.366806]).addTo(map);
  let marker6 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.108717, 42.368355]).addTo(map);
  let marker7 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.110799, 42.369192]).addTo(map);
  let marker8 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.113095, 42.370218]).addTo(map);
  let marker9 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.115476, 42.372085]).addTo(map);
  let marker10 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.117585, 42.373016]).addTo(map);
  let marker11 = new mapboxgl.Marker({ "color": "#b40219"}).setLngLat([-71.118625, 42.374863]).addTo(map);

  // TODO: add a marker to the map
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  

  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }

