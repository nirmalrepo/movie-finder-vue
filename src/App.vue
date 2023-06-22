<!-- src/App.vue -->
<template>
  <div id="app" class="bg-black">
    <vue-progress-bar></vue-progress-bar>
    <h1>Movie App</h1>
    <MoviePage />
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import MovieList from "./components/MovieList.vue";
import MoviePage from "./components/templates/MoviePage.vue";

export default {
  components: {
    MovieList,
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

<style>
/* Add your custom styles here if needed */
</style>
