<template>
  <div class="quote-page this-background">
    <Nav class="this-nav" />
    <div class="container">
      <div class="row g-0">
        <div class="col col-lg-5 col-md-12 col-12">
          <div class="quote-card">
            <div style="border-bottom: 2px solid black; width: fit-content">
              <h5 class="title">COTIZADOR DE LOTES SOLAR DEL ALCA</h5>
            </div>
            <h1>Hola! <strong>Bienvenido,</strong></h1>
            <p>
              Haz click sobre uno de los lotes en el mapa de la derecha para
              obtener información, luego escoge las opciones de pago que te
              Parezcan adecuadas para obtener una cotización.
            </p>
            <hr />
            <div
              v-if="!currentLand.id"
              class="d-flex py-5 justify-content-center"
            >
              <h6 class="mb-0" style="color: #4a7b55">
                Aun no se ha seleccionado ningun lote.
              </h6>
            </div>
            <div v-else class="row">
              <div class="col col-4">
                <div class="imagen"></div>
                <!-- <img src="" alt="no_img" /> -->
              </div>
              <div class="col col-8">
                <div class="row">
                  <div class="col col-12 d-flex justify-content-between">
                    <span class="lote-id"
                      >Lote {{ category }} #{{ currentLand.id }}</span
                    >
                    <div class="close-button" @click="clearLand">
                      <i class="ri-close-line"></i>
                    </div>
                  </div>
                  <div class="col col-4">
                    <p class="subtitles">SUPERFICIE</p>
                    <p class="info-text">{{ currentLand.area }}m2</p>
                  </div>
                  <div class="col col-4">
                    <p class="subtitles">LARGO</p>
                    <p class="info-text">{{ currentLand.length }}m</p>
                  </div>
                  <div class="col col-4">
                    <p class="subtitles">ANCHO</p>
                    <p class="info-text">{{ currentLand.width }}m</p>
                  </div>
                  <div class="col col-6">
                    <p class="subtitles">PRECIO X METRO</p>
                    <p class="info-text">
                      {{ formatMoney(currentLand.price) }} MXN
                    </p>
                  </div>
                  <div class="col col-6">
                    <p class="subtitles">ACCESOS</p>
                    <p class="info-text">{{ currentLand.access }}</p>
                  </div>
                  <div class="col">
                    <p class="subtitles">PRECIO DE LISTA</p>
                    <p class="info-text">
                      {{ formatMoney(newPriceList) }} MXN
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h5 class="mt-2">
              Monto de enganche estimado<span style="color: #bf153e">*</span>.
            </h5>
            <div class="input-content">
              <input
                type="text"
                class="input-monto"
                placeholder="000,000.00"
                v-model.lazy="displayValue"
                :disabled="!enable"
                @blur="isInputActive = false"
                @focus="isInputActive = true"
              />
            </div>
            <p class="info-warning">
              *Se permiten montos desde el 10% del valor total del terreno
              seleccionado hasta el 50%.
            </p>
            <h5>
              Plazo del financiamiento<span style="color: #bf153e">*</span>.
            </h5>
            <div class="dropdown-plazos mb-2">
              <button
                :disabled="!enable"
                class="btn btn-secondary dropdown-toggle boton-plazos"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ plazo }} Meses
              </button>
              <ul
                class="dropdown-menu py-0 pt-1"
                aria-labelledby="dropdownMenuButton1"
              >
                <li v-for="item in meses" :key="item">
                  <span
                    class="dropdown-item meses-options"
                    @click="plazo = item"
                    >{{ item }} meses</span
                  >
                </li>
              </ul>
            </div>
            <p class="info-warning">
              *Según el enganche seleccionado se ajustan los plazos permitidos.
            </p>
            <button class="cotizar-button mt-4" @click="generateReport">
              REALIZAR COTIZACIÓN
            </button>
          </div>
        </div>
        <div class="col col-lg-7 col-md-12 col-12 px-md-0 px-3">
          <VueHotspot
            class="grounds-img"
            :init-options="hotspotConfig"
            @hotspot-click="hotspotClick"
          />
          <div class="info-hotspots mt-5">
            <p class="dot dot-red">
              <b>Lote Común:</b> Son lotes frente a vialidades, cuentan con 1
              acceso, cuentan con vistas directas a otros lotes y son los de
              menor precio dentro del desarrollo.
            </p>
            <p class="dot dot-yellow">
              <b>Lote Real:</b> Son lotes frente a áreas comunes importantes o
              bien en esquinas, cuentan con 1 o 2 accesos, cuentan con vistas
              directas a áreas verdes o bien hacia el motivo de acceso.
            </p>
            <p class="dot dot-green">
              <b>Lote Imperial:</b> Son lotes ubicados en esquinas estratégicas,
              su extensión es mayor, cuentan con 2 accesos y tienen vistas hacia
              áreas verdes.
            </p>
          </div>
        </div>
      </div>
    </div>
    <VueHtml2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="cotizacion.pdf"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="letter"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <h2>Hola</h2>
      </section>
    </VueHtml2pdf>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav2.vue";
import VueHotspot from "vue-hotspot-ets";
import { db } from "../firebase";
import Footer from "@/components/Footer.vue";
import VueHtml2pdf from "vue-html2pdf";
import moment from 'moment';

export default {
  name: "Quote",
  components: {
    Nav,
    VueHotspot,
    VueHtml2pdf,
    Footer,
  },
  data: () => ({
    enganche: 0,
    newPriceList: 0,
    minEnganche: 0,
    maxEnganche: 0,
    plazo: 0,
    enable: false,
    currentLand: {
      id: "",
      name: "",
      img: "",
      price: "",
      area: "",
      length: "",
      width: "",
      access: "",
      priceList: "",
    },
    hotspotConfig: {
      image: require("@/assets/img/grounds-sda.png"),
      editable: false,
      hotspotEditable: false,
      isDeletable: false,
      interactivity: "click",
      data: [],
      hotspotColor: "#bf153e",
      messageBoxColor: "#409eff",
      textColor: "#333",
      opacity: 0.9,
    },
    meses: [12, 24, 36, 48, 60, 72, 84, 96],
    isInputActive: false,
  }),

  created() {},

  mounted() {
    this.getGrounds();
  },

  computed: {
    displayValue: {
      get: function () {
        if (this.isInputActive) {
          return this.enganche.toString();
        } else {
          return (
            "$ " +
            this.enganche
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
          );
        }
      },
      set: function (modifiedValue) {
        let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""));
        if (isNaN(newValue)) {
          newValue = 0;
        } else if (newValue < this.minEnganche) {
          newValue = this.minEnganche;
        } else if (newValue > this.maxEnganche) {
          newValue = this.maxEnganche;
        }
        this.enganche = newValue;
      },
    },
    enabled() {
      if (this.enable && this.plazo > 0) {
        return true;
      } else {
        return false;
      }
    },
    percent() {
      return (this.enganche * 100) / this.currentLand.priceList;
    },
    category() {
      switch (this.currentLand.name) {
        case "basic":
          return "Común";
        case "imperial":
          return "Imperial";
        case "real":
          return "Real";
        default:
          break;
      }
    },
    discount() {
      if (this.percent < 0.15 || this.plazo == 96) {
        return 0;
      } else if (this.percent >= 15 && this.percent < 25) {
        return 0.02;
      } else if (this.percent >= 25 && this.percent < 35) {
        return 0.04;
      } else if (this.percent >= 35 && this.percent < 50) {
        return 0.07;
      } else if (this.percent >= 50 && this.percent < 90) {
        return 0.11;
      } else if (this.percent >= 90) {
        return 0.17;
      } else {
        return 0;
      }
    },
  },

  watch: {
    plazo(){
      this.calculatePriceList();
    }
  },

  methods: {
    async getGrounds() {
      try {
        const resDB = await db.collection("grounds").orderBy("category").get();
        resDB.forEach((res) => {
          //console.log(res.data())
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
      } catch (error) {
        console.log(error);
      }
    },
    hotspotClick(hotspot) {
      //console.log("Clicked hotspot", hotspot);
      this.enable = true;
      this.currentLand = {
        id: hotspot.id,
        name: hotspot.category,
        img: hotspot.img,
        price: hotspot.meterPrice,
        area: hotspot.area,
        length: hotspot.length,
        width: hotspot.width,
        access: hotspot.access,
        priceList: this.getPriceList(hotspot.meterPrice, hotspot.area),
      };
      this.maxEnganche = this.getPriceList(hotspot.meterPrice, hotspot.area) / 2;
      this.enganche = this.minEnganche = this.getEnganche(hotspot.meterPrice, hotspot.area);
      this.newPriceList = this.currentLand.priceList;
    },
    clearLand() {
      this.currentLand = {
        id: "",
        name: "",
        img: "",
        price: "",
        area: "",
        length: "",
        width: "",
        access: "",
        priceList: "",
      };
      this.enganche = this.minEnganche = this.plazo = 0;
      this.enable = false;
    },
    getPriceList(price, area) {
      return price * area;
    },
    getEnganche(price, area) {
      let value = price * area * 0.1;
      value = value.toFixed(2);
      return parseFloat(value);
    },
    formatMoney(total) {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(total);
    },
    hotspotColor(data) {
      data.forEach((item) => {
        return item.category == "basic"
          ? "#AE0030"
          : "#D0860D"
          ? item.category == "real"
          : "#406941";
      });
    },
    generateReport() {
      if (this.currentLand.id) {
        //this.$refs.html2Pdf.generatePdf();
        this.quote();
      } else {
        alert("Primero elija algún lote!");
      }
    },
    calculatePriceList(){
      this.newPriceList = this.plazo < 96 ? this.currentLand.priceList : this.currentLand.priceList * 1.025;
      console.log(this.percent.toFixed(0));
      if(this.percent.toFixed(0) <= 10){
        var aux = this.newPriceList * 0.1;
        this.enganche = parseFloat(aux.toFixed(2));
      }
    },
    quote() {
      var purchaseValue = this.currentLand.priceList - (this.currentLand.priceList * this.discount);
      var restValuePayment = purchaseValue - this.enganche;
      var monthlyPayment = restValuePayment / this.plazo;
      
      var quoteDatails = [];
      var saldoInicial = restValuePayment; 

      for (let index = 1; index <= this.plazo ; index++) {
       var date = moment().add(index, 'months').format("DD/MM/YYYY"); 

       quoteDatails.push({
         noPago: index,
         fecha: date,
         saldoInicial: saldoInicial, 
         pago: monthlyPayment,
         interes: 0.00,
         saldoFinal: saldoInicial - monthlyPayment,
       });

       saldoInicial -= monthlyPayment; 
      }
      
       console.log(
        "LOTE #",
        this.currentLand.id,
        " PRECIO DE LISTA :",
        this.formatMoney(this.currentLand.priceList),
        " PRECIO DE VENTA :", this.formatMoney(purchaseValue),
        " ENGANCHE :",
        this.formatMoney(this.enganche),
        "(",
        this.percent.toFixed(0),
        "%)", 
        " DESCUENTO :",
        this.discount,
        " FINANCIADO: ",
        this.formatMoney(restValuePayment),
        " MENSUALIDAD :",
        this.formatMoney(monthlyPayment)
      ); 
    },
  },
};
</script>

<style>
.ui__vue_hotspot {
  height: fit-content !important;
}

/* Give to children background color from 14 child to last child*/
.ui__vue_hotspot_hotspot:nth-last-child(-n + 14) {
  background-color: #d69a2c !important;
}
/* Give to children background color from 8 child to last child*/
.ui__vue_hotspot_hotspot:nth-last-child(-n + 8) {
  background-color: #4a7b55 !important;
}

.ui__vue_hotspot_hotspot.active > div {
  display: none !important;
}

.ui__vue_hotspot_buttons_box {
  display: none;
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
  height: fit-content;
}

.quote-card {
  background-color: #efdbb4;
  height: fit-content;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -2rem;
  box-shadow: 15px 8px 24px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.grounds-img {
  width: 90% !important;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 3rem;
}

.imagen {
  width: 100%;
  aspect-ratio: 1/1;
  background-color: white;
}

.title {
  font-family: "Rajdhani Bold";
  font-size: 1rem;
}

.subtitles {
  font-family: "Rajdhani Bold";
  font-size: 0.8rem;
  margin: 0;
}

.info-text {
  font-family: "Fenix Regular";
  font-size: 0.9rem;
  color: #305037;
  margin-bottom: 6px;
}

.lote-id {
  font-family: "Caxton Bold";
  font-size: 1.2rem;
  color: #bf153e;
}

.close-button {
  width: fit-content;
  cursor: pointer;
  padding: 2px;
}

.close-button > i {
  font-size: 1.1rem;
  color: #bf153e;
}

.input-monto {
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #000000;
  padding: 0.5rem;
  color: #305037;
  background: transparent;
}

.input-monto:focus,
.boton-plazos:focus {
  outline: none;
}

.input-content {
  font-family: "Fenix Regular";
  position: relative;
  margin-bottom: 0.6rem;
}

.info-warning {
  color: #bf153e;
  font-size: 0.8rem;
  line-height: 12px;
}

.input-content::after {
  content: "MXN";
  position: absolute;
  color: #305037;
  font-size: 1rem;
  top: 4px;
  right: 0;
}

.dropdown-plazos {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000000;
  color: #305037;
  background: transparent;
}

.boton-plazos {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 0;
  padding: 0.5rem;
  color: #305037 !important;
  background-color: transparent !important;
  text-align: left;
  outline: none !important;
  box-shadow: none !important;
}
.cotizar-button {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 0;
  padding: 0.5rem;
  color: #ffffff;
  background-color: #bf153e;
  font-family: "Caxton Bold";
}

.info-hotspots {
  box-sizing: border-box;
  padding: 2rem 0;
  padding-left: 28px;
}

.meses-options {
  width: 100%;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  color: #305037;
  cursor: pointer;
  background: transparent;
}

.dot {
  position: relative;
}
.dot::before {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: -24px;
}

.dot-red::before {
  background-color: #bf153e;
}
.dot-yellow::before {
  background-color: #d69a2c;
}
.dot-green::before {
  background-color: #4a7b55;
}

/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  .quote-card {
    background-color: #efdbb4;
    height: fit-content;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    box-shadow: 15px 8px 24px 8px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    top: 2rem;
  }

  .grounds-img {
    width: 100% !important;
    position: relative;
    top: 3rem;
  }
}
</style>