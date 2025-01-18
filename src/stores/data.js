import { defineStore } from 'pinia';
import { fetchCreationData } from '@/api/fetchCreationData';

export const useDataStore = defineStore('data', {
    state: () => ({
        creationData: null,
    }),
    actions: {
        async loadCreationData() {
            if (!this.creationData) {
                const data = await fetchCreationData();
                this.creationData = data;
            }
        },
        getCreationImagesById(id) {
            console.log(id);
            const creation = this.creationData?.find(creation => creation.id === id);
            return creation ? creation.images : [];
        },
        getCreationById(id) {
            const creation = this.creationData?.find(creation => creation.id === id);
            return creation ? creation : [];
        },
    },
});
