<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Popular Movies</h2>
    <div class="slider">
      <Carousel :items-to-show="6" :autoplay="2000">
        <Slide v-for="movie in popularMovies" :key="movie.id">
          <img
            :src="getImageUrl(movie.poster_path)"
            alt="Movie Poster"
            class="rounded-lg w-full"
          />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
  <script>
import { ref, computed } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  props: ["popularMovies"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup(props) {
    const getImageUrl = (posterPath) => {
      if (!posterPath) {
        return "";
      }
      return `https://image.tmdb.org/t/p/w200/${posterPath}`;
    };

    return {
      getImageUrl,
    };
  },
};
</script>
  