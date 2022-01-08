<template>
  <div id="app">
    <!-- <Nav2 v-if="!preview"/> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav2.vue"

export default {
  components:{
    Nav
  },
  data: () => ({
    preview: false,
  }),
}
</script>

<style>
@import url('~@/assets/style/normalize.css');
@import url('~@/assets/style/main.css');
</style>
