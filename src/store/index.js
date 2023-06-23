import { createStore } from 'vuex';
import { fetchPopularMovies, searchMovies } from '../services/movieServices';

export default createStore({
  state: {
    movies: [],
    popularMovies: [],
    currentPage: 1,
    totalPages: 0,
    hasResults: true,
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
    SET_HAS_RESULTS(state, hasResults) {
      state.hasResults = hasResults;
    },
  },
  actions: {
    async fetchPopularMovies({ commit }) {
      try {
        const { results } = await fetchPopularMovies();
        commit('SET_POPULAR_MOVIES', results);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMovies({ commit, state }, { searchTerm, page }) {
      try {
        const { results, total_pages } = await searchMovies(searchTerm, page);
        commit('SET_MOVIES', results);
        commit('SET_TOTAL_PAGES', total_pages);
        commit('SET_CURRENT_PAGE', page);

        if (results.length === 0 && page === 1) {
          commit('SET_HAS_RESULTS', false);
        } else {
          commit('SET_HAS_RESULTS', true);
        }
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
    getHasResults: (state) => state.hasResults,
  },
});
