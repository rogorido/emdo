<template>
  <div class="q-pa-xl">
    <div class="flex flex-center">
      <q-img
        class="q-hoverable cursor-pointer"
        @click="goToHome"
        src="~assets/svg/logo-emdo.svg"
        width="300px"
      ></q-img>
    </div>
    <p class="ownname">Igor Sosa Mayor</p>
    <SocialLinks />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import SocialLinks from 'components/SocialLinks.vue';

const router = useRouter();

const goToHome = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
.ownname {
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.12rem;
  text-transform: uppercase;
  letter-spacing: 0.0633em;
  text-align: center;
}
</style>
