<template>
  <div id="quote" class="quote">
    <div class="container">
      <div class="d-flex align-items-center flex-column" style="height: 85vh">
        <div class="text-container mt-auto">
          <h1 class="quote-title text-center mb-0">
            Existe un lugar donde tú y tu familia pueden sentirse vivos,
            sentirse libres y seguros a la vez.
          </h1>
          <h1 class="quote-title text-center title-italic mt-2 mt-1">
            Lo mejor es que a partir de aquí solo puede mejorar.
          </h1>
        </div>
        <button @click="to('/quote')" class="my-auto">EMPEZAR A COTIZAR</button>
        <div class="d-flex align-items-center">
          <span class="mx-md-5 mx-2 italic-item"
            >Lotes desde: $230,591.40 MXN</span
          >
          <span class="mx-md-5 mx-2 italic-item"
            >Enganches desde: 10% valor total</span
          >
          <span class="mx-md-5 mx-2 italic-item"
            >Mensualidades hasta: 84 meses</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  methods: {
    to(route){
       this.$router.push(route);
    }
  },
};
</script>

<style>
.quote {
  background: url("~@/assets/img/6.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0;
  color: var(--background-color);
}

.quote-title {
   font-family: var(--title-font);
    font-size: 2.1rem;
    margin-bottom: .5rem;
}

.quote .title-italic {
  font-family: var(--italic-font);
}

.quote .text-container {
  width: 60%;
}

.quote button {
  padding: 1rem 5rem;
  font-family: var(--title-font);
  border: none;
  background-color: var(--text-color);
  color: var(--background-color);
}

.italic-item {
  font-family: var(--italic-font);
}

@media screen and (max-width: 768px) {
  .quote .text-container {
    width: 80%;
  }

  .italic-item {
    font-family: var(--italic-font);
    font-size: 0.7rem;
  }

  .quote-title {
    font-family: var(--title-font);
    font-size: 1.3rem;
    margin-bottom: .5rem;
  }
}
</style>