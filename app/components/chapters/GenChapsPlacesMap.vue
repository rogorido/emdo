<template>
  <div id="mapid"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { LatLngBounds } from 'leaflet';

const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;

let mymap;

// probably this reason:
// https://nuxt.com/docs/4.x/guide/best-practices/hydration#third-party-libraries-with-side-effects
onMounted(async () => {
  mymap = L.map('mapid').setView([42.5145, -83.0147], 7);

  // https://docs.stadiamaps.com/map-styles/alidade-smooth/
  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  ).addTo(mymap);

  const { data, status, error } = await useFetch(
    `${api}/chapters/capgensperplaces/`
  );

  if (data) {
    // we create the object latLngBounds() and extend it thereafter.
    // https://gis.stackexchange.com/questions/301286/how-to-fit-bounds-after-adding-multiple-markers
    var bounds = L.latLngBounds();

    // NOTE: I create an array to store the markers of the houses.
    // I could add every marker to L.markerClusterGroup(); with
    // markers.addLayer(circle)
    // BUT: I do not know how to access the markers for adapting the size of points
    // with the zoom!
    let placesmarkers = [];

    data.value.forEach((place) => {
      var circle = L.circle([place.latitude, place.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.7,
        radius: Math.sqrt(place.total) * 7500
      });

      circle.bindPopup(
        `<p>Place: ${place.place} <br />Total: ${place.total}. <br />  </p>`
      );

      placesmarkers.push(circle);
      circle.addTo(mymap);

      bounds.extend([place.latitude, place.longitude]);
    });

    mymap.fitBounds(bounds);

    mymap.on('zoomend', function () {
      var currentzoom = mymap.getZoom();
      placesmarkers.forEach((circle) => {
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
