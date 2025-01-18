// src/stores/data.js
import { defineStore } from 'pinia';
import { fetchCardsData } from '@/services/fetchCardsData';

export const useDataStore = defineStore('data', {
  state: () => ({
    galleryImages: null,
  }),
  actions: {
    async loadGalleryData() {
      if (!this.galleryImages) {
        const data = await fetchCardsData();
        this.galleryImages = data;
        console.log(this.galleryImages);
      }
    },
  },
});
