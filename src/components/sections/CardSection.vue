<template>
  <Section :style="backgroundStyle" :columns="0" :title="'RÉALISATIONS'" :icon="BrickIcon">
    <template #description>
      <p>DESIGN SUR MESURE</p>
    </template>
    <template #contain>
      <div class="cards-container">
        <DraggableCard
          v-for="(card, index) in cards"
          :key="card.card_id"
          :title="card.title"
          :imageSrc="card.imageSrc"
          :zIndex="card.zIndex"
          :style="card.positions"
          @bring-to-front="bringToFront(index)"
          :size-x="card.sizeX"
          @card-size="handleCardSize(index)"
          :modal_id="card.modal_id"
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
import { fetchCardsData } from '@/services/fetchCardsData.js';
import { defineEmits } from 'vue';

const emit = defineEmits(['documentLoaded']);

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'var(--primary-color)',
  },
  cardsData: {
    type: Array,
    default: () => [],
  },
});

const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const cards = ref([]);

// Fonction pour gérer la taille de la carte
const handleCardSize = (cardIndex) => (size) => {
  if (cards.value[cardIndex]) {
    cards.value[cardIndex].sizeY = size.sizeY;
  }
};

// Fonction pour amener une carte au premier plan
const bringToFront = (cardIndex) => {
  if (cards.value[cardIndex]) {
    const maxZIndex = Math.max(...cards.value.map(card => card.zIndex));

    // Réinitialiser l'ombre pour toutes les cartes
    cards.value.forEach(card => {
      card.positions.boxShadow = 'none';
      card.zIndex = 1; // Réinitialiser le zIndex si besoin
    });

    // Mettre à jour l'index Z et l'ombre de la carte cliquée
    cards.value[cardIndex].zIndex = maxZIndex + 1;
    cards.value[cardIndex].positions.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  }
};

// Génération des positions aléatoires
const generateRandomPositions = () => {
  const section = document.querySelector('.cards-container');

  if (section && cards.value.length) {
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;

    cards.value = cards.value.map((card) => {
      return {
        ...card,
        zIndex: 1,
        positions: {
          position: 'absolute',
          left: `${Math.random() * (centerX - 100)}px`,
          top: `${Math.random() * (centerY - 100)}px`,
          boxShadow: 'none',
        },
        sizeY: 100,
      };
    });
  }
};

onMounted(async () => {
  try {
    const data = await fetchCardsData();
    cards.value = data;
  } catch (error) {
    console.error('Error during onMounted:', error);
  } finally {
    generateRandomPositions();
    emit('documentLoaded');
  }
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
