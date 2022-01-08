<template>
  <div id="land" class="land">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">TIPOS DE LOTES / </span>SIEMPRE ALGO ESPECIAL
        PARA TI
      </p>
      <div class="row">
        <div class="col col-12 col-md-6 pt-5">
          <LandTab />
        </div>
        <div class="col col-12 col-md-6">
          <img src="@/assets/img/land-img.jpg" alt="no_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandTab from "@/components/land/LandTab.vue";
export default {
  name: "land",
  components: {
    LandTab,
  },
};
</script>

<style>
.land {
  background-color: var(--background-color);
  padding-top: 50px;
  padding-bottom: 50px;
}

.land img {
  width: 90%;
  float: right;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .land img {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>