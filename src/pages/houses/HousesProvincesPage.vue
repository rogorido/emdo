<template>
  <h4>Provincias dominicas: su peso específico</h4>
  <p>
    La Orden de Predicadores tiene una compleja estructura espacial, en la que
    se combinan al menos tres niveles. El primer lugar el de las casas de la
    Orden, los monasterios. Estos se agrupan, en segundo lugar, en estructuras
    más amplias llamadas generalmente provincias. Y todas ellas unidas
    constituyen la Orden en sí.
  </p>
  <p>
    En concreto, tras el golpe organizativo que supone para su estructura la
    reforma protestante, la Orden de Predicadores logra --a partir de c.1570--
    recuperar vigor numérico, pasando de 31 provincias con 900 conventos a las
    49 provincias pobladas por unos 1200 conventos que encontramos en 1720.
  </p>

  <p>
    Las presentes páginas muestran una work-in-progress de la distribución
    geográfica de las casas dominicas (masculinas) en sus dimensiones globales.
    Remitimos a algunos de los
    <router-link class="textlinks" to="/houses/problems">problemas</router-link>
    de las informaciones aquí reseñadas.
  </p>
  <h5>Las provincias: número de casas dominicas</h5>
  <Suspense>
    <template #default>
      <HousesProvincesTable />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import HousesProvincesTable from 'components/houses/HousesProvincesTable.vue';
</script>
