<template>
  <div>
    <transition name="fade" @before-enter="beforeEnterOverlay" @enter="enterOverlay" @leave="leaveOverlay">
      <div v-if="showOverlay" class="overlay" @click="closeDrawer"></div>
    </transition>
    <transition name="slide" @before-enter="beforeEnterDrawer" @enter="enterDrawer" @leave="leaveDrawer">
      <div v-if="isDrawerOpen" class="drawer">
        <div class="drawer-top">
          <div class="menu-button" @click="closeDrawer">
            <i class="fa-solid fa-xmark fa-2xl"></i>
          </div>
        </div>
        <div class="drawer-content">
          <div class="logo-container">
            <MyLink href="/" @click="closeDrawer"><img src="@/assets/images/logo-color.png" alt="Image"
                class="logo-image"></MyLink>
          </div>
          <div class="button-container" @click="closeDrawer">
            <MyLink v-for="(section, index) in sections" :href="getUrl(section)" :key="index" class="drawer-button">
              {{ section }}
            </MyLink>
          </div>
        </div>
        <div class="bottom-drawer">
          <div class="buttons">
            <IconButton id="activeShader" :icon2="TVDisabled" :icon1="TV" @click="toggleShader" />
            <MusicPlayer v-if="!isMobile" :isPlaying="isPlaying" :volume="volume" :currentMusic="currentMusic"
              @toggle-music="$emit('toggle-music')" @update-volume="$emit('update-volume', $event)" />
          </div>
          <a class="drawer-text">Mentions légales</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import MusicPlayer from '@/components/elements/MusicPlayer.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import TV from '@/assets/icons/tv.png';
import TVDisabled from '@/assets/icons/tv-disabled.png';
import MyLink from './MyLink.vue';

const props = defineProps({
  isDrawerOpen: Boolean,
  sections: Array,
  isPlaying: Boolean,
  volume: Number,
  currentMusic: String,
});

const emit = defineEmits(['close-drawer', 'toggle-music', 'update-volume', 'toggle-shader']);
const showOverlay = ref(false);
const startX = ref(0);
const isDragging = ref(false);
const isMobile = ref(false);

const handleTouchStart = (event) => {
  startX.value = event.touches ? event.touches[0].clientX : event.clientX;
  isDragging.value = true;
};

const handleTouchMove = (event) => {
  if (!isDragging.value) return;

  const currentX = event.touches ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX.value;

  if (deltaX > 200 && props.isDrawerOpen) {
    closeDrawer();
    isDragging.value = false;
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
};

const addTouchAndMouseEvents = () => {
  const drawer = document.querySelector('.drawer');

  if (drawer) {
    drawer.addEventListener('touchstart', handleTouchStart);
    drawer.addEventListener('touchmove', handleTouchMove);
    drawer.addEventListener('touchend', handleTouchEnd);
    drawer.addEventListener('mousedown', handleTouchStart);
    drawer.addEventListener('mousemove', handleTouchMove);
    drawer.addEventListener('mouseup', handleTouchEnd);
  }
};

const removeTouchAndMouseEvents = () => {
  const drawer = document.querySelector('.drawer');

  if (drawer) {
    drawer.removeEventListener('touchstart', handleTouchStart);
    drawer.removeEventListener('touchmove', handleTouchMove);
    drawer.removeEventListener('touchend', handleTouchEnd);
    drawer.removeEventListener('mousedown', handleTouchStart);
    drawer.removeEventListener('mousemove', handleTouchMove);
    drawer.removeEventListener('mouseup', handleTouchEnd);
  }
};

watch(() => props.isDrawerOpen, async (newVal) => {
  if (newVal) {
    showOverlay.value = true;
    await nextTick();
    addTouchAndMouseEvents();
  } else {
    setTimeout(() => {
      showOverlay.value = false;
    }, 0);
    removeTouchAndMouseEvents();
  }
}, { immediate: true });

const closeDrawer = () => {
  emit('close-drawer');
};

const beforeEnterOverlay = (el) => {
  el.style.opacity = 0;
};

const enterOverlay = (el, done) => {
  el.offsetHeight;
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 1;
  done();
};

const leaveOverlay = (el, done) => {
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 0;
  el.addEventListener('transitionend', done, { once: true });
};

const beforeEnterDrawer = (el) => {
  el.style.transform = 'translateX(100%)';
};

const enterDrawer = (el, done) => {
  el.offsetHeight;
  el.style.transition = 'transform 0.3s ease';
  el.style.transform = 'translateX(0)';
  done();
};

const leaveDrawer = (el, done) => {
  el.style.transition = 'transform 0.3s ease';
  el.style.transform = 'translateX(100%)';
  el.addEventListener('transitionend', done, { once: true });
};

const toggleShader = () => {
  emit('toggle-shader');
};

const handleKeyDown = (event) => {
  if (event.key === 'Escape' && props.isDrawerOpen) {
    closeDrawer();
  }
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', checkMobile);
  checkMobile();
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('resize', checkMobile);
  removeTouchAndMouseEvents();
});

function getUrl(section) {
  const urlMap = {
    'A PROPOS': '/about',
    'BOUTIQUE': 'https://shop.lespritbrique.com',
    'CONTACT': '/contact',
    'RÉALISATIONS': '/realisations',
  };

  return urlMap[section] || '#';
}
</script>

<style scoped>
a,
a::after {
  all: unset;
}

img:hover {
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9997;
  opacity: 0;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: var(--primary-color);
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  z-index: 9998;
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--black);
}

.drawer-button {
  font-family: 'Super Carnival', sans-serif;
  font-size: 1.5rem;
  width: 100%;
  padding: 15px;
  text-align: left;
  background-color: var(--primary-color);
  color: var(--black);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-top: 1px solid var(--black);
}

.drawer-button:hover {
  background-color: var(--secondary-color);
}

.bottom-drawer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.drawer-text {
  font-size: 16px;
}

.drawer-text:hover {
  cursor: pointer;
  color: var(--secondary-color);
}

.drawer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.drawer-top {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}

.menu-button i:hover {
  cursor: pointer;
}

.menu-button i:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

.logo-container {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  padding-top: 0;
}

.logo-image {
  width: 300px;
  height: auto;
  object-fit: contain;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .logo-image {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .logo-image {
    width: 150px;
  }

  .drawer {
    width: 100%;
  }

  .buttons .MusicPlayer {
    display: none;
  }
}

@media (max-height: 900px) {
  .logo-image {
    width: 200px;
  }
}
</style>
