<template>
  <Section :style="backgroundStyle" :columns="1">
    <div class="carousel-container">
      <button class="carousel-button left" @click="prevCard">‹</button>
      <div class="cards-container">
        <div class="cards-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <DraggableCard v-for="(card, cardIndex) in cards" :key="cardIndex" :title="card.title"
            :imageSrc="`src/assets/images/${card.imageSrc}`" :zIndex="card.zIndex" :style="card.positions"
            @bring-to-front="bringToFront(cardIndex)" :size-x="card.sizeX" :size-y="card.sizeY" />
        </div>
      </div>

      <button class="carousel-button right" @click="nextCard">›</button>
    </div>
  </Section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Section from '@/components/sections/Section.vue';
import DraggableCard from '../elements/DraggableCard.vue';

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

const cards = ref(props.cardsData || []);
const currentIndex = ref(0);
const nextCard = () => {
  if (currentIndex.value < cards.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = cards.value.length - 1;
  }
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.cards-container {
  width: 100%;
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards-wrapper {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.card {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel-button {
  background-color: var(--primary-color);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-button.left {
  position: absolute;
  left: 10px;
}

.carousel-button.right {
  position: absolute;
  right: 10px;
}
</style>