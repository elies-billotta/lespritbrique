<template>
  <footer class="footer-content">
      <div class="footer-line">
        <div class="logo">
          <img src="@/assets/images/logo-color.png" alt="logo" />
        </div>
        <div class="contact">
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
        </div>
      </div>
      <div class="line">
        <div class="inline">
        <p class="space">L'ESPRIT BRIQUE® est une marque déposée.Personnages réalisés par</p> <my-link href="https://www.instagram.com/meli_melodraw/">meli_melodraw</my-link>
      </div>
        <p>Tous droits réservés. Ne pas reproduire.</p>
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
.space{
  margin-right: 6px;
}
.inline{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.mail {
  font-size: 20px;
  color: var(--black);
}

.mail:hover {
  color: var(--secondary-color);
}

.footer-content {
  background-color: var(--primary-color);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}


.footer-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a,
.social-icons div, a {
  color: var(--black);
  margin-right: 10px;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.social-icons a:hover,
.social-icons div:hover,
p>a:hover {
  color: var(--secondary-color);
}

.social-icons div[role="button"]:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

p,
p>a {
  color: var(--black);
  text-align: center;
}

.line {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

img {
  width: 200px;
  height: auto;
}
</style>