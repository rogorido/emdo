<template>
  <Chart type="bar" :data="chartData" />
</template>

<script setup>
import Chart from 'primevue/chart';
import { createChaptersDecadesData } from '@/utils/createDataChart';

const config = useRuntimeConfig();
const api = config.public.apiBaseUrl;

const chartData = ref();

const { data, status, error } = await useFetch(
  `${api}/chapters/capgensperdecade/`
);

if (data) {
  chartData.value = createChaptersDecadesData(data.value);
  console.log(chartData.value);
} else {
  console.log(error);
}
</script>
