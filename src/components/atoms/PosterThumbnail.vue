<template>
  <img
    v-lazy="{ src: imageUrl }"
    alt="Movie Poster"
    class="rounded-lg w-full hover:scale-105 transition duration-500 cursor-pointer"
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
