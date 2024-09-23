<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="4" :title="'A PROPOS'">
    <template #description>
      <p>Ceci est une description personnalisée pour cette section.</p>
    </template>
    <div class="text-column">
      <div class="img-column">
        <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
      </div>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la
        création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur
        demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
    </div>
    <div class="text-column">
      <div class="img-column">
        <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
      </div>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la
        création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur
        demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
    </div>
    <div class="text-column">
      <div class="img-column">
        <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
      </div>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la
        création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur
        demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
    </div>
    <div class="text-column">
      <div class="img-column">
        <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
      </div>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la
        création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur
        demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/Section.vue';
</script>

<style scoped>
.text-column h2 {
  margin-bottom: 20px;
}

.text-column p {
  margin-bottom: 20px;
}
</style>