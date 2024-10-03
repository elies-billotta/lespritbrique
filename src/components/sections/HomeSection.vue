<template>
    <Section class="no-padding-section" :backgroundColor="'var(--primary-color)'" :columns="1">
        <template #contain>
            <div class="buttons">
                <HomeButtonsContainer :sections="['A PROPOS', 'RÉALISATIONS','BOUTIQUE', 'CONTACT']" />
            </div>
        </template>
    </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import HomeButtonsContainer from '@/components/elements/HomeButtonsContainer.vue';


const props = defineProps({
    sections: {
        type: Array,
        default: null,
    },
});
</script>

<style scoped>
.no-padding-section {
    padding: 0 !important;
    position: relative;
    height: 100vh; /* Pour couvrir toute la hauteur de l'écran */
    background-image: url('@/assets/images/logo-color.png'); /* Image en arrière-plan */
    background-size: contain; /* Ajuste la taille de l'image */
    background-repeat: no-repeat; /* Empêche la répétition de l'image */
    background-position: center; /* Centre l'image */
}

.buttons {
    position: absolute;
    top: 50%; /* Ajuste selon l'endroit où tu veux placer tes boutons */
    left: 50%;
    transform: translate(-50%, -50%); /* Centrage horizontal et vertical */
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 5;
}

@media (max-width: 1024px) {
    .no-padding-section {
        background-size: cover; /* Ajuste l'image pour les écrans plus petits */
    }
}
</style>
