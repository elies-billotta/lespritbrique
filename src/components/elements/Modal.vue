<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <div class="modal-body">
          <ImageGallery :images="images" />
          <div class="text-container">
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ImageGallery from './ImageGallery.vue';
  
  const props = defineProps({
    title: String,
    isVisible: Boolean,
    text: String,
    images: Array,
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    display: flex;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px; /* Largeur maximale de la modale */
    width: 90%;
    max-height: 80vh; /* Hauteur maximale pour éviter de trop étirer la modale */
    overflow: hidden; /* Empêcher tout débordement */
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .modal-body {
    display: flex;
    justify-content: space-between; /* Espacement entre les colonnes */
    height: 100%; /* Hauteur totale */
    overflow: hidden; /* Empêcher le débordement dans la modale */
  }
  
  .text-container {
    flex: 1; /* Prendre l'espace disponible */
    padding-left: 20px; /* Espacement à gauche */
    overflow-y: auto; /* Activer le défilement si le contenu dépasse */
  }
  
  .image-gallery {
    max-height: 300px; /* Hauteur maximale pour la galerie d'images */
    flex: 1; /* Prendre l'espace disponible */
    display: flex; /* Affichage en colonne pour les images */
    flex-direction: column; /* Colonne pour les images */
  }
  
  .image-gallery .main-image-container {
    max-height: 300px; /* Hauteur maximale pour l'image principale */
    overflow: hidden; /* Masquer le débordement */
    width: 100%; /* Occuper toute la largeur */
  }
  
  .image-gallery .main-image {
    width: auto; /* Garder le ratio d'aspect */
    max-width: 100%; /* Ne pas dépasser la largeur du conteneur */
    max-height: 100%; /* Ne pas dépasser la hauteur du conteneur */
  }
  </style>
  