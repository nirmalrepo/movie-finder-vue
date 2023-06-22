<template>
    <button
      :class="[
        'px-4 w-1/3 py-2 rounded-3xl cursor-pointer',
        backgroundColor,
        hoverBackgroundColor,
        textColor,
        hoverTextColor
      ]"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      backgroundColor: {
        type: String,
        default: 'bg-gold',
      },
      hoverBackgroundColor: {
        type: String,
        default: 'hover:bg-gold-hover',
      },
      textColor: {
        type: String,
        default: 'text-white',
      },
      hoverTextColor: {
        type: String,
        default: '',
      },
    },
    setup(props, { emit }) {
      const handleClick = () => {
        emit('click');
      };
  
      return {
        handleClick,
      };
    },
  };
  </script>
  