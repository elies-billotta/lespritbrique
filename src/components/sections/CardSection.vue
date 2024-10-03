<template>
  <Section :style="backgroundStyle" :columns="0" :title="'RÉALISATIONS'" :icon="BrickIcon" >
    <template #description>
      <p>Voici quelques exemples de réalisations de L'Esprit Brique. N'hésitez pas à nous contacter pour toute demande
        spécifique.</p>
    </template>
    <template #contain>
      <div class="cards-container">
        <DraggableCard v-for="(card, cardIndex) in cards" :key="cardIndex" :title="card.title" :imageSrc="card.imageSrc"
          :zIndex="card.zIndex" :style="card.positions" @bring-to-front="bringToFront(cardIndex)" :size-x="card.sizeX"
          :size-y="card.sizeY" />
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

const bringToFront = (cardIndex) => {
  const maxZIndex = Math.max(...cards.value.map(card => card.zIndex));
  cards.value[cardIndex].zIndex = maxZIndex + 1;
  cards.value[cardIndex].positions.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

  const highestZIndexCard = cards.value.find(card => card.zIndex === maxZIndex);
  if (highestZIndexCard) {
    highestZIndexCard.positions.boxShadow = 'none';
  }
};

const generateRandomPositions = () => {
  const section = document.querySelector('.cards-container');

  if (section) {
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;
    const maxOffsetX = sectionWidth * 0.4; // Ajuster cette valeur pour le décalage horizontal
    const maxOffsetY = sectionHeight * 0.4; // Ajuster cette valeur pour le décalage vertical

    cards.value = props.cardsData.map((card) => {
      const cardWidth = card.sizeX || 100; // Valeur par défaut si sizeX n'est pas fourni
      const cardHeight = card.sizeY || 100; // Valeur par défaut si sizeY n'est pas fourni

      // Calcul des offsets aléatoires autour du centre
      const randomOffsetX = (Math.random() * maxOffsetX * 2) - maxOffsetX; // De -maxOffsetX à +maxOffsetX
      const randomOffsetY = (Math.random() * maxOffsetY * 2) - maxOffsetY; // De -maxOffsetY à +maxOffsetY

      const randomLeft = centerX + randomOffsetX - (cardWidth / 2); // Centrer la carte horizontalement
      const randomTop = centerY + randomOffsetY - (cardHeight / 2); // Centrer la carte verticalement

      return {
        ...card,
        zIndex: 1,
        positions: {
          position: 'absolute',
          left: `${randomLeft}px`,
          top: `${randomTop}px`,
          boxShadow: 'none', // Enlève la boîte d'ombre initialement
        },
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
