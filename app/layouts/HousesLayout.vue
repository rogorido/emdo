<template>
  <div>
    <OwnMenuBar />
    <BigHero />
    <div class="grid">
      <div class="col-3">
        <LayoutLeftColumnDatabase />
      </div>
      <div class="col-6 central">
        <slot />
      </div>
      <div class="col-3"></div>
    </div>

    <!-- <DividerWave /> -->
    <FooterGeneral />
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .central {
    padding: 0 20px;
  }
}
</style>
