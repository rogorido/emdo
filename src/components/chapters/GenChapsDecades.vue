<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
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
import { createChaptersDecadesData } from '../../utils/createDataChart';

export default {
  name: 'GenChapsDecades',
  components: { Bar },

  async setup() {
    const chartData = ref([]);
    const $q = useQuasar();

    try {
      const decades = await api.get('/chapters/capgensperdecade/');
      chartData.value = createChaptersDecadesData(decades.data);
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      chartData
    };
  }
};
</script>
