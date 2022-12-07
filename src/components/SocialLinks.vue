<template>
  <div class="social">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/rogorido"
    >
      <q-img src="~assets/svg/twitter.svg" width="32px" height="32px"></q-img>
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/rogorido"
    >
      <q-img src="~assets/svg/github.svg" width="32px" height="32px"></q-img>
    </a>

    <a href="mailto:igor.sosa@georeligion.org">
      <q-img
        src="~assets/svg/envelope-solid.svg"
        width="32px"
        height="32px"
      ></q-img>
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://fedihum.org/@rogorido"
    >
      <q-img src="~assets/svg/mastodon.svg" width="32px" height="32px"></q-img>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: space-evenly;
}

.q-img:hover {
  transform: scale(1.1);
}
</style>
