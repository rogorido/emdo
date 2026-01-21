<template>
  <h2>Datos generales</h2>

  <div class="flex gap-2">
    <Card>
      <template #title>Total de obras</template>
      <template #content>
        <p class="m-0 my-primary">
          {{ data.totalWorks }}
        </p>
      </template>
    </Card>

    <!-- Total de impresas -->
    <Card>
      <template #title>Total de impresas</template>
      <template #content>
        <p class="m-0 my-primary">
          {{ data.totalPrinted }} ( {{ data.percentagePrinted.toFixed(2) }} % )
        </p>
      </template>
    </Card>

    <!--     Total de manuscritos -->
    <Card>
      <template #title>Total de manuscritos</template>
      <template #content>
        <p class="m-0 my-primary">
          {{ data.totalManuscrits }} (
          {{ data.percentageManuscrits.toFixed(2) }} % )
        </p>
      </template>
    </Card>

    <!-- Total de autores -->
    <Card>
      <template #title>Total de autores</template>
      <template #content>
        <p class="m-0 my-primary">{{ data.totalAuthors }}</p>
      </template>
    </Card>
  </div>

  <!--   Tables -->
  <div class="row items-start q-gutter-md">
    <h3>Languages used</h3>
    <DataTable
      :value="data.totalLanguages"
      paginator
      stripedRows
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50, 100]"
      selectionMode="single"
      dataKey="house_id"
      v-if="data"
    >
      <Column field="language_work" header="Language" sortable></Column>
      <Column field="total" header="Total" sortable></Column>
    </DataTable>

    <!-- Formats -->
    <h3>Formats used</h3>
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
  <div>
    <q-table title="Lugares" :rows="data.totalPlaces"> </q-table>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;

const { data, status, error } = await useFetch(
  `${api}/works/statistics/general/`
);
</script>
