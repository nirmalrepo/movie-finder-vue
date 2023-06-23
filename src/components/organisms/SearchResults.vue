<template>
  <div class="section-search-reults" v-if="movies.length > 0">
    <div class="row-search-results">
      <h2 class="mb-4 text-2xl font-medium text-gold">Search Results</h2>
      <transition-group
        name="fade-in"
        tag="ul"
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </transition-group>
    </div>
    <div class="row-pagination mx-auto max-w-sm pt-4">
      <vue-awesome-paginate
        :total-items="totalPages"
        :items-per-page="20"
        :max-pages-shown="4"
        v-model="page"
        :on-click="gotoPage"
        :hide-prev-next-when-ends="true"
      />
    </div>
  </div>
  <div v-else class="row-no-results mx-auto max-w-md">
    <p class="text-center" v-if="!hasResults">No results found.</p>
  </div>
</template>

<script>
import { computed } from "vue";
import MovieCard from "../molecules/MovieCard.vue";

export default {
  props: ["movies", "currentPage", "totalPages", "hasResults"],
  emits: ["gotoPage"],
  components: {
    MovieCard,
  },
  setup(props, { emit }) {
    const page = computed(() => props.currentPage);
    const gotoPage = (page) => {
      emit("gotoPage", page);
    };
    return {
      gotoPage,
      page,
    };
  },
};
</script>

<style>
.pagination-container {
  @apply mx-auto flex w-full justify-center gap-1 md:gap-2;
}

.paginate-buttons {
  @apply h-10 w-10 cursor-pointer rounded-full border-2 border-gold text-gold;
}

.paginate-buttons:hover {
  @apply bg-gold-hover text-white;
}

.active-page {
  @apply border-gold bg-gold text-white;
}
</style>
