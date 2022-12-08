<template>
  <q-page>
    <h4>Places</h4>
    <Suspense>
      <template #default>
        <PlacesList />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import PlacesList from '../../components/works/PlacesList.vue';
</script>
