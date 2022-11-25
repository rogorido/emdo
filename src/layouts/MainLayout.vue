<template>
  <q-layout view="lHh Lpr lff">
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
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md"
          ><i class="fa-solid fa-bars"></i
        ></q-btn>
      </q-toolbar>
      <div class="hero">
        <h2>Early Modern Dominican Order</h2>
      </div>
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
          <LeftColumn />
        </div>
        <div class="col-md-8">
          <router-view />
        </div>
        <div class="col-md-2"><h1>right</h1></div>
      </div>
    </q-page-container>

    <q-footer class="q-mt-md">
      <q-toolbar>
        <!-- <q-toolbar-title>Made with Quasar</q-toolbar-title> -->
        Made with Quasar
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { linksList } from '../assets/links';
import LeftColumn from 'components/LeftColumn.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    LeftColumn
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

.hero {
  /*   background-image: url('../assets/wave2.svg'); */
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(2) rotate(55)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M0 40.438c3.235 0 6.096 1.79 6.992 4.48 1.035 3.104.483 6.002-1.586 8.209C3.476 55.194 2.53 57.605 2.527 60M0 19.562c3.22 0 5.766-1.241 7.008-4.828 1.034-3.103.417-5.793-1.653-8C3.337 4.716 2.495 2.313 2.527 0m54.946 0c-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48m-30-9.125c-3.235 0-6.096 1.791-6.992 4.481-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48 3.22 0 5.766-1.241 7.008-4.828 1.034-3.103.417-5.793-1.653-8-2.018-2.018-2.86-4.421-2.828-6.734-.033-2.313.81-4.716 2.828-6.734 1.294-1.38 2.019-2.948 2.13-4.688.066-1.044-.09-2.15-.477-3.314-1.242-3.587-3.787-4.827-7.008-4.827zm30 30c-3.235 0-6.096 1.791-6.992 4.481-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873'  stroke-width='0.5' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/><path d='M59.985 32.527c-2.313-.033-4.716.81-6.735 2.828-1.379 1.294-2.947 2.019-4.687 2.13-1.044.066-2.15-.09-3.314-.477-3.587-1.242-4.827-3.787-4.827-7.008 0-3.235 1.791-6.096 4.48-6.992 1.165-.388 2.3-.553 3.38-.498 1.8.09 3.45.79 4.83 2.084 2.067 1.93 4.478 2.877 6.873 2.879M10.438 0c0 3.22 1.241 5.766 4.828 7.008 3.103 1.034 5.793.417 8-1.653 2.018-2.018 4.421-2.86 6.734-2.828 2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477C48.323 5.766 49.563 3.22 49.563 0M0 32.527c2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477 3.587-1.242 4.827-3.787 4.827-7.008 0-3.235-1.791-6.096-4.481-6.992-1.164-.388-2.298-.553-3.379-.498-1.8.09-3.45.79-4.83 2.084C4.806 26.524 2.395 27.47 0 27.473M49.563 60c0-3.235-1.791-6.096-4.481-6.992-3.104-1.035-6.002-.483-8.209 1.586-2.067 1.93-4.478 2.877-6.873 2.879-2.395-.001-4.806-.95-6.873-2.88-1.38-1.292-3.027-1.992-4.828-2.083a8.191 8.191 0 00-.82 0h0a9.62 9.62 0 00-2.561.498c-2.69.896-4.48 3.757-4.48 6.992'  stroke-width='0.5' stroke='hsla(339.6,82.2%,51.6%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-82)' fill='url(%23a)'/></svg>");
  /* color: $primary; */
  h2 {
    padding-top: 100px;
    padding-bottom: 100px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.0333em;
    margin-top: 0px;
    margin-bottom: 0px;
    color: black;
  }
}

q-page-container {
  padding-top: 0px;
}
</style>
