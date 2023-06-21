import { createStore } from 'vuex';
import { fetchPopularMovies, searchMovies } from '../services/movieServices';

export default createStore({
  state: {
    movies: [],
    popularMovies: [],
    currentPage: 1,
    totalPages: 0,
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies;
    },
    SET_TOTAL_PAGES(state, totalPages) {
      state.totalPages = totalPages;
    },
    SET_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
  },
  actions: {
    async fetchPopularMovies({ commit }) {
      try {
        const { results, total_pages } = await fetchPopularMovies();
        commit('SET_POPULAR_MOVIES', results);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMovies({ commit }, { searchTerm, page }) {
      try {
        const { results, total_pages } = await searchMovies(searchTerm, page);
        commit('SET_MOVIES', results);
        commit('SET_TOTAL_PAGES', total_pages);
        commit('SET_CURRENT_PAGE', page);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getMovies: (state) => state.movies,
    getPopularMovies: (state) => state.popularMovies,
    getTotalPages: (state) => state.totalPages,
    getCurrentPage: (state) => state.currentPage,
  },
});
