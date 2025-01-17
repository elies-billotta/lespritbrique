import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoadingComplete: false,
  }),
  actions: {
    setLoadingComplete() {
      this.isLoadingComplete = true;
    },
  },
});
