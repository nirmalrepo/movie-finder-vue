<template>
  <vue-progress-bar :value="value"></vue-progress-bar>
</template>

<script>
import VueProgressBar from "vue-progressbar";

export default {
  props: ["value"],
  components: {
    VueProgressBar,
  },
};
</script>
