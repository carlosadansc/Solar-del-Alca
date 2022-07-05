<template>
  <div id="galery" class="galery">
    <img v-if="showImg" @click="showImg = false" class="show-img" :src="currentImg" alt="no_img">

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
         
        </div>
        <div class="col col-12">
          <div class="galery-container mt-3">
            <img v-for="img in images" :key="img.id" :src="img" alt="no_img" @click="openImg(img)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img/g1.jpg";
import img2 from "@/assets/img/g2.jpg";
import img3 from "@/assets/img/g3.jpg";
import img4 from "@/assets/img/g4.jpg";
import img5 from "@/assets/img/g5.jpg";
import img6 from "@/assets/img/g6.jpg";
export default {
  name: "Galery",
  data: () => ({
    showImg: false,
    currentImg: null,
    images: [img1, img2, img3, img4, img5, img6]
  }),
  methods: {
    openImg(img) {
      this.currentImg = img;
      this.showImg = true;
    }
  }
};
</script>

<style scoped>
.galery {
  background-color: var(--background-color);
  padding-top: 50px;
}

.galery img {
  height: 250px;
  width: 100%;
  background-color: var(--green-light);
  object-fit: cover;
  cursor: pointer;
}

.galery-container { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  grid-gap: 2rem;
}

.show-img{
  width: 100%;
  height: 100vh !important;
  position: fixed !important;
  z-index: 999 !important;
  left: 0 !important;
  top: 0 !important;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.5) !important;
  padding: 6rem !important;
  overflow-y: hidden !important;
}

@media screen and (max-width: 768px) {
  .galery-container { 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 1rem;
}

 .show-img{
  padding: 1rem;
}
}
</style>