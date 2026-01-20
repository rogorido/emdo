<template>
  <div class="flex flex-center">
    <img
      class="cursor-pointer"
      @click="goToHome"
      src="~assets/svg/logo-emdo.svg"
      width="300px"
    />
  </div>
  <p class="ownname">Igor Sosa Mayor</p>
  <LayoutSocialLinks />
</template>

<script setup>
const goToHome = () => {
  return navigateTo({ path: '/' });
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
