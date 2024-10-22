<template>
    <div class="image-gallery">
      <div class="main-image-container">
        <img :src="currentImage" class="main-image" alt="Current" />
      </div>
      <div class="thumbnail-container">
        <button @click="prevImage" class="nav-button">&#10094;</button>
        <div class="thumbnails">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            class="thumbnail"
            :class="{ active: currentIndex === index }"
            @click="setCurrentImage(index)"
          />
        </div>
        <button @click="nextImage" class="nav-button">&#10095;</button>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
  });
  
  const currentIndex = ref(0);
  const currentImage = ref(props.images[currentIndex.value]);
  
  const setCurrentImage = (index) => {
    currentIndex.value = index;
    currentImage.value = props.images[currentIndex.value];
  };
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
    currentImage.value = props.images[currentIndex.value];
  };
  
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    currentImage.value = props.images[currentIndex.value];
  };
  
  watch(() => props.images, () => {
    currentIndex.value = 0;
    currentImage.value = props.images[0];
  });
  </script>
  
  <style scoped>
.image-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.main-image-container {
  height: 100%;
  overflow: hidden;
  width: 100%; 
  display: flex;
  justify-content: center;
  
}

.main-image {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.thumbnail.active {
  opacity: 1;
  border: 2px solid blue;
}

.nav-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
</style>
