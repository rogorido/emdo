<template>
  <Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
  <!-- <Toast /> -->
  <!-- <ConfirmDialog></ConfirmDialog> -->
</template>

<script setup>
/* import { useAuthStore } from "@/stores/auth";
 * import { useConfirm } from "primevue/useconfirm";
 *
 * const authStore = useAuthStore();
 *
 * const confirm = useConfirm();
 * const toast = useToast(); */

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },

  {
    label: 'Our Sections',
    icon: 'pi pi-map',
    route: '/sections'
  },
  {
    label: 'Links',
    icon: 'pi pi-map',
    route: '/links'
  },
  {
    label: 'About',
    icon: 'pi pi-users',
    route: '/about'
  },
  {
    label: 'Contact',
    icon: 'pi pi-users',
    route: '/contact'
  }
]);
</script>

<style scoped>
.p-menubar {
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: center;
}

.p-menubar-item-link {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.0933em;
  text-transform: uppercase;
}
</style>
