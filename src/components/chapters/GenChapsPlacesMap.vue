<template>
  <div id="mapid"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

export default {
  name: 'GenChapsPlacesMap',
  setup() {
    const datos = ref([]);
    const placescoord = ref([]);
    const $q = useQuasar();

    let mymap;

    onMounted(() => {
      mymap = L.map('mapid').setView([45.758, 4.841], 5);
      L.tileLayer(
        'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
        {
          attribution:
            'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
        }
      ).addTo(mymap);
    });

    const loadMap = async () => {
      try {
        const placeslist = await api.get('/chapters/capgensperplaces/');
        datos.value = placeslist.data;
        datos.value.forEach((place) => {
          var circle = L.circle([place.latitude, place.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.7,
            radius: Math.sqrt(place.total) * 7500
          }).addTo(mymap);
        });
      } catch (err) {
        console.log(err);
        $q.notify({
          message: 'An error has occurred. Load the page again!'
        });
      }
    };

    loadMap();

    return {
      datos,
      placescoord
    };
  }
};
</script>

<style scoped>
#mapid {
  height: 450px;
}
</style>
