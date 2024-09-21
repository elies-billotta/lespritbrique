<template>
    <footer>
      <div class="footer-content">
        <!-- Email avec possibilité de copier -->
        <p class="mail" @click="onCopy('contact@lespritbrique.com')">CONTACT@LESPRITBRIQUE.COM</p>
        
        <!-- Icones sociales -->
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f fa-sm"></i>
          </a>
          <a href="https://www.instagram.com/lesprit.brique" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <!-- URL avec possibilité de copier -->
          <div @click="onCopy('lespritbrique.com')" role="button" aria-label="lespritbrique.com" tabindex="0">
            <i class="fa-solid fa-globe"></i>
          </div>
        </div>
      </div>
  
      <!-- Composant de notification -->
      <NotificationPopup v-if="showNotification" :message="notificationMessage" :type="notificationType" />
    </footer>
  </template>
  
  <script setup>
  import { useClipboard } from '@vueuse/core';
  import { ref } from 'vue';
  import NotificationPopup from '@/components/NotificationPopup.vue';  // Import du composant de notification
  
  const { copy } = useClipboard();
  
  // État pour gérer l'affichage de la notification
  const showNotification = ref(false);
  const notificationMessage = ref('');
  const notificationType = ref('info');  // Types possibles: 'success', 'error', 'info'
  
  // Fonction pour copier dans le presse-papiers et afficher une notification
  const onCopy = (source) => {
    copy(source).then(() => {
      notificationMessage.value = `Mail copié`;
      notificationType.value = 'success';
      showNotification.value = true;
  
      // Cacher la notification après 3 secondes
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    }).catch(() => {
      notificationMessage.value = 'Échec de la copie';
      notificationType.value = 'error';
      showNotification.value = true;
  
      // Cacher la notification après 3 secondes
      setTimeout(() => {
        showNotification.value = false;
      }, 3000);
    });
  };
  </script>
  
  <style scoped>
  /* Styles du footer */
  .mail {
    font-size: 20px;
    color: var(--black);
    cursor: pointer;
  }
  
  .mail:hover {
    color: var(--secondary-color);
  }
  
  footer {
    background-color: var(--primary-color);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .social-icons a, .social-icons div {
    color: var(--black);
    margin-right: 10px;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  
  .social-icons a:hover, .social-icons div:hover {
    color: var(--secondary-color);
  }
  
  /* Ajout de focus visible pour l'accessibilité */
  .social-icons div[role="button"]:focus {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }
  </style>
  