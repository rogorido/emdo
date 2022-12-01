<template>
  <q-drawer v-model="leftDrawerOpen" bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainDrawer',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
