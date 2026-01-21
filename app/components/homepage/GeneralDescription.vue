<template>
  <section>
    <h2 class="text-center">Explore our page</h2>

    <div class="grid oferta" @click="goToSite('/sections')">
      <div class="col-12 md:col-6 imageshown cursor-pointer">
        <img
          src="@/assets/svg/pattern_03.svg"
          alt="houses"
          style="border-radius: 10% 30% 50% 70%"
        />
      </div>
      <div class="col-12 md:col-6 descriptionshown">
        <h3>Databases and maps</h3>
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

    <div class="grid oferta cursor-pointer" @click="goToSite('/bibliography')">
      <div class="col-12 md:col-6 imageshown">
        <img
          src="@/assets/svg/pattern_04.svg"
          alt="houses"
          style="border-radius: 10% 30% 50% 70%"
        />
      </div>
      <div class="col-12 md:col-6 descriptionshown">
        <h3>Bibliography</h3>
        <p>
          Search the probably most complete bibliography of the Dominican Order
          in the early modern period.
        </p>
      </div>
    </div>

    <div class="grid oferta cursor-pointer" @click="goToSite('/getdata')">
      <div class="col-12 md:col-6 imageshown">
        <img
          src="@/assets/svg/pattern_05.svg"
          alt="houses"
          style="border-radius: 10% 30% 50% 70%"
        />
      </div>
      <div class="col-12 md:col-6 descriptionshown cursor-pointer">
        <h3>Get Data & Code</h3>
        <p>
          This webpage offers not only analysis which can be viewed and
          visualized by the researchers, but follows also the principles of open
          and reproducible science. Therefore researchers will have the
          possibility to donwload both the raw data and the code used in this
          webpage.
        </p>
      </div>
    </div>

    <!--Links-->
    <!--     TODO: añadir links! -->
  </section>
</template>

<script setup>
const goToSite = (site) => {
  return navigateTo({ path: site });
};
</script>

<style lang="scss" scoped>
img {
  height: 300px;
}

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
