<template>
  <div class="card" :style="cardStyle" @mousedown="startDrag" @touchstart="startDrag">
    <img :src="imageSrc" alt="Image" class="card-image" />
    <h3 class="card-title">{{ title }}</h3>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  title: String,
  imageSrc: String,
  zIndex: Number,
});

const emit = defineEmits(['bring-to-front']); // On émet l'événement pour amener la carte au premier plan

const isDragging = ref(false);
const startPosition = ref({ x: 0, y: 0 });
const currentPosition = ref({ x: 0, y: 0 });

const cardStyle = computed(() => ({
  transform: `translate(${currentPosition.value.x}px, ${currentPosition.value.y}px)`,
  zIndex: props.zIndex,
}));

const startDrag = (event) => {
  isDragging.value = true;
  emit('bring-to-front');

  const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
  const clientY = event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;

  startPosition.value = { x: clientX - currentPosition.value.x, y: clientY - currentPosition.value.y };
};

const onDrag = (event) => {
  if (!isDragging.value) return;

  const clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
  const clientY = event.type === 'mousemove' ? event.clientY : event.touches[0].clientY;

  currentPosition.value = {
    x: clientX - startPosition.value.x,
    y: clientY - startPosition.value.y,
  };
};

const endDrag = () => {
  isDragging.value = false;
};

onMounted(() => {
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('touchend', endDrag);
});

</script>

<style scoped>
.card {
  position: absolute;
  width: 150px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.card-title {
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: white;
}
</style>
