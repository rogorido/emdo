<template>
  <div v-if="info.persona">
    <h4>
      {{ info.persona.person_name }} ({{ info.persona.datebirth }} -
      {{ info.persona.datedeath }})
    </h4>
    <p>ID de la persona: {{ info.persona.person_id }}</p>
    <p v-if="info.persona.birth_place_name">
      Nacido en {{ info.persona.birth_place_name }}
    </p>
    <p v-if="info.persona.person_origen">
      Origen: {{ info.persona.person_origen }}
    </p>
    <p v-if="info.persona.prof_house_name">
      Casa de profesión: {{ info.persona.prof_house_name }}
    </p>
    <p v-if="info.persona.province_name">
      De la provincia de: {{ info.persona.province_name }}
    </p>
  </div>
  <div v-if="info.cats">
    <q-table
      title="Categorías"
      :rows="info.cats"
      :columns="columnsCatsAuthorById"
      :pagination="initialPaginationAuthors"
      row-key="theme_id"
      @row-click="onRowClicked"
    >
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { works } from 'boot/axios';
import {
  columnsCatsAuthorById,
  initialPaginationAuthors
} from '../../assets/columnsnames';

export default defineComponent({
  name: 'AuthorDetails',

  props: ['author_id'],

  async setup(props) {
    const info = ref({ persona: null, cats: null });
    const router = useRouter();
    const category_id = ref();

    // https://vuejs.org/guide/essentials/watchers.html#watcheffect
    // TODO: creo q esto no hace fatla en categorydatails.vue lo tengo mil
    // veces más fácil
    watchEffect(async () => {
      if (props.author_id != null) {
        const response = await works.get(`/authors/${props.author_id}`);
        info.value = response.data;
      }
    });

    const onRowClicked = (evt, row) => {
      console.log('clicked on', row.theme);
      category_id.value = row.theme_id;
      router.push(`/categories/${category_id.value}`);
    };

    return {
      info,
      onRowClicked,
      columnsCatsAuthorById,
      initialPaginationAuthors
    };
  }
});
</script>
