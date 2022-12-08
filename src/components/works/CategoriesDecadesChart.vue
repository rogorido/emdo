<template>
  <Bar :chart-data="chartData" />
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
import { createDataChart } from '../../utils/createDataChart';

const props = defineProps({ decades: Array });

const chartData = createDataChart(props.decades);
</script>
