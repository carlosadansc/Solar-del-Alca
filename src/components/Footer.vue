<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-5">
        <div class="col col-12 col-md-6 d-flex align-items-md-start align-items-center flex-column">
          <div class="mail-container">
            <img src="@/assets/img/logosolarfooternew.svg" alt="" />
            <p class="footer-title">Siempre puedes encontrarnos en:</p>
            <p>contacto@solardelalca.mx</p>
          </div>

          <div class="privacy-container mt-auto">
            <p class="footer-title-italic">Made with ❤️ by async agencia creativa</p>
            <p>@2021 todos los derechos reservados LOBBI - IGE</p>
          </div>
        </div>

        <div class="col col-12 col-md-6">
          <div class="row">
            <div class="col col-12 col-md-auto">
              <ul class="social-list">
                <li class="footer-title">Redes sociales</li>
                <li><a href="https://www.instagram.com/solardelalca.mx/" target="_blank">Instagram</a></li>
                <li><a href="https://www.facebook.com/solardelalca.mx" target="_blank">Facebook</a></li>
              </ul>
            </div>
            <div class="col col-12 col-md-auto">
              <ul class="partners-list">
                <li class="footer-title">Equipo y colaboradores</li>
                <li><a href="https://www.facebook.com/lobbi.mx" target="_blank">Lobby - IGE</a></li>
                <li><a href="https://www.facebook.com/cvbika" target="_blank">Cvbika</a></li>
                <li><a href="https://www.facebook.com/Dominio11Studio-113308376718978" target="_blank">Dominio 11</a></li>
                <li><a href="https://www.facebook.com/async.mx" target="_blank">Async Agencia Creativa</a></li>
                <li><a href="https://www.facebook.com/welcomehomebaja.mx" target="_blank">Welcome Home Baja</a></li>
                <!-- <li><a href="https://www.facebook.com/AB-Real-Estate-103094091688860" target="_blank">Ab Real Estate</a></li> -->
              </ul>
            </div>
            <div class="col col-12 col-md-auto">
              <ul class="section-list">
                <li class="footer-title">Secciones</li>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#project">Proyecto</a></li>
                <li><a href="#galery">Galería</a></li>
                <li><a href="#quote">Cotizador</a></li>
                <li><a href="#land">Lotes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  color: var(--background-color);
  background-color: var(--green-nopal);
  padding: 30px 0;
}

.footer img {
  float: left;
  max-width: 80px;
  margin-right: 1rem;
}

.footer p,
li {
  margin-bottom: 0.3rem;
}

.footer .mail-container p {
  width: 50%;
  float: left;
}

.footer ul {
  float: left;
}

.footer ul li {
  list-style: none;
}

.footer ul li a{
    color: var(--background-color);
}

.footer-title{
  color: var( --background-secondary-color);
  font-family: var(--title-font-bold);
}

.footer-title-italic{
  color: var( --background-secondary-color);
  font-family: var(--italic-font);
}

@media screen and (max-width: 768px) {
  .footer img {
    float: none;
    max-width: 50%;
    margin: 0 0 2rem 0;
  }

  .footer > p, li {
    margin-bottom: 0.3rem;
    text-align: center;
  }

  .mail-container {
    text-align: center;
    margin: 2rem 0;
  }

  .footer .mail-container p {
    width: 100%;
    float: center;
  }

  .footer ul {
    float: none;
    width: 100%;
    padding: 0;
  }

  .footer ul li {
    list-style: none;
  }
}
</style>