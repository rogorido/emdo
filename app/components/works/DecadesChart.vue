<template>
  <Chart type="bar" :data="chartData" />
</template>

<script setup>
import Chart from 'primevue/chart';

import { createWorksCategoriesData } from '@/utils/createDataChart';

const props = defineProps({ decades: Array });

const chartData = createWorksCategoriesData(props.decades);
</script>
