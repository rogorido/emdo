<template>
  <div class="row">
    <q-table
      title="Houses"
      :rows="datos"
      :columns="columnsHousesAll"
      :visible-columns="visibleColumnsHouses"
      :pagination="initialPaginationHouses"
      row-key="house_id"
    >
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

import {
  columnsHousesAll,
  initialPaginationHouses,
  visibleColumnsHouses
} from '../../assets/columnsnames';

export default {
  name: 'HousesTable',
  async setup() {
    const datos = ref([]);
    const $q = useQuasar();

    try {
      const houseslist = await api.get('/houses/houses/');
      datos.value = houseslist.data;
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      datos,
      columnsHousesAll,
      visibleColumnsHouses,
      initialPaginationHouses
    };
  }
};
</script>
