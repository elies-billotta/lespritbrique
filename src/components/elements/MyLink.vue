<template>
  <div class="inline" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <RouterLink v-if="isInternal" :to="href" @click="handleScroll">
      <slot></slot>
    </RouterLink>
    <a v-else :href="href" target="_blank" rel="noopener">
      <slot></slot>
    </a>
    <!-- Affichage de l'icône en fonction du type de lien -->
    <img v-if="anim && isAnchor" src="@/assets/icons/hashtag.svg" class="icon" alt="anchor link" />
    <img v-else-if="anim && !isInternal" src="@/assets/icons/external-link.svg" class="icon" alt="external link" />
    <img v-else-if="anim && isInternal" src="@/assets/icons/internal-link.svg" class="icon" alt="internal link" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { defineProps, PropType } from 'vue';
import 'animate.css';

const handleMouseEnter = (event: MouseEvent) => {
  if (props.anim) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('animate__animated', 'animate__swing');
  }
};

const handleMouseLeave = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  target.addEventListener('animationend', () => {
    target.classList.remove('animate__animated', 'animate__swing');
  }, { once: true });
};

const props = defineProps({
  href: {
    type: String as PropType<string>,
    required: true,
  },
  anim: {
    type: Boolean,
    default: true,
  },
});

// Vérifie si le lien est interne (autre page du site)
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

// Vérifie si le lien est une ancre (commence par #)
const isAnchor = computed(() => props.href.startsWith('#'));

// Gère le comportement du scroll pour les liens internes
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
  }
  if (props.href.startsWith('/')) {
    if (isInternal.value) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
};
</script>

<style scoped>
.inline {
  display: flex;
  align-items: center;
}

.icon {
  width: 1.5rem;
  height: auto;
}

a,
.router-link {
  text-decoration: underline;
  font-weight: bold;
  color: var(--black);
}

a,
.router-link {
  pointer-events: auto;
}
</style>
