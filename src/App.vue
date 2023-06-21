<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Movie App</h1>
    <MovieList />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue';

export default {
  components: {
    MovieList,
  },
};
</script>

<style>
/* Add your custom styles here if needed */
</style>
