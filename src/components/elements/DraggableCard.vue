<template>
  <div class="card" :style="cardStyle" @mousedown="startDrag" @touchstart="startDrag" ref="cardRef">
    <div class="card-container">
      <div class="image-wrapper" :style="wrapperStyle">
        <img :src="imageSrc" alt="Image" class="card-image" />
      </div>
      <div class="card-title">
          <a href="#" @click.prevent="openModal" @mousedown.stop>{{ title }}</a>
      </div>
      <CardRow class='row' :title="title" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import CardRow from '@/components/elements/CardRow.vue';

const props = defineProps({
  title: String,
  imageSrc: String,
  zIndex: Number,
  sizeX: Number,
  modal_id: Number,
});

const emit = defineEmits(['bring-to-front', 'card-size', 'open-modal']);

const isDragging = ref(false);
const startPosition = ref({ x: 0, y: 0 });
const currentPosition = ref({ x: 0, y: 0 });
const cardRef = ref(null);

// Propriété calculée pour le style de la carte
const cardStyle = computed(() => ({
  transform: `translate(${currentPosition.value.x}px, ${currentPosition.value.y}px)`,
  zIndex: props.zIndex,
  boxSizing: 'border-box',
  position: 'relative',
}));

// Propriété calculée pour le style de l'image wrapper
const wrapperStyle = computed(() => ({
  width: props.sizeX ? `${props.sizeX}vw` : 'auto',
  height: 'auto', // La hauteur sera calculée plus tard
}));

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
onMounted(async () => {
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('touchend', endDrag);

  // Utiliser nextTick pour s'assurer que la carte est complètement montée
  await nextTick();

  // Émettre la hauteur calculée après le montage
  const cardHeight = cardRef.value.offsetHeight; // Obtient la hauteur de la carte
  emit('card-size', { sizeY: cardHeight }); // Émettre la taille
});

const openModal = () => {
  emit('open-modal', { id: props.modal_id });
};

</script>

<style scoped>
.card {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/paperboard-yellow-texture.jpg');
  background-size: cover;
  padding: 5px;
  border-radius: 3px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 3px solid var(--black);
  padding: 5px;
}

.image-wrapper {
  /* position: relative; */
  /* border: 10px solid;
  /* Bordure de base 
  border-bottom-width: 60px;
  box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 5px; */
}

.card-title {
  /* position: absolute; */
  
  color: var(--black);
  padding: 0;
  text-align: center;
  height: 20px;
  line-height: 20px;
  z-index: 2;
}

.card-title>a {
  font-size: 1.2rem;
  font-family: 'Bevellier-Regular', sans-serif;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.dot {
  /* position: absolute; */
  height: 80px;
  width: 80px;
  background-image: url('@/assets/images/paperboard-yellow-texture.jpg');
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

.row > *{
  font-size: 0.5rem;
}

</style>
