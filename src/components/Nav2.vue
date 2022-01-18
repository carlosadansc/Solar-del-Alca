<template>
  <nav>
    <!-- <a class="mv" href="index.html">
      <img class="logo" src="@/assets/img/logo.svg" alt />
    </a> -->
    <ul :class="showMenu ? 'nav-links nav-active' : 'nav-links'">
      <li>
        <a href="/#home" :class="active == 1 ? 'active' : ''" @click="setActive(1)"
          >Inicio</a
        >
      </li>
      <li>
        <a href="/#project" :class="active == 2 ? 'active' : ''" @click="setActive(2)"
          >Proyecto</a
        >
      </li>
      <li class="dv">
        <a class="logo" href="/#home">
          <img class="logo" src="@/assets/img/logo.svg" alt />
        </a>
      </li>
      <li>
        <a href="https://m.me/solardelalca.mx" target="_blank" :class="active == 3 ? 'active' : ''" @click="setActive(3)"
          >Contacto</a
        >
      </li>
      <li>
        <a href="/#quote" :class="active == 4 ? 'active' : ''" @click="setActive(4)"
          >Cotizar</a
        >
      </li>
    </ul>
    <div
      class="burger"
      :class="showMenu ? 'burger toggle' : 'burger'"
      @click="toggleMenu"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    active: 0,
  }),

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      
      //Disable scroll
     /*  if (document.body.style.overflow == "hidden") {
        document.body.style.overflow = "visible";
      } else {
        document.body.style.overflow = "hidden";
      } */
    },
    setActive(a) {
      this.active = a;
      this.showMenu = false;
    },
  },
};
</script>

<style lang="css">
nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 8vh;
  transition: all 0.5s ease-out;
  padding: 50px 50px 0 50px;
}

.nav-up {
  top: -100px;
}

.logo img {
  height: 60px;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 0;
}

.nav-links a {
  font-weight: normal;
  color: var(--text-color);
  font-family: var(--title-font);
}

.nav-links a.active {
  font-family: var(--title-font-bold);
}

.nav-links a.active:after,
a.active:before {
  content: url("~@/assets/img/nav-selected-line.svg");
  vertical-align: 0.25rem;
  margin: 0 5px;
}

.nav-links li {
  list-style: none;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  margin: 5px;
  background: var(--text-color);
}

/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    padding: 30px 35px 0 35px;
    justify-content: end;
    z-index: 1;
  }

  .nav-links {
    background-color: var(--background-color);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    opacity: 0;
    padding: 50px 0;
    visibility: hidden;
    transition: visibility 0.5s, opacity 0.5s ease-in;
  }

  .nav-links a.active:after,
  a.active:before {
    content: url("~@/assets/img/nav-selected-line.svg");
    vertical-align: 0.50rem;
    margin: 0 5px;
  }

  .nav-links li {
    padding: 40px 0;
  }

  .nav-links li a {
    font-size: 2rem;
  }

  .burger {
    display: block;
  }
}

.nav-active {
  opacity: 1;
  visibility: visible;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>