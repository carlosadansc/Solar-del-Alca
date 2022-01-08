<template>
  <div id="galery" class="galery">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">GALERÍA / </span>EMPIEZA POR CONOCER AÚN MÁS
      </p>
      <div class="row">
        <div class="col col-12 col-md-6">
          <h1 class="my-subtitle mt-0">Sabemos que siempre</h1>
          <h1 class="my-title ms-5">Soñaste con un lugar así</h1>
        </div>
        <div class="col col-12 col-md-6">
          <p class="mx-md-5 mt-3 mt-md-0 mb-5">
            No hay forma de que lo convencional sea lo tuyo, por ello dotamos un
            espacio de hermosas vistas, materiales de la mejor calidad y las
            amenidades que te mereces; todo esto para albergar un nuevo hogar
            hecho a tu medida.
          </p>
        </div>
        <div class="col col-12">
          <div class="galery-container mt-3">
            <img src="@/assets/img/home-bg-1.jpg" alt="no_img" />
            <img src="@/assets/img/quote-bg.jpg" alt="no_img" />
            <img src="@/assets/img/park-img.jpg" alt="no_img" />
            <img src="@/assets/img/green-place-img.jpg" alt="no_img" />
            <img src="@/assets/img/parking-img.jpg" alt="no_img" />
            <img src="@/assets/img/land-img.jpg" alt="no_img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Galery",
};
</script>

<style>
.galery {
  background-color: var(--background-color);
  padding-top: 50px;
}

.galery img {
  height: 250px;
  width: 100%;
  background-color: var(--green-light);
  object-fit: cover;
}

.galery-container { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  grid-gap: 2rem;
}

@media screen and (max-width: 768px) {
  .galery-container { 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 1rem;
}
}
</style>