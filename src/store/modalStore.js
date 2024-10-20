// src/store/modalStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const activeModalId = ref(null);

  const openModal = (id) => {
    activeModalId.value = id;
  };

  const closeModal = () => {
    activeModalId.value = null;
  };

  return {
    activeModalId,
    openModal,
    closeModal,
  };
});
