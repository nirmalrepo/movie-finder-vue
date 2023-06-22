<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Popular Movies</h2>
    <div class="slider">
      <Carousel :items-to-show="6" :autoplay="2000">
        <Slide v-for="movie in popularMovies" :key="movie.id">
          <poster-thumbnail :posterPath="movie.poster_path" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import PosterThumbnail from "../atoms/PosterThumbnail.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  props: ["popularMovies"],
  components: {
    Carousel,
    Slide,
    Navigation,
    PosterThumbnail
  }
};
</script>
