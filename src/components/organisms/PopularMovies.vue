<template>
  <div>
    <h2 class="text-3xl text-gold font-bold mb-4">Popular Movies</h2>
    <div class="slider">
      <Carousel
        :items-to-show="6"
        :autoplay="2000"
        wrapAround
        v-bind="settings"
        :breakpoints="breakpoints"
      >
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
import "vue3-carousel/dist/carousel.css";
export default {
  props: ["popularMovies"],
  components: {
    Carousel,
    Slide,
    Navigation,
    PosterThumbnail,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      350: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
      700: {
        itemsToShow: 4.5,
        snapAlign: "center",
      },

      1024: {
        itemsToShow: 6,
        snapAlign: "start",
      },
    },
  }),
};
</script>
