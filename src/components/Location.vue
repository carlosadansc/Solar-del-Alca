<template>
  <div class="location">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">UBICACIÓN / </span>DONDE ENCONTRAR EL SOLAR
      </p>
      <div class="row">
        <div class="col col-12 col-md-6">
          <h1 class="my-subtitle mt-5">Sobre la ubicación…</h1>
          <h1 class="my-title ms-5">Mejor míralo con tus ojos</h1>
          <ul class="mt-5 ms-md-5">
            <li>Paraíso del sol</li>
            <li>Rinconada de las Californias</li>
            <li>Miramar</li>
            <li>Santa Fé</li>
            <li>Plaza Comercial Pino Payas</li>
            <li>Hispania</li>
          </ul>
        </div>
        <div class="col col-12 col-md-6 flex">
          <p class="mt-5 ms-md-5">
            Junto a cada detalle del residencial, la zona (ubicación) en la que
            se encuentra es una de las cosas más importantes ya que otorga valor
            al proyecto de una manera en la que ningún otro atributo lo hace.
          </p>
          <p class="ms-md-5">
            Junto a una de las zonas comerciales más importantes de toda la
            ciudad de La Paz (Pino Payas) se encuentra Solar Del Alca, también
            albergada por la zona comercial con mayor crecimiento poblacional en
            los últimos años.
          </p>
        </div>
        <div class="col-12 mt-5">
          <Map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/location/Map.vue";

export default {
  name: "Location",
  components: {
    Map,
  },
};
</script>

<style>
.location {
  background: var(--background-color);
  padding: 50px 0;
}

.location ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.location ul li {
  list-style-type: none;
  text-align: left;
}

.location ul li:before {
  content: url("~@/assets/img/enable-point.svg");
  margin: 0 1rem 0.5rem 0;
}
</style>