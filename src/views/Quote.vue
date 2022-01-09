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
                <div class="col col-12">
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
                <div class="col">
                  <p>ANCHO</p>
                  <p>200m</p>
                </div>
                <div class="col">
                  <p>PRECIO X METRO</p>
                  <p>200m</p>
                </div>
                <div class="col">
                  <p>ACCESOS</p>
                  <p>200m</p>
                </div>
                <div class="col">
                  <p>PRECIO DE LISTA</p>
                  <p>200m</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5>Monto de enganche estimado*.</h5>
          <input style="width: 100%" type="text" />
          <small
            >*Se permiten montos desde el 10% del valor total del terreno
            seleccionado</small
          >
          <h5>Plazo del financiamiento*.</h5>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <small>
            *Según el enganche seleccionado se ajustan los plazos permitidos.
          </small>
          <button>REALIZAR COTIZACIÓN</button>
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
      isDeletable: false,
      interactivity: "click",
      data: [],
      hotspotColor: "red",
      messageBoxColor: "#409eff",
      textColor: "#333",
      opacity: 0.9,
    },
  }),

  created() {},

  mounted() {
    this.getGrounds();
  },

  computed: {
    
  },

  methods: {
    async getGrounds() {
      try {
        const resDB = await db.collection("grounds").orderBy("category").get();

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
          console.log(res.data().category);
        });
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
      
    },
    hotspotColor(data){
       data.forEach((item) => {
          return item.category == "basic" ? "#AE0030" : "#D0860D" ? item.category == "real" : "#406941";
       });
    }
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