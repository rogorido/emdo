<template>
  <q-page>
    <!-- <h1>Autor: {{ $route.params.id }}</h1> -->
    <Suspense>
      <template #default>
        <AuthorDetails :author_id="store.author" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import AuthorDetails from '../../components/works/AuthorDetails.vue';
import { useAuthorStore } from '../../stores/authorStore';

const store = useAuthorStore();
</script>
