<template>
  <h3>
    <em class="suave"
      >The most comprehensive webpage devoted to the
      <span class="text-primary">Dominican Order</span> in the early modern
      period.</em
    >
  </h3>
  <div class="intro">
    <p>
      La orden de predicadores vivió durante la Edad Moderna una época de
      explendor. Su número de casas y efectivos creció de manera significativa,
      sus misioneros evangelizaron en las cuatro partes del mundo y sus
      intelectuales se ocuparon de los más variados temas. La presente página
      web presenta a los investigadores informaciones variadas sobre la Orden
      producto de las investigaciones de su responsable,
      <router-link class="textlinks" to="/contact">Igor Sosa Mayor</router-link>
      . Tanto los datos como el código usado
      <router-link to="/getdata" class="textlinks"
        >están accesibles</router-link
      >
      para otros investigadores.
    </p>
  </div>

  <GeneralDescription />
</template>

<script setup>
import GeneralDescription from 'components/homepage/GeneralDescription.vue';
</script>

<style lang="scss" scoped>
.intro p {
  font-size: 1.5rem;
}

.suave {
  opacity: 0.75;
}
</style>
