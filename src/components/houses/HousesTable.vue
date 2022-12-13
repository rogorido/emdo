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

import {
  columnsHousesAll,
  initialPaginationHouses,
  visibleColumnsHouses
} from '../../assets/columnsnames';

export default {
  name: 'HousesTable',
  async setup() {
    const datos = ref([]);

    const houseslist = await api.get('/houses/houses/');
    datos.value = houseslist.data;

    return {
      datos,
      columnsHousesAll,
      visibleColumnsHouses,
      initialPaginationHouses
    };
  }
};
</script>
