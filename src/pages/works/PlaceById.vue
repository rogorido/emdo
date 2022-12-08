<template>
  <q-page>
    <h1>Place: {{ $route.params.id }}</h1>
    <Suspense>
      <template #default>
        <PlaceDetails :place_id="$route.params.id" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import PlaceDetails from '../../components/works/PlaceDetails.vue';
</script>
