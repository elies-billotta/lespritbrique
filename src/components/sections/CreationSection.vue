<template>
    <FullScreenBanner :src="mainImage" :text="subtitle" :background="cover" />
    <ColumnSection>
        <template #column1>
            <img :src="mainImage" />
        </template>
        <template #column2>
            <h2>{{title}}</h2>
            <p>{{ text }}</p>
        </template>
    </ColumnSection>
    <Gallery :images="images" :label="false"/>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import { useDataStore } from "@/stores/data";
import ColumnSection from "@/components/elements/columns/ColumnSection.vue";
import Gallery from "@/components/elements/Gallery.vue";
import FullScreenBanner from "@/components/elements/FullScreenBanner.vue";

export default {
    components: {
        ColumnSection,
        Flicking,
        Gallery,
        FullScreenBanner,
    },
    data() {
        return {
            plugins: [new Pagination({ type: "bullet" })],
        };
    },
    computed: {
        currentData() {
            const dataStore = useDataStore();
            return dataStore.getCreationBySlug(this.$route.params.slug) || {};
        },
        images() {
            const imagesObject = this.currentData.images || {};
            return Object.entries(imagesObject).map(([key, value]) => ({
                id: key,
                mainImage: value,
            }));
        },
        text() {
            return this.currentData.description || "";
        },
        mainImage() {
            return this.currentData.mainImage || "";
        },
        subtitle() {
            return this.currentData.subtitle || "";
        },
        title() {
            return this.currentData.title || "";
        },
        cover() {
            if (this.currentData.cover == 'video' && this.currentData.slug !== '**')
               return new URL(`../../assets/videos/${this.currentData.slug}.mp4`, import.meta.url).href || "";
            return this.currentData.cover || this.currentData.mainImage || "";
        },
    },
};
</script>

<style scoped>
img {
    max-height: 500px;
    width : 100%;
    border: 1px solid black;
    object-fit: cover;
}
</style>
