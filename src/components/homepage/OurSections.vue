<template>
  <div class="row">
    <h3>Our sections</h3>
  </div>
  <div class="row q-gutter-md">
    <div class="col-3" v-for="section in sections" :key="section.id">
      <q-card
        v-ripple
        class="q-hoverable cursor-pointer"
        @click="goToSite(section.link)"
      >
        <q-img
          :src="`images/${section.image}`"
          :alt="section.title"
          height="250px"
          class="q-mb-md"
        ></q-img>

        <div class="text-h4 text-center">
          {{ section.titulo }}
        </div>
        <q-card-section>{{ section.texto }} </q-card-section>
        <q-separator />
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { sections } from '../../assets/links';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSite = (site) => {
  router.push(site);
};
</script>
