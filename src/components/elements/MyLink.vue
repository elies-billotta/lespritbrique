<template>
  <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <RouterLink v-if="isInternal" :to="href" @click="handleScroll">
      <slot></slot>
    </RouterLink>
    <a v-else :href="href" target="_blank" rel="noopener">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { defineProps, PropType } from 'vue';

import 'animate.css';

const handleMouseEnter = (event: MouseEvent) => {
  if (!props.anim) return;
  const target = event.currentTarget as HTMLElement;
  target.classList.add('animate__animated', 'animate__swing');
};

const handleMouseLeave = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  target.classList.remove('animate__animated', 'animate__swing');
};

const props = defineProps({
  href: {
    type: String as PropType<string>,
    required: true,
  },
  anim: {
    type: Boolean,
    default: true,
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

    if (url.hostname !== window.location.hostname) {
      return false;
    }
  }
  return true;
});

const handleScroll = (event: MouseEvent) => {
  if (props.href.startsWith('#')) {
    event.preventDefault();

    const targetElement = document.querySelector(props.href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };
};

</script>
