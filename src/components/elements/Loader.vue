<template>
  <transition name="fade">
    <div class="loader-container">
      <div class="spinner"></div>
    </div>
  </transition>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--black);
  border-top-color: var(--secondary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Gestion des transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
