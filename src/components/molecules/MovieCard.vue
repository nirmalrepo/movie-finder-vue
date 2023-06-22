<template>
  <li>
    <div
      class="rounded-lg p-2 bg-gray-800 flex flex-col justify-between h-full"
    >
      <img
        v-lazy="{ src: getImageUrl }"
        alt="Movie Poster"
        class="rounded-lg w-full"
      />
      <h3 class="text-lg font-bold mt-2">{{ movie.title }}</h3>
      <p class="mt-1">{{ movie.release_date }}</p>
    </div>
  </li>
</template>
  
  
  <script>
import { computed } from "vue";
export default {
  props: ["movie"],
  setup(props) {
    const getImageUrl = computed(() => {
      if (!props.movie.poster_path) {
        return "";
      }
      return `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`;
    });

    return {
      getImageUrl,
    };
  },
};
</script>
  