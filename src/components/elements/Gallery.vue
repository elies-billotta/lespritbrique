<template>
    <Flicking ref="flicking" :options="{ circular: true, align: 'prev' }" :plugins="plugins">
        <div class="card-panel" v-for="image in images" :key="image.card_id"
            :style="{ backgroundImage: 'url(' + image.imageSrc + ')' }">
            <a class="flicking-index">{{ image.title }}</a>
        </div>
        <template #viewport>
            <div class="flicking-pagination"></div>
        </template>
    </Flicking>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import { fetchCardsData } from "@/services/fetchCardsData";
import "@egjs/flicking-plugins/dist/pagination.css";

export default {
    components: {
        Flicking
    },
    data() {
        return {
            plugins: [new Pagination({ type: 'bullet' })],
            images: []
        }
    },
    async mounted() {
        this.images = await fetchCardsData();
        console.log(this.images);
    },
}
</script>

<style scoped>

.flicking-viewport {
    padding-bottom: 3rem !important;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
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
    font-size: 3rem;
    gap: 1;
    width: 50%;
    height: 400px;
    box-sizing: border-box;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 1px solid black;
}

.card-panel:hover{
    cursor: grab;
}

.card-panel:active{
    cursor: grabbing;
}

.flicking-index {
    position: relative;
    min-width: 60px;
    text-align: center;
    padding-bottom: 10px;
    padding-left: 10px;
}

.flicking-index:hover{
    cursor: pointer;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
