<template>
  <div>
    <section>
      <h2 class="text-center">Main sections</h2>

      <div
        class="grid oferta cursor-pointer"
        @click="goToSite('/analysis/houses/')"
      >
        <div class="col imageshown">
          <img
            src="@/assets/images/cagayan.webp"
            alt="houses"
            height="400px"
            style="border-radius: 10% 30% 50% 70%"
          />
        </div>
        <div class="col descriptionshown">
          <h3 class="mt-0 mb-3 text-center text-uppercase my-primary">
            Houses
          </h3>
          <p>
            The Order of Preachers had c.1750 about 1,200 houses spread across
            the globe. Its global presence will be one of its most notable
            characteristics. However, its distribution was very uneven. Our
            cartography is an attempt to represent the global presence of the
            Dominican Friars.
          </p>
        </div>
      </div>

      <div
        class="grid oferta cursor-pointer mt-3 md:mt-5"
        @click="goToSite('/analysis/chapters/')"
      >
        <div class="col imageshown">
          <img
            src="@/assets/images/acta4-r.avif"
            alt="chapters"
            height="400px"
            style="border-radius: 10% 30% 50% 70%"
          />
        </div>
        <div class="col descriptionshown">
          <h3 class="mt-0 mb-3 text-center text-uppercase my-primary">
            Chapters
          </h3>
          <p>
            The Order of Preachers has a complex territorial organization in
            which each unit (convent, province, entire order) has very refined
            governing mechanisms. One of these mechanisms are the socalled
            chapters, the meetings at the different levels. On this page you can
            explore the Order's general chapters: their frequencies, their
            locations, and the participation of different Dominican provinces at
            the meetings, etc.
          </p>
        </div>
      </div>

      <div
        class="grid oferta cursor-pointer mt-3 md:mt-5"
        @click="goToSite('/analysis/chaptersresolutions')"
      >
        <div class="col imageshown">
          <img
            src="@/assets/images/acta4-r.avif"
            alt="resolutions"
            height="400px"
            style="border-radius: 10% 30% 50% 70%"
          />
        </div>
        <div class="col descriptionshown">
          <h3 class="mt-0 mb-3 text-center text-uppercase my-primary">
            Resolutions
          </h3>
          <p>
            What decisions did the Dominicans reach in their general chapters?
            Which subjects were most frequently addressed? Were there temporal
            variations throughout the Early Modern period? By means of our
            database, it is possible to analyze all of these aspects from
            multiple perspectives concerning the general chapters of the Early
            Modern period.
          </p>
        </div>
      </div>

      <div
        class="grid oferta cursor-pointer mt-3 md:mt-5"
        @click="goToSite('/analysis/works/')"
      >
        <div class="col imageshown">
          <img
            src="~assets/images/tratado-colores.avif"
            alt="works"
            height="400px"
            style="border-radius: 10% 30% 50% 70%"
          />
        </div>
        <div class="col descriptionshown">
          <h3 class="mt-0 mb-3 text-center text-uppercase my-primary">Works</h3>
          <p>
            The intellectual production of the Dominicans in the Early modern
            period was immense and highly diverse. They wrote on a wide array of
            subjects, employing various formats and addressing different
            audiences. Through a richly filtered interface with visualizations,
            we can analyze diverse issues concerning the Dominican written
            output.
          </p>
        </div>
      </div>

      <div
        class="grid oferta cursor-pointer mt-3 md:mt-5"
        @click="goToSite('/analysis/bishops/')"
      >
        <div class="col imageshown">
          <img
            src="@/assets/images/bishops.webp"
            alt="bishops"
            height="400px"
            style="border-radius: 10% 30% 50% 70%"
          />
        </div>
        <div class="col descriptionshown">
          <h3 class="mt-0 mb-3 text-center text-uppercase my-primary">
            Bishops
          </h3>
          <p>
            During the Modern Age, members of the Order of Preachers were
            present throughout the globe as bishops. Their role in the
            construction of a post-Tridentine ordinary Church, especially in
            places like the Americas, was central. Explore their distribution
            across the different dioceses through our interface.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const goToSite = (site) => {
  return navigateTo({ path: site });
};
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
  .oferta:nth-of-type(2n) {
    .imageshown {
      order: 2;
    }
    .descriptionshown {
      order: 1;
    }

    img {
      height: 400px;
    }
  }
}

@media (max-width: 800px) {
  .oferta {
    flex-direction: column;
    .imageshown {
      order: 1;
    }
    .descriptionshown {
      order: 2;
    }

    img {
      height: 200px;
    }
  }
}
</style>
