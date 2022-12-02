<template>
  <q-footer elevated>
    <div class="row justify-evenly">
      <div class="col">
        <q-img
          class="q-hoverable cursor-pointer"
          @click="goToHome"
          src="~assets/svg/logo-emdo.svg"
          width="200px"
        ></q-img>
        <p>
          <em>Created by</em>
          <router-link to="/contact"> Igor Sosa Mayor</router-link>
        </p>
      </div>
      <div class="col">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sections">Our Sections</router-link></li>
          <li><router-link to="/links">Links</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="col">
        <p>
          This site was created <br />
          with <a href="https://quasar.dev">Quasar</a>
        </p>
      </div>
    </div>
  </q-footer>
</template>

<style lang="scss" scoped>
.q-footer {
  background-color: $grey-3;
  color: black;
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
</style>
