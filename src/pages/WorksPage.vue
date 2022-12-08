<template>
  <h3 class="text-center">Works</h3>
  <p>
    La producción de los miembros la Orden de Predicadores producirán durante la
    Edad Moderna una cantidad ingente de obras tanto publicadas como en
    manuscrito. Las presente base de datos constituye la mayor recopilación de
    datos sobre esa producción.
  </p>
  <p>
    Las posibilidades de consulta y de
    <router-link class="textlinks" to="/getdata"
      >descarga de los datos</router-link
    >
    son numerosas:
  </p>
  <q-list>
    <q-item
      ><q-item-section>
        <q-item-label>Categories</q-item-label>
        <p class="description">
          Los dominicos escribieron sobre los temas más variados, pero
          obviamente prestaron especial atención a algunos temas. Por medio de
          nuestra interfaz es posible analizar qué temas fueron más trabajados,
          en qué lugares y en qué periodos.
        </p>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Places</q-item-label>
        <p class="description">
          Los dominicos escribieron sobre los temas más variados, pero
          obviamente prestaron especial atención a algunos temas. Por medio de
          nuestra interfaz es posible analizar qué temas fueron más trabajados,
          en qué lugares y en qué periodos.
        </p>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Authors</q-item-label>
        <p class="description">
          ¿Quiénes fueron losa autores dominicos? ¿Cuál fue su periplo vita y
          profesional? ¿Dónde estuvieron activos?
        </p>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>General search possibilities</q-item-label>
        <p class="description">Hemos desarrollado una interfaz muy completa</p>
      </q-item-section>
    </q-item>
  </q-list>
  <div class="text-center">
    <q-btn
      class="bg-primary q-pa-md q-mt-md q-mb-xl text-h5"
      to="/worksdb"
      label="Go to the database"
    ></q-btn>
  </div>
</template>

<style lang="scss" scoped>
.text-caption {
  font-size: 1rem;
}

.description {
  opacity: 0.6;
}

.separador {
  margin: 30px 0;
  background-image: url('../assets/svg/pattern_05.svg');
  height: 150px;
  width: 100%;
}
</style>
