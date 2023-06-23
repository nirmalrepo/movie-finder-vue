<template>
  <div class="row-movie-search flex flex-row">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search movies..."
      class="mr-2 w-2/3 rounded-3xl border-2 border-gold bg-transparent px-4 py-2"
    />
    <Button @click="searchMovies"> Search </Button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Button from "../atoms/Button.vue";

export default {
  props: ["searchTerm"],
  emits: ["search", "update:searchTerm"],
  components: {
    Button,
  },
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
