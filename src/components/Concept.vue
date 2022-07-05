<template>
  <div class="concept">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">CONCEPTO / </span>SOBRE SOLAR DEL ALCA
      </p>
      <div class="row">
        <div class="col col-md-6 col-12">
          <h1 class="my-subtitle mt-5">Sabemos que siempre</h1>
          <h1 class="my-title ms-5">Soñaste con un lugar así</h1>
          <p class="mx-md-5 mb-5 mt-5 mt-md-0">
            No hay forma de que lo convencional sea lo tuyo, por ello tomamos un
            espacio y lo transformamos en un lienzo en blanco para albergar tu nuevo proyecto de vida; 
            todo dentro de la ciudad de La Paz.
          </p>
          <div class="row ms-5 g-0 no-mobile">
            <div class="col col-5">
              <img id="img-1" src="@/assets/img/concept-img1.jpg" alt="no_img" />
            </div>
            <div class="col col-7">
              <img id="img-2" src="@/assets/img/2.jpg" alt="no_img" />
            </div>
          </div>
        </div>
        <div class="col col-md-6 col-12">
          <img id="img-3" src="@/assets/img/3.jpg" alt="no_img" />
          <p class="mt-5 last-text">
            Así que ¡Bienvenido! Estás en tu nuevo hogar, un nuevo espacio de
            convivencia, un nuevo espacio para el cariño y la familia, quizá
            nunca imaginaste alcanzar tus sueños en un solar, pero nosotros sí.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concept",
};
</script>

<style>
.concept {
  background-color: var(--background-color);
  padding-top: 50px 0 50px 0;
}

#img-1 {
  width: 80%;
}

#img-2 {
  width: 95%;
}

#img-3 {
  width: 85%;
}

.last-text {
  width: 85%;
}

@media screen and (max-width: 768px) {
  .no-mobile {
    display: none;
  }

  #img-3 {
    width: 100%;
  }

  .last-text{
  width: 100%
}
}
</style>