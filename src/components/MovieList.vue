<template>
  <vue-progress-bar :value="100"></vue-progress-bar>
  <div class="text-white max-w-screen-xl mx-auto">
    <div class="p-4 max-w-screen-sm mx-auto">
      <div class="relative">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search movies..."
          class="w-full p-2 rounded-l-lg"
        />
        <button
          @click="searchMovies"
          class="absolute top-0 right-0 h-full px-4 rounded-r-lg bg-blue-500 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
    <div class="p-4">
      <div v-if="movies.length > 0">
        <h2 class="text-2xl font-bold mb-4">Search Results</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <li v-for="movie in movies" :key="movie.id">
            <div
              class="rounded-lg p-2 bg-gray-800 flex flex-col justify-between h-full"
            >
              <img
                :src="getImageUrl(movie.poster_path)"
                alt="Movie Poster"
                class="rounded-lg w-full"
              />
              <h3 class="text-lg font-bold mt-2">{{ movie.title }}</h3>
              <p class="mt-1">{{ movie.release_date }}</p>
            </div>
          </li>
        </ul>
      </div>
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
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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

    watch(searchTerm, () => {
      fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    });

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
