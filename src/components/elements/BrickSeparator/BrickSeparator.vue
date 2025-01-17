<template>
    <div class="container" ref="container">
      <Stud v-for="i in numberOfStuds" :key="i" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Stud from './Stud.vue';
  
  const numberOfStuds = ref(0); // Nombre dynamique de studs
  const container = ref(null);
  
  // Calculer le nombre de studs en fonction de la largeur du conteneur
  const updateNumberOfStuds = () => {
    if (container.value) {
      const containerWidth = container.value.offsetWidth;
      const studWidth = 28; // Largeur estimée d'un stud (ajustez si nécessaire)
      numberOfStuds.value = Math.floor(containerWidth / studWidth); // Nombre de studs dans l'espace disponible
    }
  };
  
  onMounted(() => {
    updateNumberOfStuds();
    window.addEventListener('resize', updateNumberOfStuds);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateNumberOfStuds);
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    flex-direction: row;
    box-sizing: border-box;
  }
  </style>
  