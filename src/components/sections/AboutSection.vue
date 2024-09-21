<template>
  <Section class="about" :background-color="'var(--white)'">
    <div class="img-column">
      <!-- Add an image here if needed -->
      <img src="" alt="Description of image" />
    </div>
    <div class="text-column">
      <h2>Qui sommes-nous ?</h2>
      <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure incluant la création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la vente ou sur demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !</p>
      <MyButton text="EN SAVOIR PLUS" />
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/Section.vue';
import MyButton from '@/components/MyButton.vue';
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 100px;
  padding-left: 230px;
  padding-right: 230px;
}

.img-column,
.text-column {
  flex: 1;
}

.img-column {
  max-width: 50%;
}

.text-column {
  max-width: 50%;
}

.img-column img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.text-column h2 {
  margin-bottom: 10px;
}

.text-column p {
  margin-bottom: 20px;
}
</style>
