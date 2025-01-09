<template>
  <footer>
    <div class="footer-content">
      <a class="mail" @click="onCopy('contact@lespritbrique.com')">CONTACT@LESPRITBRIQUE.COM</a>
      <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f fa-sm"></i>
        </a>
        <a href="https://www.instagram.com/lesprit.brique" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <div @click="onCopy('lespritbrique.com')" role="button" aria-label="lespritbrique.com" tabindex="0">
          <i class="fa-solid fa-globe"></i>
        </div>
      </div>
      <p>L'ESPRIT BRIQUE® est une marque déposée.</p>
      <p> Personnages réalisés par <a href="https://www.instagram.com/meli_melodraw/" target="_blank">@meli_melodraw</a>. Tous droits réservés. Ne pas reproduire.</p>
    </div>
    <NotificationPopup v-if="showNotification" :message="notificationMessage" :type="notificationType" />
  </footer>
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
import { ref } from 'vue';
import NotificationPopup from '@/components/elements/NotificationPopup.vue';

const { copy } = useClipboard();
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('info');

const onCopy = (source) => {
  copy(source).then(() => {
    notificationMessage.value = `${source} copié dans le presse-papier`;
    notificationType.value = 'success';
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  }).catch(() => {
    notificationMessage.value = 'Échec de la copie';
    notificationType.value = 'error';
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  });
};
</script>

<style scoped>
 .mail {
  font-size: 20px;
  color: var(--white);
}

.mail:hover {
  color: var(--secondary-color);
}


footer {
  background-color: var(--black);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap : 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a,
.social-icons div {
  color: var(--white);
  margin-right: 10px;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.social-icons a:hover,
.social-icons div:hover, p > a:hover {
  color: var(--secondary-color);
}

.social-icons div[role="button"]:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

p, p > a {
  color : var(--white);
  text-align: center;
}
</style>