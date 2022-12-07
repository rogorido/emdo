<template>
  <section>
    <h4 class="text-center">Explore our page</h4>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-lg"
      @click="goToSite('/sections')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_03.svg"
          alt="houses"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Databases and maps
        </h5>
        <p>
          La presente página web presenta a los investigadores variados
          mecanismos de análisis de la Orden de Predicadores en la Edad Moderna.
          La expansión global de la Orden, el número de obispados que
          controlaron, las obras que publicaron (dónde, ediciones, formatos,
          etc.), los capítulos generales y sus resoluciones, etc.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/links')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_04.svg"
          alt="bishops"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Links
        </h5>
        <p></p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/getdata')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_05.svg"
          alt="chapters"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Get Data & Code
        </h5>
        <p>
          Además de los datos elaborados que los investigadores, esta página
          sigue los principios de la open science por lo que se pone a
          disposición de todos los investgggadores tanto los datos brutos como
          el código usado en esta página.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/chapters')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_06.svg"
          alt="chapters"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Bibliography
        </h5>
        <p>
          Haga búsquedas en una de las bibliografías más completas sobre la
          Orden de Predicadores en la Edad Moderna.
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
.q-img {
  height: 400px;
}

/* .q-img:hover {
     transform: scale(1.05);
     } */

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
      padding-top: 20px;
    }
  }

  .q-img {
    height: 300px;
  }
}
</style>
