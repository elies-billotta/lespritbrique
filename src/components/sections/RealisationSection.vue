<template>
    <div class="realisation-section" v-bind="$attrs">
        <h1>DERNIÈRES RÉALISATIONS</h1>
        <ImageColumn :bgVideo="videoSrc">
            <template #column1>
            </template>
            <template #column2>
                <div class="title">
                    <h2>LE 4X4 DES GAZELLES</h2>
                    <div class="inline">
                        <p class="description">Kit complet réalisé pour </p><my-link
                            :href="'https://www.maienga.com/'">Maïenga Sports
                            Events</my-link>
                    </div>
                </div>
                <div class="content">
                    <div class="text">
                        <p>Réalisé à l’occasion du futur Rallye des Gazelles 2025, le 4x4 des Gazelles est le fruit d’un
                            partenariat entre Maienga et L’Esprit Brique.
                            Constitué de 337 pièces, dont
                            certaines customisées, ce kit unique
                            est le symbole de cette aventure
                            humaine unique, rassemblant des
                            femmes du monde entier dans le
                            Sahara Marocain.</p>
                    </div>
                    <div class="btn-container">
                        <my-link class="btn" :href="'/4x4-des-gazelles'">Lire la suite</my-link>
                    </div>
                </div>
            </template>
        </ImageColumn>
    </div>
    <Gallery :images="creations" />
</template>

<script>
import ImageColumn from '@/components/elements/columns/ImageColumn.vue';
import Gallery from '@/components/elements/Gallery.vue';
import { useDataStore } from '@/stores/data';

export default {
    inheritAttrs: false,
    components: {
        ImageColumn,
        Gallery
    },
    data() {
        return {
            videoSrc: new URL('@/assets/videos/4x4-des-gazelles.mp4', import.meta.url).href,
        }
    },
    computed: {
        creations() {
            const dataStore = useDataStore();
            return dataStore.creationData || [];
        },
    },
}
</script>

<style scoped>
.italic {
    font-style: italic;
}

h1 {
    font-size: min(10vw, 6rem);
    max-width: 100%;
    text-align: center;
    padding: var(--margin);
    display: inline-block;
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

.content>.text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    gap: 1.5rem;
}

.content>.btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
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

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: center; /* ✅ Centre le bouton */
        margin-top: auto; /* ✅ Force le bouton à rester dans la section */
    }

    .btn {
        width: max-content;
    }
}
</style>