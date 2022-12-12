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
import { works } from 'boot/axios';
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

    const places = await works.get('/places/');
    datos.value = places.data;

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
