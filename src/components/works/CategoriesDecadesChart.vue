<template>
  <Bar :data="chartData" />
</template>

<script setup>
import { createWorksCategoriesData } from '../../utils/createDataChart';
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

const props = defineProps({ decades: Array });

const chartData = createWorksCategoriesData(props.decades);
</script>
