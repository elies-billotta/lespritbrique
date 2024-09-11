<template>
    <footer>
        <div class="footer-content">
            <p class="mail" @click="onCopy('contact@lespritbrique.com')">CONTACT@LESPRITBRIQUE.COM</p>
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f fa-sm"></i>
                </a>
                <a href="https://www.instagram.com/lesprit.brique" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <div @click="onCopy('lespritbrique.com')" target="_blank" aria-label="lespritbrique.com">
                    <i class="fa-solid fa-globe"></i>   
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const { copy } = useClipboard()

const onCopy = source => {
  copy(source).then(() => {
    alert('Email copié : ' + source)
  }).catch(() => {
    alert('Échec de la copie')
  })
}
</script>

<style scoped>

.mail {
    font-size: 20px;
    color: var(--black);
}

.mail:hover {
    color: var(--secondary-color);
    cursor: pointer;
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
}

.social-icons a:hover, .social-icons div:hover {
    color: var(--secondary-color);
    cursor: pointer;
}
</style>
