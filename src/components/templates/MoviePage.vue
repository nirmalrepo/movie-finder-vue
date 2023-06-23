<template>
  <div class="container mx-auto">
    <div class="intro-wrapper mx-auto max-w-xl p-4">
      <div class="mb-14 flex flex-col items-center justify-center">
        <img src="@/assets/logo.jpg" alt="Logo" />
        <p class="text-l text-center text-gray-300 md:text-xl">
          Discover, Explore, and Seamlessly Search Movies
        </p>
      </div>
      <search-input
        :search-term="searchTerm"
        @search="searchMovies"
        @update:searchTerm="searchTerm = $event"
      ></search-input>
    </div>
    <div class="search-results-wrapper p-4">
      <search-results
        :movies="movies"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :hasResults="hasResults"
        @gotoPage="gotoPage"
      />
    </div>
    <div class="popular-movies-wrapper p-4">
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
    const hasResults = computed(() => store.getters.getHasResults);

    const fetchMovies = ({ searchTerm, page }) => {
      store.dispatch("fetchMovies", { searchTerm, page });
    };

    const fetchPopularMovies = () => {
      store.dispatch("fetchPopularMovies");
    };

    const searchMovies = () => {
      fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    };

    const gotoPage = (page) => {
      fetchMovies({
        searchTerm: searchTerm.value,
        page,
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
      hasResults,
      gotoPage,
    };
  },
};
</script>
