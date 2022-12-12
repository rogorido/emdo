<template>
  <q-layout view="lHh Lpr lff">
    <MainHeader />

    <q-page-container>
      <q-page class="q-mb-lg">
        <SmallHero />
        <div class="row">
          <div :class="`col-md-3 ${$q.screen.lt.md ? 'hidden' : ''}`">
            <LeftColumnDatabaseHouses />
          </div>
          <div class="col-md-6 central">
            <router-view />
          </div>
          <div class="col-md-3"></div>
        </div>
        <MainPageScroller />
      </q-page>
    </q-page-container>
    <MainFooter />
  </q-layout>
</template>

<script setup>
import LeftColumnDatabaseHouses from 'components/LeftColumnDatabaseHouses.vue';
import MainHeader from 'components/layout/MainHeader.vue';
import MainFooter from 'components/layout/MainFooter.vue';
import MainPageScroller from 'components/MainPageScroller.vue';
import SmallHero from 'components/layout/SmallHero.vue';
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .central {
    padding: 0 20px;
  }
}
</style>
