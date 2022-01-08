<template>
  <div class="tab">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="security-tab"
          data-bs-toggle="tab"
          data-bs-target="#security"
          type="button"
          role="tab"
          aria-controls="security"
          aria-selected="true"
        >
          Tu seguridad
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="enviroment-tab"
          data-bs-toggle="tab"
          data-bs-target="#enviroment"
          type="button"
          role="tab"
          aria-controls="enviroment"
          aria-selected="false"
        >
          Los paisajes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="comodity-tab"
          data-bs-toggle="tab"
          data-bs-target="#comodity"
          type="button"
          role="tab"
          aria-controls="comodity"
          aria-selected="false"
        >
          La comodidad
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link custom-nav-link"
          id="service-tab"
          data-bs-toggle="tab"
          data-bs-target="#service"
          type="button"
          role="tab"
          aria-controls="service"
          aria-selected="false"
        >
          Los servicios
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="security"
        role="tabpanel"
        aria-labelledby="security-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">Lo pensaste… la</h1>
            <h1 class="my-title ms-5">seguridad de tu familia</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Como existen pocas cosas más importantes que las personas con las
              que convivimos en el día y son nuestra familia ya sea biológica o
              por elección, Solar del Alca está creado pensando en la seguridad
              y la comodidad a tu alcance.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Motivo de acceso</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Barda perimetral</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Banquetas de 2 metros</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Acotaciones</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Luminarias</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="enviroment"
        role="tabpanel"
        aria-labelledby="enviroment-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">Bueno… quizá</h1>
            <h1 class="my-title ms-5">sí somos muy detallistas</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Con el ojo, la mente, la atención y el buen gusto en el detalle
              fue que dotamos este espacio de un conjunto de áreas verdes al
              final de las vialidades, un parque lineal que aporta paisajismo al
              acceso, un motivo de acceso residencial con los materiales más
              sostenibles y bonitos, sí, quizá somos muy detallistas.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">
              Áreas verdes al final de las vialidades
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">
              Parque lineal en área de cesión
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Los mejores materiales</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">
              Mejor aprovechamiento del suelo
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Acabados de alto nivel</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="comodity"
        role="tabpanel"
        aria-labelledby="comodity-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">No busques comodidad</h1>
            <h1 class="my-title ms-5">ya la encontramos para ti</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Desde los flujos de la vialidades, los accesos de los lotes hasta
              los materiales con los que se proyecta Solar del Alca creamos
              espacios que específicamente busquen tu comodidad siempre, así
              crezca tu familia o bien estés buscando un espacio para
              despejarte.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Comodidad en pagos</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Comodidad de acceso</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Cercano a zonas comerciales</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Acceso libre</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="service"
        role="tabpanel"
        aria-labelledby="service-tab"
      >
        <div class="row">
          <div class="col col-12">
            <h1 class="my-subtitle">Cuando creías que</h1>
            <h1 class="my-title ms-5">no podíamos ofrecer más</h1>
          </div>
          <div class="col col-12">
            <p class="mt-1 mt-md-5 mb-5">
              Sabemos que conoces gente muy comprometida pero creemos cuando
              decimos que estamos comprometidos con que tú y tu familia puedan
              tener un valor extraordinario por su dinero en Solar del Alca,
              ofrecemos junto a todo el equipamiento de primer nivel todos los
              servicios de agua y luz.
            </p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Servicios de agua</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Servicio de drenaje</p>
          </div>
          <div class="col col-auto">
            <p class="feature-item mt-md-1 me-3">Servicio de luz eléctrica</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
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