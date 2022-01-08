<template>
  <main>
    <div class="background">
      <div class="d-flex align-items-center flex-column" style="height: 100%">
        <div class="mb-auto p-5">
          <img class="logo" src="@/assets/img/preview/logo.svg" alt="" srcset="" />
        </div>

        <div
          class="mt-auto d-flex align-items-center flex-column"
          style="height: 50%"
        >
          <p class="mb-auto date-text">19.09.2021</p>

          <div class="my-auto d-flex justify-content-center">
            <a
              class="mx-3"
              href="https://www.instagram.com/solardelalca.mx/"
              target="_blank"
            >
              <img
                class="social-icon"
                src="@/assets/img/preview/instagram.svg"
                alt="no_img"
              />
            </a>
            <a
              class="mx-3"
              href="https://www.facebook.com/solardelalca.mx"
              target="_blank"
            >
              <img
                class="social-icon"
                src="@/assets/img/preview/facebook.svg"
                alt="no_img"
              />
            </a>
          </div>

          <div class="mt-auto text-bottom">
            <p class="text-center m-0 pb-2">Un nuevo lugar para tu hogar en:</p>
            <p class="text-center m-0 pb-5">
              La Paz, Baja California Sur, México
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
main {
  font-family: var(--general-font);
  color: var(--background-color);
}

.background {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/img/preview/desktop-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.logo {
  height: 64px;
}

.date-text {
  font-family: var(--title-font) !important;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
}

.text-bottom p:nth-child(1) {
  font-size: 1.2rem;
}

.text-bottom p:nth-child(2) {
  font-family: var(--italic-font);
}

.social-icon {
  height: 30px;
}

/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  .background {
    background-image: url("~@/assets/img/preview/mobile-bg.jpg");
  }
}
</style>