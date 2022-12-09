<template>
  <Suspense>
    <template #default>
      <AuthorDetails :author_id="store.author" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import AuthorDetails from '../../components/works/AuthorDetails.vue';
import { useAuthorStore } from '../../stores/authorStore';

const store = useAuthorStore();
</script>
