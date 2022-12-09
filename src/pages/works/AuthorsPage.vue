<template>
  <h4 class="text-center">Authors</h4>
  <Suspense>
    <template #default>
      <AuthorsComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import { defineComponent } from 'vue';
import AuthorsComponent from 'components/works/AuthorsComponent.vue';

export default defineComponent({
  name: 'AuthorsPage',
  components: { AuthorsComponent }
});
</script>
