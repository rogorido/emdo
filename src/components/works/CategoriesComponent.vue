<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      title="Categories"
      :rows="datos"
      :columns="columnsCategoriesAll"
      :pagination="initialPaginationCategories"
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
  initialPaginationCategories
} from '../../assets/columnsnames';
import { createSlug } from '../../utils/createSlug';

export default defineComponent({
  name: 'CategoriesComponent',

  async setup() {
    const datos = ref([]);

    const router = useRouter();
    const store = useCategoryStore();

    const onRowClicked = (evt, row) => {
      store.categorySelected(row.theme_id);
      const slug = createSlug(row.theme);
      router.push(`/works/categories/${slug}`);
    };

    const categories = await works.get('/categories/');
    datos.value = categories.data;

    return {
      datos,
      columnsCategoriesAll,
      initialPaginationCategories,
      onRowClicked
    };
  }
});
</script>
