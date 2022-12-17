<template>
  <div class="row">
    <q-table
      title="Provinces"
      :rows="datos"
      :columns="columnsHousesProvincesAll"
      :visible-columns="visibleColumnsHousesProvinces"
      :pagination="initialPaginationHousesProvinces"
      row-key="province_id"
    >
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

import {
  columnsHousesProvincesAll,
  initialPaginationHousesProvinces,
  visibleColumnsHousesProvinces
} from '../../assets/columnsnames';

export default {
  name: 'HousesProvincesTable',
  async setup() {
    const datos = ref([]);
    const $q = useQuasar();

    try {
      const provinceslist = await api.get('/houses/provinces/');
      datos.value = provinceslist.data;
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      datos,
      columnsHousesProvincesAll,
      visibleColumnsHousesProvinces,
      initialPaginationHousesProvinces
    };
  }
};
</script>
