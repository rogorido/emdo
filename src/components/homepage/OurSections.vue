<template>
  <section class="probando">
    <h4 class="text-center">Our sections</h4>

    <div
      class="row q-mb-lg oferta q-hoverable cursor-pointer"
      v-for="section in sections"
      :key="section.id"
      @click="goToSite(section.link)"
    >
      <div class="col imageshown">
        <q-img
          :src="`images/${section.image}`"
          :alt="section.title"
          height="250px"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase">
          {{ section.titulo }}
        </h5>
        <p>{{ section.texto }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { sections } from '../../assets/links';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSite = (site) => {
  router.push(site);
};
</script>

<style lang="scss" scoped>
@media (min-width: 701px) {
  .oferta:nth-of-type(2n) {
    .imageshown {
      order: 2;
    }
    .descriptionshown {
      order: 1;
    }
  }
}

@media (max-width: 700px) {
  .oferta {
    flex-direction: column;
    .imageshown {
      order: 1;
    }
    .descriptionshown {
      order: 2;
    }
  }
}
</style>
