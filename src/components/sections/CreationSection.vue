<template>
    <ColumnSection>
        <template #column1>
            <img :src="mainImage"/>
        </template>
        <template #column2>
            <h2>DESCRIPTION</h2>
            <p> {{ text }}</p>
        </template>
    </ColumnSection>
   <Gallery :images="images" :label="false"/>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import { useDataStore } from '@/stores/data';
import ColumnSection from '@/components/elements/columns/ColumnSection.vue';
import Gallery from "@/components/elements/Gallery.vue";

export default {
    components: {
        ColumnSection,
        Flicking,
        Gallery,
    },
    data() {
        return {
            plugins: [new Pagination({ type: 'bullet' })],
            currentCreationID: Number(this.$route.params.id)
        };
    },
    computed: {
        images() {
            const dataStore = useDataStore();
            console.log(this.currentCreationID);
            let imagesObject = dataStore.getCreationImagesById(this.currentCreationID);
            return Object.entries(imagesObject).map(([key, value]) => ({
                id: key,
                mainImage: value,
            }));
        },
        text() {
            const dataStore = useDataStore();
            let data = dataStore.getCreationById(this.currentCreationID);
            return data.description;
        },
        mainImage() {
            const dataStore = useDataStore();
            let data = dataStore.getCreationById(this.currentCreationID);
            return data.mainImage;
        },
    },
    watch: {
        '$route.params.id': {
            handler(newId) {
                console.log(`Route ID changé : ${newId}`);
                this.currentCreationID = Number(newId);
            },
            immediate: true,
        },
    },
};
</script>


<style scoped>
img {
    max-height: 500px;
}
</style>