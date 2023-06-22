<template>
  <div class="text-white max-w-screen-xl mx-auto">
    <div class="p-4 max-w-xl mx-auto">
      <img src="@/assets/logo.jpg" alt="Logo" class="max-w-xs mx-auto" />
      <search-input
        :search-term="searchTerm"
        @search="searchMovies"
        @update:searchTerm="searchTerm = $event"
      ></search-input>
    </div>
    <div class="p-4">
      <search-results :movies="movies" v-if="movies.length > 0" />
      <div v-if="movies.length > 0" class="flex justify-center mx-auto max-w-md">
        <Button :disabled="currentPage === 1" @click="previousPage">
          Previous
        </Button>
        <span class="px-4">{{ currentPage }}</span>
        <Button :disabled="currentPage === totalPages" @click="nextPage">
          Next
        </Button>
      </div>
      <div v-else class="flex justify-center mx-auto max-w-md">
        <p class="text-center text-gray-400" v-if="!hasResults">No results found.</p>
      </div>
    </div>
    <div class="p-4">
      <popular-movies :popular-movies="popularMovies" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import SearchInput from "../molecules/SearchInput.vue";
import SearchResults from "../organisms/SearchResults.vue";
import PopularMovies from "../organisms/PopularMovies.vue";
import Button from "../atoms/Button.vue";

export default {
  components: {
    SearchInput,
    SearchResults,
    PopularMovies,
    Button,
  },
  setup() {
    const searchTerm = ref("");
    const store = useStore();

    const movies = computed(() => store.getters.getMovies);
    const popularMovies = computed(() => store.getters.getPopularMovies);
    const currentPage = computed(() => store.getters.getCurrentPage);
    const totalPages = computed(() => store.getters.getTotalPages);
    const hasResults = computed(() => store.state.hasResults);

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
    onMounted(() => {
      fetchPopularMovies();
    });
    
    watch(searchTerm, () => {
        fetchMovies({ searchTerm: searchTerm.value, page: 1 });
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
      hasResults,
    };
  },
};
</script>
