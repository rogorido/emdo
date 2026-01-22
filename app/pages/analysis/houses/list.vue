<template>
  <h4>Casas masculinas de la Orden dominica</h4>
  <p>
    The Order of Preachers in the Early Modern period possessed an extensive
    network of convents, doctrinal establishments, and various other
    institutions (hospitals, etc.). Here we present a list comprising the names
    of the male convents accompanied by a series of supplementary data. In
    general, consult the page that provides information about
    <router-link class="textlinks" to="/houses/info"
      >the origin of these data</router-link
    >.
  </p>
  <p>More concretely the table offers information about:</p>
  <ul>
    <li>
      the name of the Dominican house (check nevertheless the specific
      <router-link class="textlinks" to="/houses/problems"
        >problems</router-link
      >
      of this kind of information)
    </li>
    <li>the geographical place</li>
    <li>
      the present country in which the place is located (check nevertheless the
      specific
      <router-link class="textlinks" to="/houses/problems"
        >problems</router-link
      >
      of this kind of information)
    </li>
    <li>
      the province to which the Dominican House was attached (see also
      <router-link class="textlinks" to="/houses/provincesstats"
        >statistics about provinces</router-link
      >)
    </li>
    <li>
      the population (in 1000 inhabitants) around 1500 for the cases we can
      provide this information
    </li>
    <li>
      the presence of an university in that place in around 1450 (in the cases
      we can provide this information)
    </li>
  </ul>

  <HousesTable />
</template>

<script>
definePageMeta({
  layout: 'houses-layout'
});
</script>
