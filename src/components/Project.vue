<template>
  <div id="project" class="project">
    <div class="container">
      <hr class="divider-line" />
      <p class="subheader-label mb-5">
        <span class="header-label">PROYECTO / </span>TODO LO QUE NECESITAS SABER
      </p>
      <div class="row">
        <div class="col col-12 col-md-6 pt-0 pt-md-5">
          <Tab />
        </div>
        <div class="col col-12 col-md-6">
          <img src="@/assets/img/project-img.jpg" alt="no_img" />
        </div>
      </div>
    </div>
    <div class="phrase-container">
      <p class="text-center">
        “Un hogar no es un edificio, ni una calle ni una ciudad; no tiene nada
        que ver con cosas tan materiales como los ladrillos y el cemento. Un
        hogar es donde está tu familia.”
        <span class="author-label">- John Boyne</span>
      </p>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/project/Tab.vue";
export default {
  name: "Project",
  components: {
    Tab,
  },
};
</script>

<style>
.project {
  background-color: var(--background-color);
  padding-top: 50px;
}

.project img {
  width: 90%;
  float: right;
}

@media screen and (max-width: 768px) {

  .project img {
    width: 100% !important;
    margin-top: 2rem;
  }
}
</style>