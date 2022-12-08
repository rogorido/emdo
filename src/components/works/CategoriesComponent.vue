<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      title="Categorías"
      :rows="datos"
      :columns="columnsCategoriesAll"
      :pagination="initialPagination"
      row-key="theme_id"
      @row-click="onRowClicked"
    >
    </q-table>
  </div>
  <!-- <CategoryDetails :category_id="category_id"></CategoryDetails> -->
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { works } from 'boot/axios';
import {
  columnsCategoriesAll,
  initialPagination
} from '../../assets/columnsvariables';

export default defineComponent({
  name: 'CategoriesComponent',

  async setup() {
    const datos = ref([]);
    const category_id = ref(null);

    const router = useRouter();

    const onRowClicked = (evt, row) => {
      console.log('clicked on', row.theme);
      category_id.value = row.theme_id;
      router.push(`/works/categories/${category_id.value}`);
    };

    const categories = await works.get('/categories/');
    datos.value = categories.data;

    return {
      datos,
      columnsCategoriesAll,
      initialPagination,
      onRowClicked,
      category_id
    };
  }
});
</script>
