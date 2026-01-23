<template>
  <div class="p-container">
    <h2>Dominican Houses</h2>
    <DataTable
      :value="houses"
      paginator
      stripedRows
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50, 100]"
      selectionMode="single"
      @rowSelect="onRowSelect"
      dataKey="house_id"
      :selection="selectedHouse"
      v-model:filters="filters"
      filterDisplay="row"
      v-if="data"
    >
      <Column field="housename" header="House" sortable></Column>
      <Column field="provincia" header="Province" sortable></Column>
      <Column field="place" header="Place" sortable></Column>
      <Column field="country" header="Country" sortable></Column>
    </DataTable>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;
import { FilterMatchMode } from '@primevue/core/api';

const houses = ref();
const selectedHouse = ref(null);

// NOTE: no veo diferencia usando uselazyfetch... por qué?
// const { data, status, error } = await useFetch(`${api}/groups`, {
const { data, status, error } = await useFetch(`${api}/houses/houses/`);

/* console.log(data); */
if (data) {
  houses.value = data.value;
  console.log('esto es el asunto', houses.value);
}

// TODO: la cuestioón es qué hacer con el slug. Tengo una función de chatgpt
// pero si lo paso así luego en la página [placebyid] no puedo acceder al nombre
// con lo que debería meterlo en un store... o pasarlo con un parámetro, pero no
// veo cómo es posible... es posible con query, pero eso es otra cosa...
function goToSite() {
  return navigateTo(`/position/${selectedPosition.value}`);
}

const onRowSelect = (event) => {
  selectedHouse.value = event.data.house_id;
  goToSite();
};

// I dont really understand how this works...
const filters = ref({
  place: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
</script>
