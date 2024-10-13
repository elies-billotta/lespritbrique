<template>
  <div class="card" :style="cardStyle" @mousedown="startDrag" @touchstart="startDrag" ref="cardRef">
    <div class="image-wrapper" :style="wrapperStyle">
      <div class="card-title">{{ title }}</div>
      <span class="dot">
        <i class="fa-solid fa-box fa-2xl"></i>
      </span>
      <img :src="imageSrc" alt="Image" class="card-image" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  title: String,
  imageSrc: String,
  zIndex: Number,
  sizeX: Number,
  sizeY: Number,
});

const emit = defineEmits(['bring-to-front']);

const isDragging = ref(false);
const startPosition = ref({ x: 0, y: 0 });
const currentPosition = ref({ x: 0, y: 0 });
const cardHeight = ref(0); // Nouvelle référence pour stocker la hauteur
const cardRef = ref(null); // Référence à l'élément de la carte

// Propriété calculée pour le style de la carte
const cardStyle = computed(() => {
  return {
    transform: `translate(${currentPosition.value.x}px, ${currentPosition.value.y}px)`,
    zIndex: props.zIndex,
    boxSizing: 'border-box',
    position: 'relative',
  };
});

// Propriété calculée pour le style de l'image wrapper
const wrapperStyle = computed(() => {
  let width = props.sizeX ? `${props.sizeX}px` : 'auto';
  let height = props.sizeY ? `${props.sizeY}px` : 'auto';

  return {
    width,
    height,
  };
});

// Fonction pour démarrer le drag
const startDrag = (event) => {
  isDragging.value = true;
  emit('bring-to-front');

  const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
  const clientY = event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;

  startPosition.value = { x: clientX - currentPosition.value.x, y: clientY - currentPosition.value.y };
};

// Fonction pour gérer le drag
const onDrag = (event) => {
  if (!isDragging.value) return;

  const clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
  const clientY = event.type === 'mousemove' ? event.clientY : event.touches[0].clientY;

  currentPosition.value = {
    x: clientX - startPosition.value.x,
    y: clientY - startPosition.value.y,
  };
};

// Fonction pour terminer le drag
const endDrag = () => {
  isDragging.value = false;
};

// Récupérer la hauteur après que le composant a été monté
onMounted(() => {
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('touchend', endDrag);

  // Récupérer la hauteur de la carte après le montage
  if (cardRef.value) {
    cardHeight.value = cardRef.value.offsetHeight; // stocke la hauteur dans cardHeight
  }
});
</script>

<style scoped>
.card {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px; 
}

.image-wrapper {
  position: relative;
  border: 10px solid var(--white);
  border-bottom-width: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}

.card-title {
  position: absolute;
  bottom: -40px;
  color: var(--black);
  padding: 0;
  font-size: 1.2rem;
  text-align: center;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  font-family: 'Bevellier-Regular', sans-serif;
  z-index: 2;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.dot {
  position: absolute;
  height: 80px;
  width: 80px;
  background-color: var(--white);
  border-radius: 50%;
  bottom: -55px;
  display: inline-block;
}

i {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
}
</style>
