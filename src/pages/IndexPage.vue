<template>
  <q-page>
    <h2>Early Modern Order's Preacher</h2>
    <h3>
      Gobierno global, geopolítica y costes en la Orden de Predicadores
      (1570-1700)
    </h3>
    <q-btn
      unelevated
      rounded
      class="q-pa-md"
      color="primary"
      label="More info"
      to="/about"
    ></q-btn>

    <div class="intro">
      <p>
        Estas páginas están dedicadas al proyecto de investigación
        <em>
          Globalización religiosa como reto. Gobierno global, geopolítica y
          costes en la Orden de Predicadores (1570-1700)
        </em>
        , dirigido por Igor Sosa Mayor y financiado por el Ministerio de Ciencia
        e Innovación de España.
      </p>
    </div>

    <div class="row">
      <h3>Our sections</h3>
    </div>
    <div class="row q-gutter-sm">
      <div class="col-3" v-for="section in sections" :key="section.id">
        <q-card v-ripple>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-card-section>
            <div class="text-h4">{{ section.titulo }}</div>
          </q-card-section>

          <q-card-section>{{ section.texto }} </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { sections } from '../assets/links';
</script>

<style scoped>
.intro p {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
}
</style>
