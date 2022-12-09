<template>
  <h2>Categories</h2>
  <Suspense>
    <template #default>
      <CategoriesComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import CategoriesComponent from '../../components/works/CategoriesComponent.vue';
</script>
