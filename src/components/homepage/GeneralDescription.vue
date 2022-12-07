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
          Using the most modern representation techniques (maps, graphics, etc.)
          this webpage offers researchers varied mechanisms to analyze the
          Dominican Order in the early modern period: the global expansion of
          the Order, the number of bishoprics controlled by the Dominican, the
          works they wrote and published (where, editions, formats, etc.), the
          resolutions of their general chapters, etc.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/bibliography')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_06.svg"
          alt="bibliography"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Bibliography
        </h5>
        <p>
          Search the probably most complete bibliography of the Dominican Order
          in the early modern period.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/getdata')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/svg/pattern_05.svg"
          alt="dataandcode"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Get Data & Code
        </h5>
        <p>
          This webpage offers not only analysis which can be viewed and
          visualized by the researchers, but follows also the principles of open
          and reproducible science. Therefore researchers will have the
          possibility to donwload both the raw data and the code used in this
          webpage.
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
          alt="linkstotheDominicanOrder"
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
