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
      <search-results
        :movies="movies"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :hasResults="hasResults"
        @gotoPage="gotoPage"
      />
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
      console.log(searchTerm.value);
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
