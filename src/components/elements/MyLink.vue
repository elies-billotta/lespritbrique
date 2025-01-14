<template>
    <RouterLink v-if="isInternal" :to="href">
      <slot></slot>
    </RouterLink>
    <a v-else class="animate__animated animate__wobble":href="href" target="_blank" rel="noopener">
      <slot></slot>
    </a>
  </template>
  
  <script lang="ts" setup>
  import { computed, type PropType } from 'vue';
  import 'animate.css';
  
  const props = defineProps({
    href: {
      type: String as PropType<string>,
      required: true,
    }
  });
  
  const isInternal = computed((): boolean => {
    if (props.href.startsWith('http')) {
      let url = null;
      try {
        url = new URL(props.href);
      } catch (err) {
        return false;
      }
  
      if (url.hostname != window.location.hostname) {
        return false;
      }
    }
  
    return true;
  });
  </script>