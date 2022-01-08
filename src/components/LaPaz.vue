<template>
  <div class="lapaz">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">LA PAZ / </span>TU HOGAR PARA SIEMPRE
      </p>
      <div class="row align-items-end" style="height: 80vh">
        <div class="col col-12">
          <h1 class="my-title">
            Un puerto de ilusiones, esperanzas, oportunidades y gente
            maravillosa, La Paz, Baja California Sur.
          </h1>
          <hr class="divider-line" />
          <p class="mt-5">
            El lugar donde se funde el desierto con el mar y explora paisajes
            llenos de vida salvaje en un entorno sin igual. La Paz está rodeada
            por lugares increíbles, incluyendo las playas más bonitas de México,
            Islas Patrimonio Mundial de la Humanidad y pueblos pintorescos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaPaz",
};
</script>

<style>
.lapaz {
  height: 100vh;
  background: url("~@/assets/img/lapaz-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 50px;
  color: var(--background-color);
}

.lapaz hr{
   color: var(--background-color)
}
</style>