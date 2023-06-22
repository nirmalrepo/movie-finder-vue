<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Search Results</h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </ul>
  </div>
</template>
  
  <script>
import MovieCard from "../molecules/MovieCard.vue";

export default {
  props: ["movies"],
  components: {
    MovieCard,
  },
};
</script>