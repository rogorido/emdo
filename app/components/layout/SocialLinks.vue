<template>
  <div class="social">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/rogorido"
      aria-label="See my code on github"
    >
      <img src="~assets/svg/github.svg" width="32px" height="32px" />
    </a>

    <a href="mailto:igor.sosa@eui.eu" aria-label="Contact me per email">
      <img src="~assets/svg/envelope-solid.svg" width="32px" height="32px" />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://fedihum.org/@rogorido"
      aria-label="Follow me on mastodon"
    >
      <img src="~assets/svg/mastodon.svg" width="32px" height="32px" />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://orcid.org/0000-0003-3645-8454"
      aria-label="ORCID ID"
    >
      <img src="~assets/svg/ORCID_iD.svg" width="32px" height="32px" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: space-evenly;
}

.img:hover {
  transform: scale(1.1);
}
</style>
