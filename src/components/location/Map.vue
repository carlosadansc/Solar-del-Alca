<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "Map",
  data: () => ({
    map: null,
    center: {
      lat: 24.081958,
      lng: -110.3462377,
    },
  }),

  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibGFseWxheiIsImEiOiJja2t0MGM4cW8wcXptMnBxbW5hc3gzZXFxIn0.e2-jBMfsS1hA2_E0f4E6lA";

      this.map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/lalylaz/cksq3jc7k1b5a18ptknt1jvn4", //hosted style id
        center: [this.center.lng, this.center.lat], // starting position
        zoom: 13, // starting zoom
        interactive: false,
      });

      // add markers to map
      this.map.on("load", () => {
        // create a DOM element for the marker
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundSize = "contain";
        el.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/solardelalca-bb049.appspot.com/o/map-pin.svg?alt=media&token=a0745dd1-06d9-4faf-80af-a1389721f4a7)";
        el.style.width = "30px";
        el.style.height = "30px";

        var popup = new mapboxgl.Popup({ offset: 25 });

        el.addEventListener("click", () => {});
        // add marker to map
        new mapboxgl.Marker(el)
          .setLngLat([this.center.lng, this.center.lat])
          .addTo(this.map);

        // add navigation controls
        this.map.addControl(new mapboxgl.NavigationControl());
      });
    },
  },
};
</script>

<style>
#map {
  height: 384px;
  width: 100%;
  background-color: var(--background-secondary-color);
}

.marker:after {
    display: inline-block;
    content: "SOLAR DEL ALCA";
    margin-left: 40px;
    margin-top: 5px;
    vertical-align: center;
    width:  14rem;
    color: var(--red-pitahaya);
    font-family: var(--title-font-bold);
    font-size: 1rem;
}   
</style>