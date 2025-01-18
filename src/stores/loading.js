import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isAppLoaded: false,
    loadingTasks: new Set(),
  }),
  actions: {
    startLoading(taskName) {
      this.loadingTasks.add(taskName);
    },
    finishLoading(taskName) {
      this.loadingTasks.delete(taskName);
      if (this.loadingTasks.size === 0) {
        this.isAppLoaded = true;
      }
    },
  },
});
