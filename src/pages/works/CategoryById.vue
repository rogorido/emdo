<template>
  <q-page>
    <Suspense>
      <template #default>
        <CategoryDetails :category_id="$route.params.id" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import CategoryDetails from '../../components/works/CategoryDetails.vue';
</script>
