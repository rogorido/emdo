<template>
  <q-table
    title="Autores"
    :rows="datos"
    :columns="columnsAuthorsAll"
    :pagination="initialPaginationAuthors"
    row-key="person_id"
    @row-click="onRowClicked"
  >
  </q-table>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { works } from 'boot/axios';
import { useAuthorStore } from '../../stores/authorStore';
import {
  columnsAuthorsAll,
  initialPaginationAuthors
} from '../../assets/columnsnames';
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
      initialPaginationAuthors,
      onRowClicked
    };
  }
});
</script>
