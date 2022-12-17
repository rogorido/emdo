<template>
  <q-table
    wrap-cells
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
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
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
    const $q = useQuasar();

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

    try {
      const authorsall = await api.get('/works/authors/');
      datos.value = authorsall.data;
    } catch (err) {
      console.log(err);
      $q.notify({
        message: 'An error has occurred. Load the page again!'
      });
    }

    return {
      datos,
      columnsAuthorsAll,
      initialPaginationAuthors,
      onRowClicked
    };
  }
});
</script>
