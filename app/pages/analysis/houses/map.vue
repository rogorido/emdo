<template>
  <h1 class="text-center">Map</h1>

  <div id="mapid"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import L from 'leaflet';
import LatLngBounds from 'leaflet';
import { markerClusterGroup } from 'leaflet.markercluster';

const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;

let mymap;

// probably this reason:
// https://nuxt.com/docs/4.x/guide/best-practices/hydration#third-party-libraries-with-side-effects
onMounted(async () => {
  mymap = L.map('mapid').setView([42.5145, -83.0147], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  const { data, status, error } = await useFetch(`${api}/houses/houses/`);

  if (data) {
    // we create the object latLngBounds() and extend it thereafter.
    // https://gis.stackexchange.com/questions/301286/how-to-fit-bounds-after-adding-multiple-markers
    var bounds = L.latLngBounds();

    // NOTE: I create an array to store the markers of the houses.
    // I could add every marker to L.markerClusterGroup(); with
    // markers.addLayer(circle)
    // BUT: I do not know how to access the markers for adapting the size of points
    // with the zoom!
    let housesmarkers = [];

    data.value.forEach((house) => {
      var circle = L.circle([house.latitude, house.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.7,
        radius: 7500
      });

      circle.bindPopup(
        `<p>House: ${house.housename} <br />House id: ${house.house_id}. </p>`
      );

      housesmarkers.push(circle);

      bounds.extend([house.latitude, house.longitude]);
    });
    var markers = L.markerClusterGroup();
    markers.addLayers(housesmarkers);

    mymap.addLayer(markers);
    mymap.fitBounds(bounds);

    mymap.on('zoomend', function () {
      var currentzoom = mymap.getZoom();
      housesmarkers.forEach((circle) => {
        circle.setRadius(circle.getRadius() * currentzoom * 0.2);
      });
    });
  }
});
</script>

<style scoped>
#mapid {
  height: 450px;
}
</style>
