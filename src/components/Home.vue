<template>
  <div id="home">
    <div class="home">
      <div class="logo-mobile d-flex align-items-start justify-content-center">
        <img class="mv" src="@/assets/img/logo.svg" alt />
      </div>
      <div class="row align-items-end home-items" style="height: 100%">
        <div class="col px-md-5">
          <h5 class="bottom-item-title mb-0">LOTES DE 200m2</h5>
          <p>Totalmente urbanizados.</p>
          <hr />
        </div>
        <div class="col px-md-5">
          <h5 class="bottom-item-title mb-0">HASTA 96 MESES</h5>
          <p>Contando con financiamiento.</p>
          <hr />
        </div>
        <div class="col px-md-5">
          <h5 class="bottom-item-title mb-0">LOS PAISAJES</h5>
          <p>Áreas verdes y amenidades.</p>
          <hr />
        </div>
        <div class="col px-md-5">
          <h5 class="bottom-item-title mb-0">CON SERVICIOS</h5>
          <p>Y con buena seguridad.</p>
          <hr />
        </div>
      </div>
    </div>
    <div
      class="mouse-container d-flex align-items-center justify-content-center"
    >
      <span class="d-flex align-items-center">Desliza para conocer más</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
.home {
  height: 90vh;
  background: url("~@/assets/img/home-bg-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 8rem 3rem 8rem;
}

.home hr {
  height: 1.4px;
  opacity: 1;
}

.bottom-item-title {
  font-family: var(--title-font-bold);
  font-size: 1.3rem;
}

.mouse-container {
  height: 10vh;
  background-color: var(--background-color);
}

.mouse-container span {
  font-family: var(--italic-font);
}

.mouse-container span:before {
  content: url("~@/assets/img/mouse-icon.svg");
  margin-right: 0.5rem;
}

/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  .home-items {
    display: none;
  }

  .logo-mobile {
    height: 100%;
  }

   .logo-mobile img{
    margin-top: 5rem;
    height: 50px;
  }
}
</style>