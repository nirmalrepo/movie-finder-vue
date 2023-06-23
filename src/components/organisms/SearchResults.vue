<template>
  <div v-if="movies.length > 0">
    <div>
      <h2 class="text-3xl text-gold font-bold mb-4">Search Results</h2>
      <transition-group
        name="fade-in"
        tag="ul"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </transition-group>
    </div>
    <div class="flex justify-center mx-auto max-w-md pt-2">
      <Button :disabled="currentPage === 1" @click="gotoPrevPage">
        Previous
      </Button>
      <span class="px-4">{{ currentPage }}</span>
      <Button :disabled="currentPage === totalPages" @click="gotoNextPage">
        Next
      </Button>
    </div>
  </div>

  <div v-else class="flex justify-center mx-auto max-w-md">
    <p class="text-center text-gray-400" v-if="!hasResults">
      No results found.
    </p>
  </div>
</template>
  
  <script>
import MovieCard from "../molecules/MovieCard.vue";
import Button from "../atoms/Button.vue";
export default {
  props: ["movies", "currentPage", "totalPages", "hasResults"],
  emits: ["previousPage", "nextPage"],
  components: {
    MovieCard,
    Button,
  },
  setup(props, { emit }) {
    const gotoNextPage = () => {
      emit("nextPage");
    };
    const gotoPrevPage = () => {
      emit("previousPage");
    };
    return {
      gotoNextPage,
      gotoPrevPage,
    };
  },
};
</script>
