<template>
  <Section :style="backgroundStyle" :columns="0" :title="'RÉALISATIONS'" :icon="BrickIcon">
    <template #description>
      <p>Voici quelques exemples de réalisations de L'Esprit Brique. N'hésitez pas à nous contacter pour toute demande spécifique.</p>
    </template>
    <template #contain>
      <div class="cards-container">
        <DraggableCard
          v-for="(card, cardIndex) in cards"
          :key="cardIndex"
          :title="card.title"
          :imageSrc="card.imageSrc"
          :zIndex="card.zIndex"
          :style="card.positions"
          @bring-to-front="bringToFront(cardIndex)"
          :size-x="card.sizeX"
          @card-size="handleCardSize(cardIndex)"
        />
      </div>
    </template>
  </Section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DraggableCard from '@/components/elements/DraggableCard.vue';
import Section from '@/components/sections/Section.vue';
import BrickIcon from '@/assets/icons/brick.svg';

const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#5B8E7D',
  },
  cardsData: {
    type: Array,
  },
});

const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const cards = ref([]);

// Fonction pour gérer la taille de la carte
const handleCardSize = (cardIndex) => (size) => {
  console.log(`Taille de la carte ${cardIndex}:`, size); // Traite la taille de la carte ici
  // Mettre à jour la taille de la carte dans cards si nécessaire
  cards.value[cardIndex].sizeY = size.sizeY; // Met à jour sizeY dans la carte
};

// Fonction pour amener une carte au premier plan
const bringToFront = (cardIndex) => {
  const maxZIndex = Math.max(...cards.value.map(card => card.zIndex));
  cards.value[cardIndex].zIndex = maxZIndex + 1;
  cards.value[cardIndex].positions.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

  const highestZIndexCard = cards.value.find(card => card.zIndex === maxZIndex);
  if (highestZIndexCard) {
    highestZIndexCard.positions.boxShadow = 'none';
  }
};

// Génération des positions aléatoires
const generateRandomPositions = () => {
  const section = document.querySelector('.cards-container');

  if (section) {
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;
    const maxOffsetX = sectionWidth * 0.4; // Ajuster cette valeur pour le décalage horizontal
    const maxOffsetY = sectionHeight * 0.4; // Ajuster cette valeur pour le décalage vertical

    cards.value = props.cardsData.map((card, index) => {
      return {
        ...card,
        zIndex: 1,
        positions: {
          position: 'absolute',
          left: `${Math.random() * (centerX - 100)}px`, // Positionnement aléatoire
          top: `${Math.random() * (centerY - 100)}px`,
          boxShadow: 'none', // Enlève la boîte d'ombre initialement
        },
        sizeY: 100, // Valeur par défaut si sizeY n'est pas fourni, met à jour après
      };
    });
  }
};

onMounted(() => {
  generateRandomPositions();
});
</script>

<style scoped>
.cards-container {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.card {
  pointer-events: auto;
}
</style>
