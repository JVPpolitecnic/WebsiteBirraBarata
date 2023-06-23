var map = L.map('map').setView([41.3874, 2.1686], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let iconMarker = L.icon({
    iconUrl: 'Img/sanMiguel.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})
let markerXicra = L.marker([41.380957, 2.137229], { icon: iconMarker }).addTo(map)
    .bindPopup(`<p> Kyiv, Ukraine is the birthplace of Leaflet!<\p>`);

const zooMarkerPopup = L.popup().setContent("This is Munich Zoo");
const zooMarker = L.marker([41.380957, 2.137229], {
    icon: iconMarker
}).bindPopup(zooMarkerPopup).addTo(map);


