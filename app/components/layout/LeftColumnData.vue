<template>
  <div>
    <div class="p-6">
      <LayoutLeftColumnBlock />
    </div>
    <div class="p-6">
      <Card
        class="cursor-pointer mb-2"
        @click="goToSite(item.link)"
        v-for="item in sidebarLinks"
      >
        <template #title>{{ item.title }}</template>
        <template #content>
          <p class="m-0 leches">{{ item.caption }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ typeOfColumn: { type: String, required: true } });
import { allLinks } from '@/assets/links';

// we create the links for the sidebar or return []
const sidebarLinks = computed(() => {
  return allLinks[props.typeOfColumn] ?? [];
});

const goToSite = (site) => {
  return navigateTo({ path: site });
};
</script>

<style scoped>
.p-card-content {
  font-size: 0.7rem;
}

.leches {
  font-size: 0.7rem;
}
</style>
