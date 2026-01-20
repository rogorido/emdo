<template>
  <DataTable
    :value="houses"
    paginator
    stripedRows
    :rows="10"
    :rowsPerPageOptions="[10, 20, 50, 100]"
    selectionMode="single"
    @rowSelect="onRowSelect"
    dataKey="place"
    v-model:filters="filters"
    filterDisplay="row"
    v-if="data"
  >
    <Column field="place" header="Place" sortable></Column>
    <Column field="total" header="Total" sortable></Column>
  </DataTable>
</template>

<script setup>
const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;
import { FilterMatchMode } from '@primevue/core/api';

const houses = ref();

// NOTE: no veo diferencia usando uselazyfetch... por qué?
// const { data, status, error } = await useFetch(`${api}/groups`, {
const { data, status, error } = await useFetch(
  `${api}/chapters/capgensperplaces/`
);

/* console.log(data); */
if (data) {
  houses.value = data.value;
  console.log('esto es el asunto', houses.value);
}

// I dont really understand how this works...
const filters = ref({
  place: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
</script>
