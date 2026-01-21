<template>
  <div>
    <OwnMenuBar />
    <SmallHero />
    <div class="grid">
      <div class="col-3 leftcolumn">
        <LayoutLeftColumnData typeOfColumn="works" />
      </div>
      <div class="col-6 central">
        <slot />
      </div>
      <div class="col-3 rightcolumn"></div>
    </div>

    <!-- <DividerWave /> -->
    <FooterGeneral />
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 1200px) {
  .central {
    padding: 0 20px;
  }

  .leftcolumn {
    display: none;
  }

  .rightcolumn {
    display: none;
  }
}
</style>
