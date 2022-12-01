<template>
  <div class="q-pa-xl">
    <div class="flex flex-center">
      <q-img
        class="q-hoverable cursor-pointer"
        @click="goToHome"
        src="~assets/svg/logo-emdo.svg"
        width="300px"
      ></q-img>
    </div>
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
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LeftColumn',
  setup() {
    const router = useRouter();

    const goToHome = () => {
      router.push('/');
    };

    return {
      goToHome
    };
  }
});
</script>

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
  justify-content: center;
}

.probando {
  margin: 0 auto;
}

a {
  color: $primary;
  margin: 10px;
}
</style>
