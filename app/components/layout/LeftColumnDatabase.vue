<template>
  <div>
    <div class="p-6">
      <LayoutLeftColumnBlock />
    </div>
    <div class="p-6">
      <Card
        class="cursor-pointer mb-2"
        @click="goToSite(item.link)"
        v-for="item in houseslinks"
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
import { houseslinks } from '@/assets/links';

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
