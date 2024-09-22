<template>
  <Section :style="backgroundStyle" :columns="1">
    <div class="cards-container">
      <DraggableCard v-for="(card, cardIndex) in cards" :key="cardIndex" :title="card.title"
        :imageSrc="`src/assets/images/${card.imageSrc}`" :zIndex="card.zIndex" :style="card.positions"
        @bring-to-front="bringToFront(cardIndex)" :size-x="card.sizeX" :size-y="card.sizeY" />
    </div>
  </Section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DraggableCard from '@/components/DraggableCard.vue';
import Section from '@/components/Section.vue';

const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#E9B58F',
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

    const cardWidth = 150;
    const cardHeight = 200;
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;
    const maxOffsetX = sectionWidth * 0.05;
    const maxOffsetY = sectionHeight * 0.05;

    cards.value = props.cardsData.map((card) => {
      const randomLeft = centerX - cardWidth / 2 + (Math.random() * maxOffsetX * 2 - maxOffsetX);
      const randomTop = centerY - cardHeight / 2 + (Math.random() * maxOffsetY * 2 - maxOffsetY);

      return {
        ...card,
        zIndex: 1,
        positions: {
          position: 'absolute',
          left: `${randomLeft}px`,
          top: `${randomTop}px`,
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
}

.card {
  pointer-events: auto;
}
</style>