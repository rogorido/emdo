<template>
  <div>
    <OwnMenuBar />
    <SmallHero />
    <div class="grid">
      <div class="col-3">
        <LayoutLeftColumn />
      </div>
      <div class="col-6 central">
        <div class="flex flex-column align-items-center justify-content-center">
          <div style="font-size: 20vh">404</div>

          <div class="mb-4" style="opacity: 0.6">Oops. Nothing here...</div>

          <Button
            color="white"
            text-color="my-primary"
            raised
            class="p-3"
            size="large"
          >
            <RouterLink to="/">Go home</RouterLink>
          </Button>
        </div>
      </div>
      <div class="col-3"></div>
    </div>

    <!-- <DividerWave /> -->
    <FooterGeneral />
  </div>
</template>
