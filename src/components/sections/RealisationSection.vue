<template>
    <div class="realisation-section">
        <h1>DERNIÈRES RÉALISATIONS</h1>
        <ImageColumn :bgVideo="'src/assets/videos/4x4.mp4'">
            <template #column1>
            </template>
            <template #column2>
                <div class="title">
                    <h2>LE 4X4 DES GAZELLES</h2>
                    <div class="inline">
                    <p class="description">Kit complet réalisé pour </p><my-link :href="'https://www.maienga.com/'">Maïenga Sports
                        Events</my-link>
                    </div>
                </div>
                <div class="content">
                    <div class="text">
                        <p>En partenariat avec l'agence Maïenga, L'Esprit Brique a pu concevoir</p>
                    </div>
                    <div class="btn-container">
                        <my-link class="btn" :href="'/'">Lire la suite</my-link>
                    </div>
                </div>
            </template>
        </ImageColumn>
    </div>
</template>


<script setup>
import ImageColumn from '@/components/elements/columns/ImageColumn.vue';
</script>

<style scoped>
h1 {
    font-size: clamp(1rem, 10vw, 5rem);
    text-wrap: nowrap;
    max-width: 100%;
    text-align: center;
    padding : var(--margin);
}

.realisation-section {
    display: flex;
    flex-direction: column;
    margin-left: var(--margin);
    margin-right: var(--margin);
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: var(--margin) 0;
}


.content {
    display: flex;
    flex-direction: row;
    gap: var(--margin);
    width: 100%;
}

.content > .text {
    flex: 1;
}

.content > .btn-container {
    flex: 0.4;
    display: flex;
    justify-content: flex-end;
}

.btn {
    align-self: flex-end;
}

.description {
    font-size: 1rem;
    font-style: italic;
    color: var(--black);
    margin-right: 8px;
}

.inline {
    display: flex;
    align-items: center;
}

@media (max-width: 600px) {
    h1 {
        text-wrap: wrap;
        text-align: left;
    }

    .content {
        flex-direction: column;
    }

    .inline {
        align-items: flex-start;
        flex-direction: column;
    }
}

</style>