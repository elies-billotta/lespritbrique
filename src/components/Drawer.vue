<template>
  <div>
    <!-- Overlay avec transition d'opacité -->
    <transition name="fade" @before-enter="beforeEnterOverlay" @enter="enterOverlay" @leave="leaveOverlay">
      <div v-if="showOverlay" class="overlay" @click="closeDrawer"></div>
    </transition>

    <!-- Drawer avec transition de translation -->
    <transition name="slide" @before-enter="beforeEnterDrawer" @enter="enterDrawer" @leave="leaveDrawer">
      <div v-if="isDrawerOpen" class="drawer">
        <div class="logo-container">
          <img src="@/assets/images/logo_NB.png" alt="Image" class="logo-image" />
        </div>
        <div class="button-container">
          <button v-for="(section, index) in sections" :key="index" class="drawer-button"
            @click="handleSectionClick(index)">
            {{ section }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isDrawerOpen: Boolean,
  sections: Array,
  imageSrc: String
});

const emit = defineEmits(['close-drawer']);

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
  const section = document.querySelectorAll('section')[index];
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
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  opacity: 0;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: var(--secondary-color);
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .drawer {
    width: 100%;
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.drawer-button {
  font-family: 'Super Carnival', sans-serif;
  font-size: 1.5rem;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
  background-color: var(--secondary-color);
  color: var(--black);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.drawer-button:hover {
  background-color: rgba(228, 129, 36, 0.32);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo-image {
  width: 200px;
  /* Ajustez la taille selon vos besoins */
  height: auto;
  object-fit: contain;
}
</style>
