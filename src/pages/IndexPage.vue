<template>
  <h3>
    <em class="suave"
      >The most comprehensive webpage devoted to the
      <span class="prueba">Dominican Order</span> in the early modern
      period.</em
    >
  </h3>

  <div class="intro">
    <p>
      Estas páginas están dedicadas al proyecto de investigación
      <em>
        Globalización religiosa como reto. Gobierno global, geopolítica y costes
        en la Orden de Predicadores (1570-1700)</em
      >, dirigido por
      <router-link class="textlinks" to="/contact">Igor Sosa Mayor</router-link>
      y financiado por el
      <a class="textlinks" href="#">Ministerio de Ciencia</a>
      e Innovación de España.
    </p>
  </div>
  <OurSections />
</template>

<script setup>
import OurSections from 'components/homepage/OurSections.vue';
</script>

<style lang="scss" scoped>
.intro p {
  font-size: 1.5rem;
}

.textlinks {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  overflow-wrap: break-word;
  word-break: normal;
  word-wrap: break-word;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    $link-hover-color 100%,
    transparent 100%
  );
  background-position: 0 1.2em;
  background-repeat: repeat-x;
  background-size: 2px 4px;
  //transition: background-color 0.5s, background-image 0.5s;

  &:hover {
    background-color: $link-hover-color;
    background-image: none;
    color: $white;
  }
}

.suave {
  opacity: 0.75;

  .prueba {
    opacity: 1;
    color: #cc0d12;
  }
}
</style>
