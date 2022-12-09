<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      title="Categories"
      :rows="datos"
      :columns="columnsCategoriesAll"
      :pagination="initialPagination"
      row-key="theme_id"
      @row-click="onRowClicked"
    >
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCategoryStore } from '../../stores/categoryStore';
import { works } from 'boot/axios';
import {
  columnsCategoriesAll,
  initialPagination
} from '../../assets/columnsvariables';

export default defineComponent({
  name: 'CategoriesComponent',

  async setup() {
    const datos = ref([]);

    const router = useRouter();
    const store = useCategoryStore();

    const onRowClicked = (evt, row) => {
      // console.log('clicked on', row.theme);
      store.category = row.theme_id;
      router.push(`/works/categories/${row.theme}`);
    };

    const categories = await works.get('/categories/');
    datos.value = categories.data;

    return {
      datos,
      columnsCategoriesAll,
      initialPagination,
      onRowClicked
    };
  }
});
</script>
