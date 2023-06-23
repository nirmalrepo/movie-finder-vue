<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <MoviePage />
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import MoviePage from "./components/templates/MoviePage.vue";

export default {
  components: {
    MoviePage,
  },
  setup() {
    const internalInstance = getCurrentInstance();
    internalInstance.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
    }, 2000);
  },
};
</script>

