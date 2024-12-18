<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="2" :icon="BrickIcon">
    <template #columns>
      <EmailForm />
      <div class="img-column">
        <img class="responsive-image" src="@/assets/images/contact.png" alt="Contact us" />
      </div>
    </template>
  </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import EmailForm from '@/components/elements/EmailForm.vue';
import BrickIcon from '@/assets/icons/brick.svg';
</script>

<style scoped>
.text-column h2 {
  margin-bottom: 20px;
}

.text-column p {
  margin-bottom: 20px;
}

/* Cacher l'image sur les écrans de mobile */
.responsive-image {
  display: block; /* Par défaut, afficher l'image */
}

@media (max-width: 768px) {
  .responsive-image {
    display: none; /* Cacher l'image sur mobile */
  }
}
</style>
