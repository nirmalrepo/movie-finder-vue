<template>
  <img :src="imageUrl" alt="Movie Poster" class="rounded-lg w-full" />
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["posterPath"],
  setup(props) {
    const imageUrl = computed(() => {
      if (!props.posterPath) {
        return "";
      }
      return `https://image.tmdb.org/t/p/w200/${props.posterPath}`;
    });

    return {
      imageUrl,
    };
  },
};
</script>
