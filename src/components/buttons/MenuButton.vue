<template>
    <button class="menu-button" @click="toggleDrawer">
      <div class="i-container">
        <i class="fa-solid fa-bars fa-2xl icon"></i>
      </div>
      <span class="menu-text">MENU</span>
    </button>
</template>

<script setup>
const props = defineProps({
  toggleDrawer: Function
});
</script>

<style scoped>
.menu-button {
  position: fixed;
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
  z-index: 100;
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
