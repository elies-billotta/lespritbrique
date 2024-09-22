<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="2">
    <div class="img-column">
      <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
    </div>
    <div class="text-column">
      <h2>A PROPOS</h2>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la
        création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur
        demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
      <p>Desin</p>
      <MyButton text="EN SAVOIR PLUS" />
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/Section.vue';
import MyButton from '@/components/MyButton.vue';
</script>

<style scoped>
.text-column h2 {
  margin-bottom: 20px;
}

.text-column p {
  margin-bottom: 20px;
}
</style>
