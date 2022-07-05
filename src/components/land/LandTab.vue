<template>
  <div class="LandTab">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="type1-tab"
          data-bs-toggle="tab"
          data-bs-target="#type1"
          type="button"
          role="tab"
          aria-controls="type1"
          aria-selected="true"
        >
          Lote imperial
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="type2-tab"
          data-bs-toggle="tab"
          data-bs-target="#type2"
          type="button"
          role="tab"
          aria-controls="type2"
          aria-selected="false"
        >
          Lote real
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="type3-tab"
          data-bs-toggle="tab"
          data-bs-target="#type3"
          type="button"
          role="tab"
          aria-controls="type3"
          aria-selected="false"
        >
          Lote común
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="type1"
        role="tabpanel"
        aria-labelledby="type1-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">La mejor ubicación</h1>
            <h1 class="my-title ms-5">y distribución de la tierra</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Los lotes imperiales tienen una distribución y una extensión
              privilegiada dentro del proyecto ya que estos a parte de contar
              con dos accesos y una extensión cercana a los 260.00m2 son las
              esquinas con una de las mejores vistas de todo el proyecto.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Buenas vistas.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Ubicación estratégica.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Dos accesos.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Financiamiento disponible.</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="type2"
        role="tabpanel"
        aria-labelledby="type2-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">¿Buscas despertar</h1>
            <h1 class="my-title ms-5">con una vista hermosa?</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Sin duda, si algo destaca de los lotes reales son las vistas que
              estos tienen, ya sea hacia las hermosos cultivos o a los
              residenciales cercanos, los lotes reales son una gran opción a
              considerar.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Las mejores vistas.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">
              Frente a parque en área de sesión.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Aprovechamiento.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Financiamiento disponible.</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="type3"
        role="tabpanel"
        aria-labelledby="type3-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">Si de oportunidades</h1>
            <h1 class="my-title ms-5">hablamos… la mejor.</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              ¿Te imaginas un espacio solo para ti, sin distracciones, silencio,
              tranquilidad y unas grandes vistas? claro que sí lo imaginas, pero
              apostamos a que creerías que puedes tener todo esto dentro de la
              Ciudad.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Oportunidad.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Buenas ubicaciones.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Un acceso.</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Financiamiento disponible.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandTab",
};
</script>

<style>
.nav-tabs {
  border-bottom: none;
  margin-bottom: 5rem;
}

.nav-tabs .nav-link {
  font-family: var(--italic-font);
  font-size: 0.8rem;
  color: var(--text-color);
  margin-bottom: -1px;
  background: 0 0;
  border-top: 1px solid;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.custom-nav-link {
  border-right: none !important;
}

.nav-tabs .nav-link::before {
  content: url("../../assets/img/disable-point.svg");
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: var(--text-color);
  background-color: transparent;
  border-top: 0.25rem solid !important;
  border-color: var(--red-pitahaya) var(--text-color) transparent transparent !important;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active:before {
  content: url("../../assets/img/enable-point.svg");
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: var(--text-color) var(--text-color) transparent transparent;
  isolation: isolate;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover:before {
  content: url("../../assets/img/enable-point.svg");
}

.feature-item {
  font-size: 0.9rem;
}

.feature-item:before {
  content: url("../../assets/img/enable-point.svg");
  margin-right: 5px;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .nav-tabs {
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link:hover:before {
    content: "" !important;
  }

  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active:before {
    content: "" !important;
  }

  .nav-tabs .nav-link::before {
    content: "" !important;
  }
}
</style>