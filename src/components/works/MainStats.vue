<template>
  <h2>Datos generales</h2>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Total de obras</div>
      </q-card-section>

      <q-card-section>
        {{ datos.totalWorks }}
      </q-card-section>
    </q-card>
    <q-card class="bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Total de impresas</div>
      </q-card-section>

      <q-card-section>
        {{ datos.totalPrinted }} ( {{ datos.percentagePrinted.toFixed(2) }} % )
      </q-card-section>
    </q-card>

    <q-card class="bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Total de manuscritos</div>
      </q-card-section>

      <q-card-section>
        {{ datos.totalManuscrits }} (
        {{ datos.percentageManuscrits.toFixed(2) }} % )
      </q-card-section>
    </q-card>

    <q-card class="bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Total de autores</div>
      </q-card-section>

      <q-card-section>
        {{ datos.totalAuthors }}
      </q-card-section>
    </q-card>

    <q-card class="bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Obras sin categoría</div>
      </q-card-section>

      <q-card-section>
        {{ datos.totalWorksWithoutThemes }}
      </q-card-section>
    </q-card>
  </div>
  <div class="row items-start q-gutter-md">
    <q-table
      title="Lenguas"
      :rows="datos.totalLanguages"
      :columns="columnsLanguages"
      :pagination="initialPagination"
    >
    </q-table>
    <q-table
      title="Formatos"
      :rows="datos.totalFormats"
      :pagination="initialPagination"
    >
    </q-table>
  </div>
  <div>
    <q-table title="Lugares" :rows="datos.totalPlaces"> </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

const columnsLanguages = [
  {
    name: 'Lengua',
    label: 'Lengua',
    required: true,
    align: 'left',
    field: 'language_work',
    sortable: true
  },
  {
    name: 'Total',
    label: 'Total',
    align: 'right',
    field: 'total',
    sortable: true
  }
];

const initialPagination = {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 0 // esto es infinito
  // rowsNumber: xx if getting data from a server
};

export default defineComponent({
  name: 'MainStats',

  async setup() {
    const datos = ref([]);
    const $q = useQuasar();

    try {
      const response = await api.get('/works/statistics/general/');
      datos.value = response.data;
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return { datos, columnsLanguages, initialPagination };
  }
});
</script>

<style scoped></style>
