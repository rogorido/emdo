<template>
  <q-layout view="lHh Lpr lff">
    <MainHeader />

    <q-page-container>
      <q-page>
        <SmallHero />
        <div class="row">
          <div :class="`col-md-3 ${$q.screen.lt.md ? 'hidden' : ''}`">
            <LeftColumn />
          </div>
          <div class="col-md-6">
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

<script>
import { defineComponent } from 'vue';

import LeftColumn from 'components/LeftColumn.vue';
import MainHeader from 'components/MainHeader.vue';
import MainFooter from 'components/MainFooter.vue';
import MainPageScroller from 'components/MainPageScroller.vue';
import SmallHero from 'components/SmallHero.vue';

export default defineComponent({
  name: 'MainPageLayout',

  components: {
    LeftColumn,
    MainHeader,
    MainFooter,
    MainPageScroller,
    SmallHero
  }
});
</script>
