<template>
  <footer>
    <!-- <div class="row justify-evenly q-pb-md"> -->
    <div class="grid">
      <div class="footer-col">
        <p>
          This site is part of my site <br /><a
            target="_blank"
            class="text-primary"
            href="https://www.georeligion.org"
            >https://www.georeligion.org</a
          >
        </p>
      </div>
      <div class="footer-col">
        <img
          class="cursor-pointer"
          src="@/assets/svg/logo-emdo.svg"
          width="200px"
        />

        <p>
          <em>Created by</em>
          <router-link to="/contact"> Igor Sosa Mayor</router-link>
        </p>
      </div>
      <div class="footer-col">
        <SocialLinks />
      </div>
    </div>
    <div class="row justify-evenly">
      <div class="footer-col">
        <p>Copyright 2019-{{ new Date().getFullYear() }}</p>
      </div>
      <div class="footer-col">
        <a
          href="https://www.github.com/rogorido/apidominicans/"
          target="_blank"
          rel="noopener noreferrer"
          >API version</a
        >: {{ apiversion }}
      </div>
      <div class="footer-col">
        <p>
          This site was created with
          <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/"
            >VueJs</a
          >
          y
          <a target="_blank" rel="noopener noreferrer" href="https://quasar.dev"
            >Quasar</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig();
const uiversion = config.public.uiVersion;
</script>

<style lang="scss" scoped>
footer {
  background-color: #e8e8e8;
  color: black;
  font-size: 0.8em;
  padding-top: 2em;
}

a {
  text-decoration: none;
  color: inherit;
}

/* esto no me convence nada  */
.footer-col {
  flex: 0 0 300px;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  .footer-col {
    flex: 1 0 auto;
  }
}
</style>
