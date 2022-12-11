<template>
  <Suspense>
    <template #default>
      <PlaceDetails :place_id="store.place" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import PlaceDetails from '../../components/works/PlaceDetails.vue';
import { usePlaceStore } from '../../stores/placesStore';

const store = usePlaceStore();
</script>
