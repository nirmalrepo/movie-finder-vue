<template>
  <div class="flex flex-row">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search movies..."
      class="px-4 py-2 w-2/3 rounded-3xl mr-2 bg-transparent border-2 border-gold"
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
  