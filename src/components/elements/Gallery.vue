<template>
    <div>
        <Flicking ref="flicking" :options="{ circular: true, align: 'prev' }" :plugins="plugins">
            <div class="card-panel" v-for="image in images" :key="image.card_id"
                :style="{ backgroundImage: 'url(' + image.imageSrc + ')' }">
                <my-link :href="'/about'" class="flicking-index">{{ image.title }}</my-link>
            </div>
            <template #viewport>
                <div class="flicking-pagination"></div>
            </template>
        </Flicking>
    </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import { useDataStore } from '@/stores/data';

export default {
    components: {
        Flicking,
    },
    data() {
        return {
            plugins: [new Pagination({ type: 'bullet' })],
        };
    },
    computed: {
        images() {
            const dataStore = useDataStore();
            return dataStore.galleryImages;
        },
    },
};
</script>

<style scoped>
.flicking-viewport {
    padding-bottom: 3rem !important;
    margin-left: var(--margin);
    margin-right: var(--margin);
    border: 1px solid black;
    border-bottom: 0px;
}

.card-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    gap: 1;
    width: 50%;
    height: 500px;
    box-sizing: border-box;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 1px solid black;
    padding: 1rem;
}

.card-panel:hover {
    cursor: grab;
}

.card-panel:active {
    cursor: grabbing;
}

.flicking-index {
    position: relative;
    min-width: 60px;
    text-align: center;
}

.controls {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 768px) {
    .card-panel {
        height: 300px;
        width: 100%;
        gap: 0;
    }
}
</style>
