<template>
  <div v-if="info" class="q-pa-md">
    <h4 class="text-center">{{ info.categoryName }}</h4>
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

        <q-card-section>
          {{ info.totalPrinted }} ( {{ info.percentagePrinted.toFixed(2) }} % )
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de manuscritos</div>
        </q-card-section>

        <q-card-section>
          {{ info.totalManuscrits }} (
          {{ info.percentageManuscrits.toFixed(2) }} % )
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total de autores</div>
        </q-card-section>

        <q-card-section>
          {{ info.totalAuthors }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div v-if="info" class="row items-start q-gutter-md">
    <q-table title="Lugares" :rows="info.places"> </q-table>
    <q-table
      title="Categorías relacionadas"
      :rows="info.related_cats"
      :pagination="initialPagination"
    >
    </q-table>
  </div>
  <div v-if="info" class="row q-gutter-md">
    <div class="col">
      <q-list v-if="info" bordered separator>
        <AuthorItem
          v-for="(author, author_id) in info.concrete_authors"
          :key="author_id"
          :author="author"
        >
        </AuthorItem>
      </q-list>
    </div>
    <div class="col">
      <DecadesChart :decades="info.decades" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { works } from 'boot/axios';
import {
  columnsCatsAuthorById,
  initialPagination
} from '../../assets/columnsvariables';

import AuthorItem from './AuthorItem.vue';
import DecadesChart from './CategoriesDecadesChart.vue';

const props = defineProps({
  category_id: String
});

const info = ref();

console.log(props.category_id);
const loadCategory = async () => {
  try {
    const response = await works.get(`/categories/${props.category_id}`);
    info.value = response.data;
  } catch (err) {
    console.log('este es el error', err);
  }
};

if (props.category_id != null) {
  loadCategory();
}
// Atención esta estrucutra tan rara proviene de aquí
// https://stackoverflow.com/questions/59125857/how-to-watch-props-change-with-vue-composition-api-vue-3
// entiendo q la idea es que watch necesita una ref y eso lo
// transforma y luego ejecutoa lo otro. Aquí está el manual
// https://vuejs.org/guide/essentials/watchers.html#watch-source-types
// watch(
//   () => props.category_id,
//   async () => {
//     const response = await api.get(`/categories/${props.category_id}`);
//     info.value = response.data;
//   }
// );
</script>
