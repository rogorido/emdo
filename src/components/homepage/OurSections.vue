<template>
  <section>
    <h4 class="text-center">Our sections</h4>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-lg"
      @click="goToSite('/houses')"
    >
      <div class="col imageshown">
        <q-img
          src="images/archipel-sanlazaro-colored.webp"
          alt="houses"
          height="400px"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Houses
        </h5>
        <p>
          La Orden de Predicadores llegará a tener unas 1200 casas repartidas a
          lo largo y ancho del globo. Su presencia global será una de sus
          características más relevantes. Pero su distribución fue muy desigual.
          Nuestra cartografía es un intento de representar esa presencia global.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/bishops')"
    >
      <div class="col imageshown">
        <q-img
          src="images/bishops.webp"
          alt="bishops"
          height="400px"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Bishops
        </h5>
        <p>
          Dominican houses are important feature of the Order. The question is
          how many houses were present in the world.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/chapters')"
    >
      <div class="col imageshown">
        <q-img
          src="images/cagayan.png"
          alt="chapters"
          height="400px"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Chapters
        </h5>
        <p>
          Dominican houses are important feature of the Order. The question is
          how many houses were present in the world.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/resolutions')"
    >
      <div class="col imageshown">
        <q-img
          src="images/cagayan.png"
          alt="resolutions"
          height="400px"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Resolutions
        </h5>
        <p>
          Dominican houses are important feature of the Order. The question is
          how many houses were present in the world.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/worlks')"
    >
      <div class="col imageshown">
        <q-img
          src="images/chronicon-icon.png"
          alt="works"
          height="400px"
          fit="contain"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Works
        </h5>
        <p>
          Dominican houses are important feature of the Order. The question is
          how many houses were present in the world.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
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
