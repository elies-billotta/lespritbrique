<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <button v-if="!isFirstSectionVisible" class="menu-button" @click="toggleDrawer">
      <div class="menu-icon">
        ☰
      </div>
      <span class="menu-text">MENU</span>
    </button>
  </transition>
</template>

<script setup>
const props = defineProps({
  isFirstSectionVisible: Boolean,  // Nouveau prop pour gérer la visibilité
  toggleDrawer: Function
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.offsetHeight; // Trigger reflow
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.transition = 'opacity 0.3s ease';
  el.style.opacity = 0;
  el.addEventListener('transitionend', done, { once: true });
};
</script>

<style scoped>
.menu-button {
  position: fixed;
  bottom: 20px;
  right: 20px; /* Aligné à gauche */
  width: 60px; /* Largeur fixe */
  height: 60px; /* Hauteur fixe, égale à la largeur pour un cercle parfait */
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%; /* Rend le bouton rond */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.menu-button:hover {
  background-color: #2980b9;
}

.menu-icon {
  font-size: 24px;
}

.menu-text {
  font-size: 12px;
  margin-top: 4px;
}
</style>
