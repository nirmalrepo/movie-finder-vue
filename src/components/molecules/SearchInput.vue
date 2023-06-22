<template>
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
</template>
  
  <script>
import { ref, watch } from "vue";

export default {
  props: ["searchTerm"],
  emits: ["search", "update:searchTerm"],
  setup(props, { emit }) {
    const searchTerm = ref(props.searchTerm);

    const searchMovies = () => {
      emit("search");
    };

    watch(searchTerm, (newValue) => {
      emit("update:searchTerm", newValue);
    });

    return {
      searchTerm,
      searchMovies,
    };
  },
};
</script>
  