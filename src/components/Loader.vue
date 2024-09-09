<template>
    <div class="loader-container" v-if="!isLoaded">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isLoaded = ref(false);
  
  onMounted(() => {
    //wait for the document to be fully loaded and 1 more second
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          isLoaded.value = true;
        }, 1000);
      }
    };
  });
  </script>
  
  <style scoped>
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  