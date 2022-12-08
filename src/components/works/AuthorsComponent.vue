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
import { works } from 'boot/axios';
import {
  columnsAuthorsAll,
  initialPagination
} from '../../assets/columnsvariables';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AuthorsComponent',

  async setup() {
    const datos = ref([]);
    const author_id = ref(null);

    const router = useRouter();

    const onRowClicked = (evt, row) => {
      // console.log("clicked on", row.person_id);
      author_id.value = row.person_id;
      router.push(`/works/authors/${author_id.value}`);
    };

    const authorsall = await works.get('/authors/');
    datos.value = authorsall.data;

    return {
      datos,
      columnsAuthorsAll,
      initialPagination,
      onRowClicked,
      author_id
    };
  }
});
</script>
