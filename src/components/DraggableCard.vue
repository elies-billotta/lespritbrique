<template>
  <div class="card" :style="cardStyle" @mousedown="startDrag" @touchstart="startDrag">
    <div class="image-wrapper" :style="wrapperStyle">
      <div class="card-title">{{ title }}</div>
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

const cardStyle = computed(() => {
  return {
    transform: `translate(${currentPosition.value.x}px, ${currentPosition.value.y}px)`,
    zIndex: props.zIndex,
    boxSizing: 'border-box',
    position: 'relative',
  };
});

const wrapperStyle = computed(() => {
  let width = props.sizeX ? `${props.sizeX}px` : 'auto';
  let height = props.sizeY ? `${props.sizeY}px` : 'auto';
  if (!props.sizeX) width = 'auto';
  if (!props.sizeY) height = 'auto';

  return {
    width,
    height,
  };
});

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
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  border: 20px solid var(--white);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--black);
  padding: 0;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  font-family: 'Bevellier-Regular', sans-serif;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
