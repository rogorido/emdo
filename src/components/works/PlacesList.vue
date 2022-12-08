<template>
  <div class="q-pa-md row items-start q-gutter-md">
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
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { works } from 'boot/axios';

import {
  columnsPlacesAll,
  initialPaginationPlaces,
  visibleColumnsPlaces
} from '../../assets/columnsnames';

import { usePlaceStore } from '../../stores/placesStore';

export default defineComponent({
  name: 'PlacesComponent',

  async setup() {
    const datos = ref([]);
    const place_id = ref(null);

    const store = usePlaceStore();
    const router = useRouter();

    const onRowClicked = (evt, row) => {
      place_id.value = row.place_print_id;
      store.placeSelected(place_id.value);
      router.push({
        name: 'placebyid',
        params: { id: place_id.value }
      });
    };

    const places = await works.get('/places/');
    datos.value = places.data;

    return {
      datos,
      columnsPlacesAll,
      initialPaginationPlaces,
      visibleColumnsPlaces,
      onRowClicked,
      place_id
    };
  }
});
</script>
