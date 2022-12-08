<template>
  <section>
    <h4 class="text-center">Our main sections</h4>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-lg"
      @click="goToSite('/houses')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/images/cagayan.webp"
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
          src="~assets/images/bishops.webp"
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
          Durante la Edad Moderna los miembros de la Orden de Predicadores
          estuvieron presentes a lo largo de todo el globo en calidad de
          obispos. Su papel en la construcción de una Iglesia ordinaria
          postridentina y sobre todo en espacios como el americano fue central.
          Explore por medio de nuestra interfaz su distribución en las
          diferentes diócesis.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/chapters')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/images/acta4-r.avif"
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
          La Orden de Predicadores cuenta con una compleja organización
          territorial en la que cada unidad (convento, provincia, orden entera)
          tiene mecanismos de gobierno muy refinados. Uno de ellos son los
          capítulos. En esta página se pueden explorar las frecuencias, lugares
          y participación de las provincias en los capítulos generales de la
          Orden.
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
          ¿Qué decidían los dominicos en sus capítulos generales? ¿Qué temas
          eran los más frecuentados? ¿Hubo diferencias temporales a lo largo de
          la Edad Moderna? Por medio de nuestra base de datos es posible
          analizar todos estos aspectos desde diversas perspectivas para los
          capítulos generales de la Edad Moderna.
        </p>
      </div>
    </div>

    <div
      class="row q-mb-xl oferta q-hoverable cursor-pointer q-col-gutter-x-lg"
      @click="goToSite('/works')"
    >
      <div class="col imageshown">
        <q-img
          src="~assets/images/tratado-colores.avif"
          alt="works"
          height="400px"
          style="border-radius: 10% 30% 50% 70%"
        ></q-img>
      </div>
      <div class="col descriptionshown">
        <h5 class="q-mt-none q-mb-sm text-center text-uppercase text-primary">
          Works
        </h5>
        <p>
          La producción intelectual de los dominicos fue en la Edad Moderna
          ingente y muy variada. Escribieron sobre los temas más variados, en
          los formatos más variados y para los públicos más diferentes. Por
          medio de una interfaz rica en filtros y visualizaciones podemos
          analizar cuestiones diversas sobre la producción escrita de los
          dominicos.
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
