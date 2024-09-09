<template>
    <section class="section" :style="backgroundStyle">
      <div class="cards-container">
        <DraggableCard
          v-for="(card, cardIndex) in cards"
          :key="cardIndex"
          :title="card.title"
          :imageSrc="card.imageSrc"
          :zIndex="card.zIndex"
          :style="card.positions"
          @bring-to-front="bringToFront(cardIndex)"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed,  onMounted } from 'vue';
  import DraggableCard from './DraggableCard.vue';
  
  const props = defineProps({
    backgroundColor: {
      type: String,
      default: 'var(--white)', 
    },
    cardsData: {
      type: Array,
      default : [
        { title: 'Projet 1', imageSrc: 'image1.jpg' },
        { title: 'Projet 2', imageSrc: 'image2.jpg' },
        { title: 'Projet 3', imageSrc: 'image3.jpg' },
      ],
    },
  });
  const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
  
  const cards = ref([]);
  
  // Fonction pour amener une carte au premier plan
  const bringToFront = (cardIndex) => {
    const maxZIndex = Math.max(...cards.value.map(card => card.zIndex));
    cards.value[cardIndex].zIndex = maxZIndex + 1;
  };
  
  // Fonction pour générer des positions aléatoires dans la section
  const generateRandomPositions = () => {
  const section = document.querySelector('.cards-container');

  if (section) {
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;

    const cardWidth = 150;  
    const cardHeight = 200; 

    // Calcul du centre de la section
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;

    const maxOffsetX = sectionWidth * 0.25;
    const maxOffsetY = sectionHeight * 0.25; 

    // Assigner des positions aléatoires proches du centre
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

  
  // Génération des positions aléatoires lorsque la page est montée
  onMounted(() => {
    generateRandomPositions();
  });
  </script>
  
  <style scoped>
.cards-container {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Désactive les événements si nécessaire */
}

.card {
  pointer-events: auto; /* Active les événements de clic uniquement sur les cartes */
}
  </style>
  