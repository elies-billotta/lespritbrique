<template>
  <div 
    class="inline" 
    :class="{ 'has-image': containsImage }" 
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave" 
    @click="handleClick" 
    v-bind="$attrs"
  >
    <RouterLink v-if="isInternal && !copyOnClick" :to="href" @click="handleScroll">
      <slot></slot>
    </RouterLink>
    <a v-else-if="!isInternal && !copyOnClick" :href="href" target="_blank" rel="noopener">
      <slot></slot>
    </a>
    <span v-else>
      <slot></slot>
    </span>
    <img v-if="anim && isAnchor" src="@/assets/icons/hashtag.svg" class="icon" alt="anchor link" />
    <img v-else-if="anim && !isInternal" src="@/assets/icons/external-link.svg" class="icon" alt="external link" />
    <img v-else-if="anim && isInternal" src="@/assets/icons/internal-link.svg" class="icon" alt="internal link" />
  </div>
  <NotificationPopup v-if="showNotification" :message="notificationMessage" :type="notificationType" />
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { defineProps, useAttrs, PropType } from 'vue';
import NotificationPopup from '@/components/elements/NotificationPopup.vue';
import { useClipboard } from '@vueuse/core';
import 'animate.css';

const { copy } = useClipboard();
const attrs = useAttrs(); // Récupère les attributs non-props

const props = defineProps({
  href: {
    type: String as PropType<string>,
    required: true,
  },
  anim: {
    type: Boolean,
    default: true,
  },
  copyOnClick: {
    type: Boolean,
    default: false,
  },
});

const containsImage = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('info');

onMounted(() => {
  const slotElement = document.querySelector('.inline > *:first-child');
  if (slotElement?.querySelector('img')) {
    containsImage.value = true;
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

const isAnchor = computed(() => props.href.startsWith('#'));

const handleMouseEnter = (event: MouseEvent) => {
  if (props.anim) {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('animate__animated', 'animate__swing');
    void target.offsetWidth;
    target.classList.add('animate__animated', 'animate__swing');
  }
};

const handleMouseLeave = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  target.addEventListener('animationend', () => {
    target.classList.remove('animate__animated', 'animate__swing');
  }, { once: true });
};

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

const handleClick = (event: MouseEvent) => {
  if (props.copyOnClick) {
    event.preventDefault();
    copy(props.href).then(() => {
      notificationMessage.value = `${props.href} copié dans le presse-papier`;
      notificationType.value = 'success';
      showNotification.value = true;
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    }).catch(() => {
      notificationMessage.value = 'Échec de la copie';
      notificationType.value = 'error';
      showNotification.value = true;
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    });
  }
};
</script>

<style scoped>
.inline {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icon {
  width: 1.5rem;
  height: auto;
}

a,
.router-link, span {
  text-decoration: underline;
  font-weight: bold;
  color: var(--black);
}

a,
.router-link, span {
  pointer-events: auto;
}

.inline.has-image a,
.inline.has-image .router-link {
  line-height: 0;
}
</style>
