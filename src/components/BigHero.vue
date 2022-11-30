<template>
  <div class="hero q-hoverable cursor-pointer" @click="goToHome()">
    <h2><span style="color: #cc0d12">Early Modern</span> Dominican Order</h2>
    <h4><em>by </em>Igor Sosa Mayor</h4>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'BigHero',

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
.hero {
  background-image: url('../assets/patron.svg');
  /* background-image: url('../assets/nuevowave.svg'); */

  h2 {
    font-size: clamp(21px, 3vw, 3vw);
    padding-top: 20vh;
    padding-bottom: 10px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.0333em;
    margin-top: 0px;
    margin-bottom: 0px;
    color: black;
  }
  h4 {
    font-size: clamp(21px, 2vw, 2.2vw);
    padding-bottom: 20vh;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.0333em;
    margin-top: 0px;
    margin-bottom: 0px;
    color: black;
  }
}
</style>
