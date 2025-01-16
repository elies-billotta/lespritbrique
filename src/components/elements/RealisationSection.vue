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
                    <p class="description">Kit complet réalisé pour </p><MyLink :href="'https://www.maienga.com/'">Maïenga Sports
                        Events</MyLink>
                    </div>
                </div>
                <div class="content">
                    <div class="text">
                        <p>En partenariat avec l'agence Maïenga, L'Esprit Brique a pu concevoir</p>
                    </div>
                    <div class="btn-container">
                        <MyLink class="btn" :href="'/'">Lire la suite</MyLink>
                    </div>
                </div>
            </template>
        </ImageColumn>
    </div>
</template>


<script setup>
import ImageColumn from '@/components/elements/ImageColumn.vue';
import MyLink from '@/components/elements/MyLink.vue';
</script>

<style scoped>
h1 {
    font-size: 5rem;
    text-wrap: nowrap;
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
}

.content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    width: 100%;
}

.content > .text {
    flex: 1; /* Cette colonne prend 50% de la largeur */
}

.content > .btn-container {
    flex: 0.4; /* Cette colonne prend 50% de la largeur */
    display: flex;
    justify-content: flex-end; /* Cela aligne le bouton à droite */
}

.btn {
    align-self: flex-end; /* Assure que le bouton reste à droite */
}

.description {
    font-size: 1rem;
    font-style: italic;
    color: var(--black);
}

.inline {
    display: flex;
    align-items: center;
    gap: 8px;
}

</style>