<template>
  <li>
    <div class="rounded-lg">
      <poster-thumbnail :posterPath="movie.poster_path" />
      <h4 class="text-md mt-2 font-medium">{{ movie.title }}</h4>
      <p class="text-xs">{{ formattedDate }}</p>
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
import PosterThumbnail from "../atoms/PosterThumbnail.vue";
import { formatDate } from "@/services/utils";

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  components: {
    PosterThumbnail,
  },
  setup(props) {
    const formattedDate = computed(() => formatDate(props.movie.release_date));

    return {
      formattedDate,
    };
  },
};
</script>
