<template>
  <div class="landing-page">
    <Nav v-if="!preview"/>
    <Home v-if="!preview"/>
    <Concept v-if="!preview"/>
    <Project v-if="!preview"/>
    <Location v-if="!preview"/>
    <LaPaz v-if="!preview"/>
    <Galery v-if="!preview"/>
    <Team v-if="!preview"/>
    <Land v-if="!preview"/>
    <Quote v-if="!preview"/>
    <Footer v-if="!preview"/>
    <Preview v-if="preview"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav2.vue"
import Home from "@/components/Home.vue"
import Concept from "@/components/Concept.vue"
import Project from "@/components/Project.vue"
import Location from "@/components/Location.vue"
import LaPaz from "@/components/LaPaz.vue"
import Galery from "@/components/Galery.vue"
import Team from "@/components/Team.vue"
import Land from "@/components/Land.vue"
import Quote from "@/components/Quote.vue"
import Footer from "@/components/Footer.vue"
import Preview from "@/components/Preview.vue"

export default {
  name: "Landing",
  components: {
    Nav,
    Home,
    Concept,
    Project,
    Location,
    LaPaz, 
    Galery,
    Team,
    Land,
    Quote,
    Footer,
    Preview
  },
  data: () => ({
    preview: false,
  }),
};
</script>

<style scoped>
  
</style>
