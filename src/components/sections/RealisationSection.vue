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
    padding: 1.5rem;
}

.realisation-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 1.5rem 0; /* Utilisez du padding pour l'espacement interne */
    overflow: hidden; /* Évite que les marges débordent */
}


.content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
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
        font-size: 3rem;
        text-wrap: wrap;
        text-align: left;
        padding: 1.5rem;
    }
}

</style>