<template>
  <div>
    <!-- Overlay avec transition d'opacité -->
    <transition name="fade" @before-enter="beforeEnterOverlay" @enter="enterOverlay" @leave="leaveOverlay">
      <div v-if="showOverlay" class="overlay" @click="closeDrawer"></div>
    </transition>

    <!-- Drawer avec transition de translation -->
    <transition name="slide" @before-enter="beforeEnterDrawer" @enter="enterDrawer" @leave="leaveDrawer">
      <div v-if="isDrawerOpen" class="drawer">
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
  sections: Array
});

const emit = defineEmits(['close-drawer']);

const showOverlay = ref(false);

// Watch prop to control the display of the overlay
watch(() => props.isDrawerOpen, (newVal) => {
  if (newVal) {
    showOverlay.value = true;
  } else {
    // Ensure that the overlay is hidden only after the drawer has closed
    setTimeout(() => {
      showOverlay.value = false;
    }, 0); // Match transition duration
  }
}, { immediate: true }); // Ensure it runs on initial mount

// Function to close the drawer
const closeDrawer = () => {
  emit('close-drawer');
};

// Function to scroll to a section and close the drawer
const handleSectionClick = (index) => {
  scrollToSection(index);
  closeDrawer();
};

// Function to scroll to a section
const scrollToSection = (index) => {
  const section = document.querySelectorAll('section')[index];
  section.scrollIntoView({ behavior: 'smooth' });
};

// Transition hooks for overlay
const beforeEnterOverlay = (el) => {
  el.style.opacity = 0;
};

const enterOverlay = (el, done) => {
  el.offsetHeight; // Trigger reflow
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 1;
  done();
};

const leaveOverlay = (el, done) => {
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 0;
  el.addEventListener('transitionend', done, { once: true });
};

// Transition hooks for drawer
const beforeEnterDrawer = (el) => {
  el.style.transform = 'translateX(100%)';
};

const enterDrawer = (el, done) => {
  el.offsetHeight; // Trigger reflow
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
/* Overlay qui assombrit la page */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  /* En dessous du drawer */
  opacity: 0;
  /* Initialement invisible */
}

/* Drawer avec position fixe et hors de la vue par défaut */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: var(--secondary-color);
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Center buttons vertically */
}

@media (max-width: 768px) {
  .drawer {
    width: 100%;
    /* Sur mobile, le drawer prend toute la largeur */
  }
}

/* Conteneur des boutons */
.button-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Boutons dans le drawer */
.drawer-button {
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

/* Transition du drawer */
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

/* Transition de l'overlay */
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
</style>
