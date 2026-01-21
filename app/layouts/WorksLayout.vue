<template>
  <div>
    <OwnMenuBar />
    <SmallHero />
    <div class="grid">
      <div class="col-3">
        <LayoutLeftColumnData typeOfColumn="works" />
      </div>
      <div class="col central">
        <slot />
      </div>
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
