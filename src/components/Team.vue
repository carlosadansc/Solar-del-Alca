<template>
  <div class="team">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">EQUIPO / </span>DEDICADOS A PLANEAR SUEÑOS
      </p>
      <div class="row g-5">
        <div class="col col-12 col-md-6">
          <div class="partners-container">
            <div class="partner">
              <img
                class="partner-img"
                src="@/assets/img/cvbika-logo.svg"
                alt=""
              />
              <div>
                <p class="partner-name">CVBIKA - Arq. Edf.</p>
                <hr />
                <p>Planeación y diseño del proyecto de lotes residenciales.</p>
              </div>
            </div>

            <div class="partner">
              <img
                class="partner-img"
                src="@/assets/img/lobbi-logo.svg"
                alt=""
              />
              <div>
                <p class="partner-name">Lobbi - IGE</p>
                <hr />
                <p>Estructuración legal y manejo de la tierra.</p>
              </div>
            </div>

            <div class="partner">
              <img
                class="partner-img"
                src="@/assets/img/async-logo.svg"
                alt=""
              />
              <div>
                <p class="partner-name">Async Agencia Creativa</p>
                <hr />
                <p>Diseño de identidad, marketing y estrategia comercial.</p>
              </div>
            </div>

            <div class="partner">
              <img
                class="partner-img"
                src="@/assets/img/dominio11-logo.svg"
                alt=""
              />
              <div>
                <p class="partner-name">Dominio 11 Studio</p>
                <hr />
                <p>Diseño de paisajismo, áreas comunes y amenidades.</p>
              </div>
            </div>

            <div class="partner">
              <img
                class="partner-img"
                src="@/assets/img/henko-logo.svg"
                alt=""
              />
              <div>
                <p class="partner-name">Henko Real Estate</p>
                <hr />
                <p>Equipo comercial y de asesoramiento de proyecto.</p>
              </div>
            </div>

            <div class="partner">
              <img class="partner-img" src="@/assets/img/ab-logo.svg" alt="" />
              <div>
                <p class="partner-name">AB Real Estate</p>
                <hr />
                <p>Equipo comercial y de asesoramiento de proyecto</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6">
          <h1 class="my-subtitle">Aún tenemos un</h1>
          <h1 class="my-title mb-5 mb-md-0 ms-5">Lugar para ti en el equipo</h1>
          <p class="ms-md-5">
            Creamos un equipo que funciona cual reloj suizo, cuidando al
            milímetro cada uno de los detalles de este desarrollo, una
            combinación perfecta entre talento y experiencia que hacen posible
            Solar del Alca en La Paz.
          </p>
          <p class="ms-md-5">
            Pero claro, aún estamos buscando un elemento que ayude a completar
            el equipo, un desarrollo como Solar del Alca no es nada sin alguien
            que disfrute de él y ahí es donde esperamos te intereses por
            sumarte.
          </p>
        </div>
      </div>
    </div>
    <div class="phrase-container">
      <p class="text-center">
        “Para el hombre, como para el pájaro, el mundo tiene muchos sitios donde
        posarse, pero nidos solamente uno.”
        <span class="author-label">- Oliver Wender Holmes</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  components: {},
};
</script>

<style>
.team {
  background-color: var(--background-color);
  padding-top: 50px;
}

.team .partners-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 210px 210px;
  grid-gap: 3rem;
}

.team .partners-container .partner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.team .partner-img {
  max-width: 80%;
  max-height: 70px;
  object-fit: contain;
  margin: 0;
}

.team .partner .partner-name {
  font-weight: bold;
  font-size: 1rem;
}

.team .partner p {
  font-family: var(--italic-font);
  font-size: 0.8rem;
}

@media screen and (max-width: 768px) {
  .team .partners-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 210px 210px 210px;
    grid-gap: 2rem;
  }


.team .partner .partner-name {
  font-weight: bold;
  font-size: .9rem;
}
}
</style>