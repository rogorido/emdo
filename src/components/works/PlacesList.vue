<template>
  <q-table
    title="Places"
    :rows="datos"
    :columns="columnsPlacesAll"
    :visible-columns="visibleColumnsPlaces"
    :pagination="initialPaginationPlaces"
    row-key="place_id"
    @row-click="onRowClicked"
  >
  </q-table>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { usePlaceStore } from '../../stores/placesStore';
import {
  columnsPlacesAll,
  initialPaginationPlaces,
  visibleColumnsPlaces
} from '../../assets/columnsnames';
import { createSlug } from '../../utils/createSlug';

export default defineComponent({
  name: 'PlacesComponent',

  async setup() {
    const datos = ref([]);
    const $q = useQuasar();

    const store = usePlaceStore();
    const router = useRouter();

    const onRowClicked = (evt, row) => {
      store.placeSelected(row.place_print_id);
      const slug = createSlug(row.place);
      router.push({
        name: 'placebyid',
        params: { place: slug }
      });
    };

    try {
      const places = await api.get('/works/places/');
      datos.value = places.data;
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      datos,
      columnsPlacesAll,
      initialPaginationPlaces,
      visibleColumnsPlaces,
      onRowClicked
    };
  }
});
</script>
