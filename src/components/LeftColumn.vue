<template>
  <p class="ownname">Igor Sosa Mayor</p>
  <div class="social">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/rogorido"
    >
      <i class="fa-brands fa-twitter" />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/rogorido"
    >
      <i class="fa-brands fa-github" />
    </a>

    <a href="mailto:Igor.Sosa@eui.eu"
      ><i class="fa-regular fa-envelope"></i>
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://fedihum.org/@rogorido"
      ><i class="fa-brands fa-mastodon"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.ownname {
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.12rem;
  text-transform: uppercase;
  letter-spacing: 0.0633em;
  text-align: center;
}

.social {
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
}

a {
  color: $primary;
}
</style>
