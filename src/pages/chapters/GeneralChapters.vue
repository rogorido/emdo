<template>
  <h3>Capítulos generales</h3>
  <p>
    La Orden de Predicadores celebró con una regularidad notable a lo largo de
    la Edad Moderna capítulos generales en los que se congregaron representantes
    de la Orden llegados de todo el globo. A lo largo del siglo XVII y en un
    proceso que algunos han considerado una manifestación de la centralización
    de la Orden y el control del Maestro general, su número se fue reduciendo y
    su frecuencia espaciando.
  </p>
  <p>
    El siguiente gráfico nos muestra la frecuencia de celebraciones por década:
  </p>
  <Suspense>
    <template #default>
      <GenChapsDecades />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <h2>Distribución geográfica</h2>
  <p>
    El <b class="marcado">lugar de celebración</b> de los capítulos generales
    tenía una importancia georreligiosa notable. La Orden había establecido que
    las diferentes provincias se fueran rotando en la obligación (siempre
    gravosa económicamente, pero importante desde del punto de vista de la
    política interna de la orden) de celebrar el capítulo general.
  </p>
  <p>
    La distribución geográfica de los capítulso generales presenta así en
    principio una gran amplitud, pues encontramos que en la Edad Moderna se
    celebran este tipo de reuniones hasta en 17 ciudades diferentes (Roma,
    Bolonia, Milán, Nápoles, Valladolid, Génova, Venecia, etc.). Pero al mismo
    tiempo se percibe una clara tendencia a concentrar estas reuniones en la
    ciudad de Roma.
  </p>
  <p>
    La frecuencia por lugar durante la Edad Moderna se puede ver en el siguiente
    gráfico:
  </p>
  <Suspense>
    <template #default>
      <GenChapsPlaces />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <h2>Distribución geográfica: mapa</h2>
  <p>
    La representación cartográfica de esta distribución se puede ver en el
    siguiente mapa:
  </p>
  <GenChapsPlacesMap />
</template>

<script>
import GenChapsDecades from '../../components/chapters/GenChapsDecades.vue';
import GenChapsPlaces from '../../components/chapters/GenChapsPlaces.vue';
import GenChapsPlacesMap from '../../components/chapters/GenChapsPlacesMap.vue';

export default {
  name: 'GeneralChapters',
  components: { GenChapsDecades, GenChapsPlaces, GenChapsPlacesMap }
};
</script>
