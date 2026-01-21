<template>
  <DataTable
    :value="data"
    paginator
    stripedRows
    :rows="10"
    :rowsPerPageOptions="[10, 20, 50, 100]"
    selectionMode="single"
    :selection="selectedPlace"
    @rowSelect="onRowSelect"
    dataKey="print_place_id"
    v-if="data"
  >
    <Column field="place" header="Place" sortable></Column>
    <Column field="total" header="Total" sortable></Column>
    <Column field="perctotal" header="Total (%)" sortable></Column>
    <Column field="totaloriginal" header="Total (original)" sortable></Column>
    <Column field="percoriginal" header="% Original" sortable></Column>
    <Column field="totalreed" header="Total (reeditions)" sortable></Column>
    <Column field="percreediciones" header="% Reediciones" sortable></Column>
  </DataTable>
</template>

<script setup>
const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;

const selectedPlace = ref(null);

const { data, status, error } = await useFetch(`${api}/works/places`);

function goToSite() {
  return navigateTo(`/analysis/works/place/${selectedPlace.value}`);
}

const onRowSelect = (event) => {
  selectedPlace.value = event.data.place_print_id;
  goToSite();
};
</script>
