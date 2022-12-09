<template>
  <h4>Category: {{ $route.params.category }}</h4>
  <Suspense>
    <template #default>
      <CategoryDetails :category_id="store.category" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import CategoryDetails from '../../components/works/CategoryDetails.vue';
import { useCategoryStore } from '../../stores/categoryStore';

const store = useCategoryStore();
</script>
