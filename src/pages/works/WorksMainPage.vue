<template>
  <h3 class="text-center">Works Database</h3>
  <p>
    La producción de los miembros la Orden de Predicadores producirán durante la
    Edad Moderna una cantidad ingente de obras tanto publicadas como en
    manuscrito. Las presente base de datos constituye la mayor recopilación de
    datos sobre esa producción.
  </p>
  <Suspense>
    <template #default>
      <MainStats />
    </template>
    <template #fallback><div>Loading...</div></template>
  </Suspense>
</template>

<script setup>
import MainStats from 'components/works/MainStats.vue';
</script>
