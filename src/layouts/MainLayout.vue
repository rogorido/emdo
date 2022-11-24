<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>Preacher's Order </q-toolbar-title>
        <q-list class="gt-sm"
          ><q-btn
            flat
            v-for="link in essentialLinks"
            :key="link.title"
            :label="link.title"
            :to="link.link"
            class="menuitem"
          ></q-btn
        ></q-list>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />
      </q-toolbar>
    </q-header>

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

    <q-page-container>
      <div class="row">
        <div :class="`col-md-2 ${$q.screen.lt.md ? 'hidden' : ''}`">
          <p class="cojones">Igor Sosa Mayor</p>
        </div>
        <div class="col-md-8">
          <router-view />
        </div>
        <div class="col-md-2"><h1>right</h1></div>
      </div>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Made with Quasar</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { linksList } from '../assets/links';

export default defineComponent({
  name: 'MainLayout',

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

<style lang="scss" scoped>
.menuitem {
  font-size: 100%;
  font-weight: 700;
  letter-spacing: 0.0933em;
}
</style>
