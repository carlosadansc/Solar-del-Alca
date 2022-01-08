<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/project">Proyecto</router-link>
    <img src="@/assets/img/logo.svg" alt="no_img" />
    <router-link to="/contact">Contacto</router-link>
    <router-link to="/buy">Cotizar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
}

#nav a {
  font-weight: normal;
  color: #000000;
  text-decoration: none;
  margin: 5px;
  padding: 0 1.1rem 0 1rem;
  font-family: var(--title-font);
}

#nav a.router-link-exact-active {
  font-family: var(--title-font-bold);
}

#nav a.router-link-exact-active:after,
a.router-link-exact-active:before {
  content: url("~@/assets/img/nav-selected-line.svg");
  vertical-align: 0.25rem;
  margin: 0 5px;
}

#nav img {
  height: 60px;
  margin: 0 3rem 20px 3rem;
  object-fit: contain;
}
</style>