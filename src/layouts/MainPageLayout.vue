<template>
  <q-layout view="lHh Lpr lff">
    <MainHeader />

    <q-page-container>
      <q-page>
        <BigHero />
        <div class="row">
          <div :class="`col-md-3 ${$q.screen.lt.md ? 'hidden' : ''}`">
            <LeftColumn />
          </div>
          <div class="col-md-6 central">
            <router-view />
          </div>
          <div class="col-md-3"></div>
        </div>
        <MainPageScroller />
      </q-page>
    </q-page-container>
    <SmallFooter class="lt-md" />
    <MainFooter class="gt-sm" />
  </q-layout>
</template>

<script setup>
import LeftColumn from 'components/LeftColumn.vue';
import MainHeader from 'components/layout/MainHeader.vue';
import MainFooter from 'components/layout/MainFooter.vue';
import SmallFooter from 'components/layout/SmallFooter.vue';
import MainPageScroller from 'components/MainPageScroller.vue';
import BigHero from 'components/layout/BigHero.vue';
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .central {
    padding: 0 20px;
  }
}
</style>
