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
            <img src="@/assets/images/logo-color.png" alt="Image" class="logo-image" />
          </div>
          <div class="button-container">
            <button v-for="(section, index) in sections" :key="index" class="drawer-button"
              @click="handleSectionClick(index)">
              {{ section }}
            </button>
          </div>
        </div>
        <div class="bottom-drawer">
          <div class="buttons">
            <IconButton id="activeShader" :icon1="TV" @click="toggleShader"/>
            <MusicPlayer 
              :isPlaying="isPlaying" 
              :volume="volume" 
              :currentMusic="currentMusic"
              @toggle-music="$emit('toggle-music')" 
              @update-volume="$emit('update-volume', $event)"
            />
          </div>
          <a class="drawer-text">Mentions légales</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import MusicPlayer from '@/components/elements/MusicPlayer.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import TV from '@/assets/icons/tv.png'

const props = defineProps({
  isDrawerOpen: Boolean,
  sections: Array,
  isPlaying: Boolean,
  volume: Number,
  currentMusic: String,
});

const emit = defineEmits(['close-drawer', 'toggle-music', 'update-volume', 'toggle-shader']);

const showOverlay = ref(false);

watch(() => props.isDrawerOpen, (newVal) => {
  if (newVal) {
    showOverlay.value = true;
  } else {
    setTimeout(() => {
      showOverlay.value = false;
    }, 0);
  }
}, { immediate: true });

const closeDrawer = () => {
  emit('close-drawer');
};

const handleSectionClick = (index) => {
  scrollToSection(index);
  closeDrawer();
};

const scrollToSection = (index) => {
  const section = document.getElementById(props.sections[index]);
  section.scrollIntoView({ behavior: 'smooth' });
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
</script>

<style scoped>
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

.buttons{
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
}

@media (max-height: 900px) {
  .logo-image {
    width: 200px;
  }
}
</style>
