<template>
  <p v-if="info">el lugar es: {{ info.noprintdata }}</p>
  <div v-if="info" class="q-pa-md row items-start q-gutter-md">
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
  <div v-if="info" class="row items-start q-gutter-md">
    <q-table title="Lugares" :rows="info.place_cats"> </q-table>
    <q-table
      title="Formatos"
      :rows="info.totalFormats"
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

<script>
import { defineComponent, ref, watch } from 'vue';
import { works } from 'boot/axios';
import {
  columnsCatsAuthorById,
  initialPagination
} from '../../assets/columnsvariables';

import AuthorItem from './AuthorItem.vue';
import DecadesChart from './CategoriesDecadesChart.vue';

export default defineComponent({
  name: 'PlaceDetails',

  props: ['place_id'],

  components: { AuthorItem, DecadesChart },

  setup(props) {
    const info = ref();

    console.log(props.place_id);
    const loadPlace = async () => {
      try {
        const response = await works.get(`/places/${props.place_id}`);
        info.value = response.data;
        console.log(info.value);
      } catch (err) {
        console.log('este es el error', err);
      }
    };

    if (props.place_id != null) {
      loadPlace();
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

    return {
      info,
      columnsCatsAuthorById,
      initialPagination
    };
  }
});
</script>
