<template>
  <h2 class="text-center">Works written in {{ data.place_name }}</h2>
  <div class="mt-3">
    <div id="mapid"></div>
  </div>
  <div v-if="data" class="flex gap-2">
    <Card>
      <template #title>Total de obras (con reediciones)</template>
      <template #content>
        <p class="m-0 my-primary">{{ data.totalWorksWithReeditions }}</p>
      </template>
    </Card>
    <Card>
      <template #title>Total de obras (sin reediciones)</template>
      <template #content>
        <p class="m-0 my-primary">{{ data.totalWorksWithoutReeditions }}</p>
      </template>
    </Card>
    <Card>
      <template #title>Total manuscritos</template>
      <template #content>
        <p class="m-0 my-primary">{{ data.totalManuscripts }}</p>
      </template>
    </Card>
    <Card>
      <template #title>Total de autores</template>
      <template #content>
        <p class="m-0 my-primary">{{ data.authors }}</p>
      </template>
    </Card>
  </div>
  <!-- Graph per decade -->
  <WorksDecadesChart :decades="data.decades" />

  <!-- Tables -->
  <div v-if="data" class="row">
    <!-- Categorías -->
    <h3 class="text-center">Themes</h3>
    <DataTable
      :value="data.place_cats"
      paginator
      stripedRows
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50, 100]"
      selectionMode="single"
      dataKey="theme"
      v-if="data"
    >
      <Column field="theme" header="Theme" sortable></Column>
      <Column field="total" header="Total" sortable></Column>
      <Column field="porcentaje" header="%" sortable></Column>
    </DataTable>

    <h3 class="text-center">Formats</h3>
    <!-- Formatos -->
    <!-- NOTE: esto se podría crear un componente. Está repetido -->
    <DataTable
      :value="data.totalFormats"
      paginator
      stripedRows
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50, 100]"
      selectionMode="single"
      dataKey="house_id"
      v-if="data"
    >
      <Column field="format" header="Format" sortable></Column>
      <Column field="total" header="Total" sortable></Column>
      <Column
        field="totaloriginal"
        header="Total (originals)"
        sortable
      ></Column>
      <Column field="totalreed" header="Total (reeditions)" sortable></Column>
    </DataTable>
  </div>
</template>

<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;
const route = useRoute();

let mymap;

const { data, status, error } = await useFetch(
  `${api}/works/places/${route.params.id}`
);

// probably this reason:
// https://nuxt.com/docs/4.x/guide/best-practices/hydration#third-party-libraries-with-side-effects
onMounted(async () => {
  mymap = L.map('mapid');
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  if (data) {
    var circle = L.circle(
      [data.value.coords[0].latitude, data.value.coords[0].longitude],
      {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.7,
        radius: 15000
      }
    ).addTo(mymap);

    mymap.setView(
      [data.value.coords[0].latitude, data.value.coords[0].longitude],
      6
    );
  }
});
</script>

<style scoped>
#mapid {
  height: 350px;
}
</style>
