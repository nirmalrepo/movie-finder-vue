<template>
  <div>
    <h2 class="text-3xl font-bold mb-4">Search Results</h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
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