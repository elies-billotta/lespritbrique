<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-100 -100 700 400" :style="svgStyle">
        <g class="rotate" :style="{ animationDelay: delay }">
            <path class="cls-1" d="M2.5,2.5h349.76l.24,69s84,7,126,63c-51-20-125-18-125-18l-.07,78H2.5V2.5Z" />
        </g>
        <g class="rotate" :style="{ animationDelay: delay }">
            <path class="cls-2" d="M355.93,197H0V0h354.75l.24,69.24c6.17.7,24,3.2,45.55,10.39,24.29,8.1,57.88,23.93,79.96,53.37l5.28,7.04-8.19-3.21c-44.81-17.57-108.44-17.98-121.59-17.86l-.07,78.04ZM5,192h345.93l.07-77.93,2.43-.07c.7-.02,67.2-1.6,117.46,15.1-42.31-48.17-117.81-55.04-118.6-55.11l-2.28-.19-.24-68.8H5v187Z" />
        </g>
    </svg>
</template>

<script setup>
import { defineProps, computed, onMounted } from 'vue';

const props = defineProps({
    mirrorHorizontal: Boolean,
    mirrorVertical: Boolean
});

const svgStyle = computed(() => {
    let transform = '';

    if (props.mirrorHorizontal) {
        transform += 'scale(-1, 1) ';
    }
    if (props.mirrorVertical) {
        transform += 'scale(1, -1) ';
    }

    return {
        transform,
        transformOrigin: 'center',
        width: '100%',
        height: 'auto'
    };
});

// Générer un délai d'animation aléatoire entre 0 et 5 secondes
const delay = computed(() => `${Math.random() * 2}s`);

// Assurer que les animations démarrent immédiatement
onMounted(() => {
    document.querySelectorAll('.rotate').forEach(element => {
        element.style.animationPlayState = 'running';
    });
});
</script>

<style scoped>
.rotate {
    animation: rotateBounce 10s infinite;
    transform-origin: 150px 100px; /* Point de rotation */
    animation-timing-function: linear;
    animation-play-state: running; /* Commence en pause pour éviter le démarrage immédiat lors du chargement */
}

.cls-1 {
    fill: #f9f9f9;
}

.cls-2 {
    fill: var(--black);
}

@keyframes rotateBounce {
    0% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(5deg);
    }
}
</style>
