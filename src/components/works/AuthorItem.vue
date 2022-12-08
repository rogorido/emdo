<template>
  <q-item clickable v-ripple :to="`/authors/${author.person_id}`">
    <q-item-section>
      <q-item-label>
        {{ author.person_name }} ({{ author.datebirth }} -
        {{ author.datedeath }})</q-item-label
      >
      <q-item-label caption>{{ author.person_id }} </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthorItem',

  props: ['author'],

  setup(props) {
    // console.log(props.author);
  }
});
</script>
