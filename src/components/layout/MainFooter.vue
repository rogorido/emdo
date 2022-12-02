<template>
  <q-footer elevated>
    <div class="row justify-evenly">
      <div class="col">
        <q-img
          class="q-hoverable cursor-pointer"
          src="~assets/svg/logo-emdo.svg"
          width="200px"
        ></q-img>
        <p>
          <em>Created by</em>
          <router-link to="/contact"> Igor Sosa Mayor</router-link>
        </p>
      </div>
      <div class="col">
        <p class="q-mt-md">
          This site is part of my site <br /><a
            target="_blank"
            class="text-primary"
            href="https://www.georeligion.org"
            >https://www.georeligion.org</a
          >
        </p>
      </div>
      <div class="q-mt-md">
        <!-- <div class="text-h6 text-center">Contact</div> -->
        <div class="col social">
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

          <a href="mailto:igor.sosa@georeligion.org"
            ><i class="fa-regular fa-envelope"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fedihum.org/@rogorido"
            ><i class="fa-brands fa-mastodon"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col">
        <p>
          This site was created with
          <a target="_blank" rel="noopener noreferrer" href="https://quasar.dev"
            >Quasar</a
          >.
        </p>
      </div>
    </div>
  </q-footer>
</template>

<style lang="scss" scoped>
.q-footer {
  background-color: $grey-3;
  color: black;
  font-size: 0.8em;
}

.col {
  flex: 0 1 auto;
}

ul {
  list-style: none;
  margin-top: 0px;
}

a {
  text-decoration: none;
  color: inherit;
}
.social {
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: $primary;

  a {
    margin-left: 20px;
  }
}

@media (max-width: 800px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
}
</style>
