<template>
  <div>
    <input v-model="searchTerm" type="text" placeholder="Search movies..." />
    <button @click="searchMovies">Search</button>

    <div v-if="movies.length > 0">
      <h2>Search Results</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <div>
            <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.release_date }}</p>
          </div>
        </li>
      </ul>
    </div>

    <h2>Popular Movies</h2>
    <div class="slider">
      <carousel  :items-to-show="10" :wrap-around="true">
        <slide  v-for="movie in popularMovies" :key="movie.id">
              <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
              
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
  </carousel>
</div>


    <div>
      <button :disabled="currentPage === 1" @click="previousPage">Previous</button>
      <span>{{ currentPage }}</span>
      <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components:{
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const searchTerm = ref('');
    const store = useStore();

    const movies = computed(() => store.getters.getMovies);
    const popularMovies = computed(() => store.getters.getPopularMovies);
    const currentPage = computed(() => store.getters.getCurrentPage);
    const totalPages = computed(() => store.getters.getTotalPages);

    const fetchMovies = ({ searchTerm, page }) => {
      store.dispatch('fetchMovies', { searchTerm, page });
    };

    const fetchPopularMovies = () => {
      store.dispatch('fetchPopularMovies');
    };

    const searchMovies = () => {
      fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    };

    const previousPage = () => {
      fetchMovies({ searchTerm: searchTerm.value, page: currentPage.value - 1 });
    };

    const nextPage = () => {
      fetchMovies({ searchTerm: searchTerm.value, page: currentPage.value + 1 });
    };

    const getImageUrl = (posterPath) => {
      if (!posterPath) {
        return '';
      }
      return `https://image.tmdb.org/t/p/w200/${posterPath}`;
    };

    watch(searchTerm, () => {
      fetchMovies({ searchTerm: searchTerm.value, page: 1 });
    });

    onMounted(() => {
      fetchPopularMovies();
      // fetchMovies({ searchTerm: 'Love', page: 1 });
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

<style>
/* .slider {
  display: flex;
  overflow-x: scroll;
  gap: 20px;
} */
</style>
