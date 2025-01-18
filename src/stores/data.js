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
        getCreationImagesBySlug(slug) {
            const creation = this.creationData?.find(creation => creation.slug === slug);
            return creation ? creation.images : [];
        },
        getCreationBySlug(slug) {
            const creation = this.creationData?.find(creation => creation.slug === slug);
            return creation ? creation : [];
        },
    },
});
