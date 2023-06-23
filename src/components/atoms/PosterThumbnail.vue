<template>
  <img
    v-lazy="{ src: imageUrl }"
    alt="Movie Poster"
    class="w-full cursor-pointer rounded-lg transition duration-500 hover:scale-105"
  />
</template>

<script>
import { computed } from "vue";
import { getThumbnail } from "../../services/utils";
export default {
  props: ["posterPath"],
  setup(props) {
    const imageUrl = computed(() => getThumbnail(props.posterPath));

    return {
      imageUrl,
    };
  },
};
</script>
