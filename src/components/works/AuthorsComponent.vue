<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-table
      title="Autores"
      :rows="datos"
      :columns="columnsAuthorsAll"
      :pagination="initialPagination"
      row-key="person_id"
      @row-click="onRowClicked"
    >
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { works } from 'boot/axios';
import { useAuthorStore } from '../../stores/authorStore';
import {
  columnsAuthorsAll,
  initialPagination
} from '../../assets/columnsvariables';
import { createSlug } from '../../utils/createSlug';

export default defineComponent({
  name: 'AuthorsComponent',

  async setup() {
    const datos = ref([]);

    const router = useRouter();
    const store = useAuthorStore();

    const onRowClicked = (evt, row) => {
      // console.log("clicked on", row.person_id);
      store.authorSelected(row.person_id);
      const slug = createSlug(row.author);
      router.push({
        name: 'authorbyid',
        params: { author: slug }
      });
    };

    const authorsall = await works.get('/authors/');
    datos.value = authorsall.data;

    return {
      datos,
      columnsAuthorsAll,
      initialPagination,
      onRowClicked
    };
  }
});
</script>
