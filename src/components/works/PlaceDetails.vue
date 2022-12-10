<template>
  <div id="mapid"></div>
  <div v-if="info" class="q-pa-md">
    <h4 class="text-center">{{ info.place_name }}</h4>

    <div class="row items-start q-gutter-md">
      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de obras</div>
        </q-card-section>

        <q-card-section>
          {{ info.totalWorks }}
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de impresas</div>
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de manuscritos</div>
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de autores</div>
        </q-card-section>

        <q-card-section>
          {{ info.authors }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div v-if="info" class="row">
    <div class="col">
      <DecadesChart :decades="info.decades" />
    </div>
  </div>
  <div v-if="info" class="row items-start q-gutter-md">
    <q-table title="Categories" :rows="info.place_cats"> </q-table>
    <q-table
      title="Formatos"
      :rows="info.totalFormats"
      :pagination="initialPagination"
    >
    </q-table>
  </div>

  <div v-if="info" class="row">
    <q-list v-if="info" bordered separator>
      <AuthorItem
        v-for="(author, author_id) in info.concrete_authors"
        :key="author_id"
        :author="author"
      >
      </AuthorItem>
    </q-list>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { works } from 'boot/axios';
import L from 'leaflet';
import {
  columnsCatsAuthorById,
  initialPagination
} from '../../assets/columnsvariables';

import AuthorItem from './AuthorItem.vue';
import DecadesChart from './CategoriesDecadesChart.vue';

import 'leaflet/dist/leaflet.css';

export default {
  name: 'AboutPage',
  props: ['place_id'],

  setup(props) {
    const info = ref();
    let mymap;

    onMounted(() => {
      mymap = L.map('mapid').setView([42.5145, -83.0147], 9);

      L.tileLayer(
        'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
        {
          attribution:
            'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
        }
      ).addTo(mymap);
    });

    const loadPlace = async () => {
      try {
        const response = await works.get(`/places/${props.place_id}`);
        info.value = response.data;
        const { coords } = info.value;
        // coords is an array!
        var circle = L.circle([coords[0].latitude, coords[0].longitude], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.7,
          radius: 7500
        }).addTo(mymap);
        mymap.setView([coords[0].latitude, coords[0].longitude], 7);
      } catch (err) {
        console.log('este es el error', err);
      }
    };

    if (props.place_id != null) {
      loadPlace();
    }

    return { info, loadPlace };
  }
};
</script>

<style scoped>
#mapid {
  height: 250px;
}
</style>
