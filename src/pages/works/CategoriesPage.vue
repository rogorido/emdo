<template>
  <q-page>
    <h2>Categorías</h2>
    <Suspense>
      <template #default>
        <CategoriesComponent />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import CategoriesComponent from '../../components/works/CategoriesComponent.vue';
</script>
