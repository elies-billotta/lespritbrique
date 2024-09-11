<template>
  <div>
    <transition name="fade" @before-enter="beforeEnterOverlay" @enter="enterOverlay" @leave="leaveOverlay">
      <div v-if="showOverlay" class="overlay" @click="closeDrawer"></div>
    </transition>
    <transition name="slide" @before-enter="beforeEnterDrawer" @enter="enterDrawer" @leave="leaveDrawer">
      <div v-if="isDrawerOpen" class="drawer">
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
        <!-- Bottom drawer with social icons and text -->
        <div class="bottom-drawer">
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/lesprit.brique" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
          </div>
          <p class="drawer-text">CONTACT@LESPRITBRIQUE.COM</p>
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
  width: 300px;
  /* Réduit la largeur pour éviter que le contenu dépasse */
  height: 100vh;
  background-color: var(--primary-color);
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .drawer {
    width: 100%;
  }
}

.logo-container {
  display: flex;
  justify-content: center;
  padding: 10px;
  padding-bottom: 0;
  padding-top: 0;
}

.logo-image {
  width: 250px;
  /* Ajustez la taille selon vos besoins */
  height: auto;
  object-fit: contain;
}

.button-container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--black);
}

.drawer-button {
  font-family: 'Super Carnival', sans-serif;
  font-size: 1.5rem;
  /* Réduit la taille du texte */
  width: 100%;
  padding: 15px;
  /* Réduit l'espace entre les boutons */
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

/* Bottom drawer styling */
.bottom-drawer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.social-icons {
  display: flex;
}

.social-icons a {
  color: var(--black);
  margin-right: 10px;
  font-size: 1.2rem;
  /* Réduit la taille des icônes */
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--primary-color);
  /* Changez cette variable par votre couleur principale */
}

.drawer-text {
  font-size: 20px;
  color: var(--black);
}

.drawer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
