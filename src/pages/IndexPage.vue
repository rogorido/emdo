<template>
  <div class="text-h4 q-pa-xl">
    <em class="suave"
      >The most comprehensive webpage devoted to the
      <span class="text-primary">Dominican Order</span> in the early modern
      period.</em
    >
  </div>
  <div class="intro">
    <p>
      The Dominican Order experienced during the early modern period a time of
      splendor. The number of its houses and its members troops grew
      significantly, its missionaries evangelized in the four parts of the world
      and its intellectuals dealt with the most varied topics. The present
      webpage presents researchers with varied information about the Dominican
      Order resulting from the research carried out by
      <router-link class="textlinks" to="/contact">Igor Sosa Mayor</router-link>
      . Both the data and the code used for analysis are
      <router-link to="/getdata" class="textlinks">available</router-link>
      for other researchers.
    </p>
  </div>

  <GeneralDescription />
</template>

<script setup>
import GeneralDescription from 'components/homepage/GeneralDescription.vue';
</script>

<style lang="scss" scoped>
.intro p {
  font-size: 1.5rem;
}

.suave {
  opacity: 0.75;
}
</style>
