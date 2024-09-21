<!-- src/components/SvgBubbleNotification.vue -->
<template>
    <div v-if="visible" class="svg-bubble-wrapper" :style="{ top: position.top, left: position.left }">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-100 -100 700 400" class="svg-bubble">
        <g>
          <path class="cls-1" d="M2.5,2.5h349.76l.24,69s84,7,126,63c-51-20-125-18-125-18l-.07,78H2.5V2.5Z" />
        </g>
        <g>
          <path class="cls-2" d="M355.93,197H0V0h354.75l.24,69.24c6.17.7,24,3.2,45.55,10.39,24.29,8.1,57.88,23.93,79.96,53.37l5.28,7.04-8.19-3.21c-44.81-17.57-108.44-17.98-121.59-17.86l-.07,78.04ZM5,192h345.93l.07-77.93,2.43-.07c.7-.02,67.2-1.6,117.46,15.1-42.31-48.17-117.81-55.04-118.6-55.11l-2.28-.19-.24-68.8H5v187Z" />
        </g>
        <!-- Texte ajouté au centre de la bulle -->
        <text x="150" y="150" class="bubble-text">{{ message }}</text>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000 // Durée de la bulle avant de disparaître
    }
  });
  
  const visible = ref(false);
  const position = ref({ top: '0px', left: '0px' });
  
  // Fonction pour afficher la bulle pendant une durée définie
  const showBubble = (top, left) => {
    position.value = { top, left };
    visible.value = true;
  
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  };
  
  // Exposez la fonction pour l'utiliser dans le parent
  defineExpose({
    showBubble
  });
  </script>
  
  <style scoped>
  .svg-bubble-wrapper {
    position: absolute;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* La bulle n'interfère pas avec les clics */
  }
  
  .svg-bubble {
    width: 200px;
    height: auto;
  }
  
  .bubble-text {
    font-size: 18px;
    fill: #000;
    font-weight: bold;
    text-anchor: middle;
    dominant-baseline: middle;
  }
  </style>
  