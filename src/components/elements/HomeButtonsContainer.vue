<template>
    <div class="buttons-wrapper">
        <div class="buttons-container">
            <Bubble 
                v-for="(section, index) in firstLineButtons" 
                :key="index" 
                :text="section" 
                :url="getUrl(section)"
                :invertWidth="getInvertWidth(index)" 
                :invertHeight="false"
                :class="{'fade-in': true, [`fade-in-delay-${index}`]: true}"
            />
        </div>
        <div class="buttons-container">
            <Bubble 
                v-for="(section, index) in secondLineButtons" 
                :key="index" 
                :text="section" 
                :url="getUrl(section)"
                :invertWidth="getInvertWidth(index + firstLineButtons.length)" 
                :invertHeight="true" 
                :class="{'fade-in': true, [`fade-in-delay-${index + firstLineButtons.length}`]: true}"/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Bubble from '@/components/buttons/Bubble.vue';

const props = defineProps({
    buttons: {
        type: Array,
        required: true,
    },
});

const half = computed(() => Math.ceil(props.buttons.length / 2));
const firstLineButtons = computed(() => props.buttons.slice(0, half.value));
const secondLineButtons = computed(() => props.buttons.slice(half.value));

function getInvertWidth(index) {
    return index % 2 !== 0;
}

function getUrl(section) {
    const urlMap = {
        'A PROPOS': '/about',
        'BOUTIQUE': 'https://shop.lespritbrique.com',
        'CONTACT': '/contact',
        'RÉALISATIONS': '/realisations',
    };

    return urlMap[section] || '#';
}
</script>

<style>
.buttons-wrapper {
    display: flex;
    flex-direction: column; /* Par défaut, sur mobile, les boutons seront en colonne */
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
}

.buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
}

/* Animation fade-in */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards; /* Durée de l'animation */
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fade-in-delay-0 { animation-delay: 2.5s; }
.fade-in-delay-1 { animation-delay: 2.9s; }
.fade-in-delay-2 { animation-delay: 3.4s; }
.fade-in-delay-3 { animation-delay: 3.9s; }
.fade-in-delay-4 { animation-delay: 4.4s; }


/* Pour mobile (écrans de moins de 768px), les boutons doivent être empilés dans une seule colonne */
@media (max-width: 768px) {
    .buttons-wrapper {
        flex-direction: column; /* Empiler tous les boutons verticalement sur mobile */
    }

    .buttons-container {
        flex-direction: column; /* Chaque conteneur de boutons devient une colonne sur mobile */
        width: 100%; /* S'assurer que les boutons prennent toute la largeur disponible */
        align-items: center; /* Centrer les boutons horizontalement */
        flex: 0;
    }
}

</style>
