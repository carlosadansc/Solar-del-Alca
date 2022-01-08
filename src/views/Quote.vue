<template>
  <div class="quote-page">
    <Nav class="this-nav" />
    <div class="this-background row g-0">
      <div class="col col-5">
        <div class="quote-card">
          <h5>COTIZADOR DE LOTES SOLAR DEL ALCA</h5>
          <hr />
          <h1>Hola! <strong>Bienvenido,</strong></h1>
          <p>
            Haz click sobre uno de los lotes en el mapa de la derecha para
            obtener información, luego escoge las opciones de pago que te
            Parezcan adecuadas para obtener una cotización.
          </p>
          <hr />

          <div class="row">
            <div class="col col-4">
              <img src="" alt="no_img" />
            </div>
            <div class="col col-8">
              <div class="row">
                <div class="col">
                  <span>Lote común #16</span>
                </div>
                <div class="col">
                  <p>SUPERFICIE</p>
                  <p>2,500 m2</p>
                </div>
                <div class="col">
                  <p>LARGO</p>
                  <p>200m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-7">
        <VueHotspot
          class="grounds-img"
          :init-options="hotspotConfig"
          @hotspot-click="hotspotClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav2.vue";
import VueHotspot from "vue-hotspot-ets";
import { db } from "../firebase";

export default {
  name: "Quote",
  components: {
    Nav,
    VueHotspot,
  },
  data: () => ({
    hotspotConfig: {
      image: require("@/assets/img/grounds-sda.png"),
      editable: false,
      hotspotEditable: false,
      hotspotColor: "rgba(191, 131, 75, 0.6);",
      isDeletable: false,
      interactivity: "click",
      data: [],
      hotspotColor: "hsla(36, 95%, 45%, 0.718)",
      messageBoxColor: "#409eff",
      textColor: "#333",
      opacity: 0.9,
    },
  }),

  created() {},

  mounted() {
    this.getGrounds();
  },

  methods: {
    async getGrounds() {
      try {
        const resDB = await db.collection("grounds").orderBy("id").get();

        resDB.forEach((res) => {
          this.hotspotConfig.data.push({
            id: res.data().id,
            category: res.data().category,
            meterPrice: res.data().meterPrice,
            area: res.data().area,
            x: res.data().coordinates.x,
            y: res.data().coordinates.y,
            length: res.data().length,
            width: res.data().width,
            img: res.data().img,
            status: res.data().status,
          });
        });

        console.log(this.hotspotConfig.data);
      } catch (error) {
        console.log(error);
      }
    },
    saveData(data) {
      // Do something with the list of hotspots
      console.log(data);
    },
    afterDelete() {
      // Do something after delete
      console.log("Do something after delete ...");
    },
    addHotspot(hotspot) {
      console.log("Added hotspot", hotspot);
    },
    hotspotClick(hotspot) {
      let sw = hotspot.id;
      console.log(hotspot.x, "/", hotspot.y);
    },
  },
};
</script>

<style>
.ui__vue_hotspot {
  height: 0 !important;
}

.ui__vue_hotspot_hotspot.active > div {
  display: none !important;
}

.ui__vue_hotspot_buttons_box {
  height: 0 !important;
}

.this-nav {
  background-color: #fff6e8;
  padding-bottom: 3rem;
  position: relative;
}

.this-background {
  background: url(../assets/img/quote-page-bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 3rem;
  height: 100vh;
}

.quote-card {
  background-color: #efdbb4;
  height: 100vh;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -2rem;
  box-shadow: 15px 8px 8px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.grounds-img {
  width: 90% !important;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 3rem;
}
</style>