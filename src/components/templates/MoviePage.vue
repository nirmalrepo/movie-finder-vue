<template>
  <div class="text-white max-w-screen-xl mx-auto">
    <div class="p-4 max-w-screen-sm mx-auto">
      <search-input
        :search-term="searchTerm"
        @search="searchMovies"
        @update:searchTerm="searchTerm = $event"
      ></search-input>
    </div>
    <div class="p-4">
      <search-results :movies="movies" v-if="movies.length > 0" />
      <div class="flex justify-center mt-4">
        <button
          :disabled="currentPage === 1"
          @click="previousPage"
          class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
        >
          Previous
        </button>
        <span class="px-4">{{ currentPage }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
    <div class="p-4">
      <popular-movies :popular-movies="popularMovies" />
    </div>
  </div>
</template>
  
  <script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import SearchInput from "../molecules/SearchInput.vue";
import SearchResults from "../organisms/SearchResults.vue";
import PopularMovies from "../organisms/PopularMovies.vue";

export default {
  components: {
    SearchInput,
    SearchResults,
    PopularMovies,
  },
  setup() {
    const searchTerm = ref("");
    const store = useStore();

    const movies = computed(() => store.getters.getMovies);
    const popularMovies = computed(() => store.getters.getPopularMovies);
    const currentPage = computed(() => store.getters.getCurrentPage);
    const totalPages = computed(() => store.getters.getTotalPages);

    const fetchMovies = ({ searchTerm, page }) => {
      store.dispatch("fetchMovies", { searchTerm, page });
    };

    const fetchPopularMovies = () => {
      store.dispatch("fetchPopularMovies");
    };

    const searchMovies = () => {
      console.log(searchTerm.value);
      fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    };

    const previousPage = () => {
      fetchMovies({
        searchTerm: searchTerm.value,
        page: currentPage.value - 1,
      });
    };

    const nextPage = () => {
      fetchMovies({
        searchTerm: searchTerm.value,
        page: currentPage.value + 1,
      });
    };

    const getImageUrl = (posterPath) => {
      if (!posterPath) {
        return "";
      }
      return `https://image.tmdb.org/t/p/w200/${posterPath}`;
    };

    // watch(searchTerm, () => {
    //   fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    // });

    onMounted(() => {
      fetchPopularMovies();
    });

    return {
      searchTerm,
      movies,
      popularMovies,
      currentPage,
      totalPages,
      searchMovies,
      previousPage,
      nextPage,
      getImageUrl,
    };
  },
};
</script>
  