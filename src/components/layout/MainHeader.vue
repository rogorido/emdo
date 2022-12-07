<template>
  <q-header>
    <q-toolbar class="text-primary bg-grey-1 justify-center">
      <q-list class="gt-sm"
        ><q-btn
          flat
          v-for="link in linksList"
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
      >
        <q-img
          src="~assets/svg/bars-solid.svg"
          width="36px"
          height="36px"
        ></q-img>
      </q-btn>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" bordered>
    <q-list>
      <q-item-label header>
        <q-img src="~assets/svg/logo-emdo.svg" width="150px"></q-img>
      </q-item-label>

      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { linksList } from '../../assets/links';
import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: 'MainHeader',
  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const router = useRouter();
    const goToHome = () => {
      router.push('/');
    };
    return {
      linksList,
      leftDrawerOpen,
      goToHome,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.menuitem {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0933em;
}
</style>
