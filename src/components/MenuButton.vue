<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <button v-if="!isFirstSectionVisible" class="menu-button" @click="toggleDrawer">
        <div class="i-container">
          <i class="fa-solid fa-bars fa-2xl icon"></i>
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
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 75px;
  height: 75px;
  background-color: var(--black);
  color: var(--white);
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 9997;
}

.menu-button:hover {
  background-color: var(--black-hover);
}

.i-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

.menu-text {
  font-family: 'Bevellier-Regular', sans-serif;
  font-size: 14px;
}
</style>
