<template>
  <h3 class="text-center">Houses</h3>
  <h5>Casas masculinas de la Orden dominica</h5>
  <p>
    La Orden de Predicadores tiene una compleja estructura espacial, en la que
    se combinan al menos tres niveles. En primer lugar el de las casas de la
    Orden, los monasterios. Estos se agrupan, en segundo lugar, en estructuras
    más amplias llamadas generalmente provincias o, en algunos casos,
    congregaciones. Y todas ellas unidas constituyen la Orden de Predicadores en
    su conjunto.
  </p>

  <p>
    Las presentes páginas muestran una work-in-progress de la distribución
    geográfica de las casas dominicas (masculinas) en sus dimensiones globales.
  </p>
  <p>
    En las siguientes páginas encontrará el interesado informaciones variadas:
  </p>
  <ul>
    <li>
      una
      <router-link to="/houses/houses" class="textlinks"
        >lista relativamente completa</router-link
      >
      de las casas de la Orden desde una perspectiva global
    </li>
    <li>
      Una estadística general sobre las de casas de las diferentes
      <router-link to="/houses/provinces" class="textlinks"
        >provincias</router-link
      >
      de la Orden
    </li>
    <li>
      Una
      <router-link to="/houses/map" class="textlinks"
        >visualización cartográfica</router-link
      >
      con posibilidades de filtro sobre esa distrubución global.
    </li>
  </ul>

  <p>
    Además, se puede encontrar informaciones tanto sobre las
    <router-link to="/houses/info" class="textlinks"
      >fuentes más diversas</router-link
    >
    usadas para extraer las informaciones presentadas. Al mismo tiempo, y de
    forma inevitable, esas informaciones están plagadas de
    <router-link to="/houses/problems" class="textlinks"
      >problemas y dificultades</router-link
    >.
  </p>
</template>

<style lang="scss" scoped>
.text-caption {
  font-size: 1rem;
}

.description {
  opacity: 0.6;
}

.separador {
  margin: 30px 0;
  background-image: url('../assets/svg/pattern_05.svg');
  height: 150px;
  width: 100%;
}
</style>
