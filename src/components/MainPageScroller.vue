<template>
  <!-- place QPageScroller at end of page -->
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 18]"
  >
    <q-btn color="primary" aria-label="Button to scroll up">
      <q-img
        src="~assets/svg/chevron-up-solid.svg"
        width="24px"
        height="24px"
      ></q-img>
    </q-btn>
  </q-page-scroller>
</template>
