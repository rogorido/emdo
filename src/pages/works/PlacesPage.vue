<template>
  <h4>Places</h4>
  <Suspense>
    <template #default>
      <PlacesList />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import PlacesList from '../../components/works/PlacesList.vue';
</script>
