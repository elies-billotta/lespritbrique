<template>
  <RouterLink v-if="isInternal" :to="href" @click="handleScroll">
    <slot></slot>
  </RouterLink>
  <a v-else class="animate__animated animate__wobble" :href="href" target="_blank" rel="noopener">
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { defineProps, PropType } from 'vue';
import { useRouter } from 'vue-router';

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

    if (url.hostname !== window.location.hostname) {
      return false;
    }
  }
  return true;
});

const handleScroll = (event: MouseEvent) => {
  if (props.href.startsWith('#')) {
    event.preventDefault(); // Empêche la navigation par défaut

    // Sélectionner l'élément cible
    const targetElement = document.querySelector(props.href);
    if (targetElement) {
      // Récupérer la hauteur du menu
      const menuHeight = document.querySelector('.menu-banner')?.clientHeight || 0;
      
      // Utilisation de scrollIntoView pour le défilement doux
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end', // Aligne le début de l'élément au début de la fenêtre
      });
      
      // Ajuster la position avec window.scrollBy pour compenser la hauteur du menu
      window.setTimeout(() => {
        window.scrollBy(0, -menuHeight); // Défilement supplémentaire pour compenser la hauteur du menu
      }, 500);  // Attendez un peu pour que le scrollIntoView termine son animation
    }
  }
};
</script>
