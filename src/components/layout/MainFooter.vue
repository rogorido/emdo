<template>
  <q-footer elevated>
    <div class="row justify-around q-pb-md">
      <div class="footer-col">
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
        <SocialLinks />
      </div>
    </div>
    <div class="row justify-around">
      <div class="footer-col">
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

<script setup>
import SocialLinks from 'components/SocialLinks.vue';
</script>

<style lang="scss" scoped>
.q-footer {
  background-color: $grey-3;
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
