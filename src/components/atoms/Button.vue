<template>
  <button
    :class="[
      'w-1/3 cursor-pointer rounded-3xl px-4 py-2',
      backgroundColor,
      hoverBackgroundColor,
      textColor,
      hoverTextColor,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "bg-gold",
    },
    hoverBackgroundColor: {
      type: String,
      default: "hover:bg-gold-hover",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    hoverTextColor: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    return {
      handleClick,
    };
  },
};
</script>
