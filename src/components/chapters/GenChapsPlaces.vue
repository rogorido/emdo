<template>
  <q-table
    title="Places"
    :rows="datos"
    :columns="columnsChapters"
    :visible-columns="visibleColumnsChapters"
    :pagination="initialPaginationPlacesChapters"
    :key="datos.place_id"
  ></q-table>
</template>

<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import {
  columnsChapters,
  initialPaginationPlacesChapters,
  visibleColumnsChapters
} from '../../assets/columnsnames';

export default {
  name: 'GenChapsPlaces',

  async setup() {
    const datos = ref([]);
    const $q = useQuasar();

    try {
      const placeslist = await api.get('/chapters/capgensperplaces/');
      datos.value = placeslist.data;
      datos.value.forEach((element) => (element.total = +element.total));
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      datos,
      columnsChapters,
      initialPaginationPlacesChapters,
      visibleColumnsChapters
    };
  }
};
</script>
