<template>
    <Section class="no-padding-section" :backgroundColor="'var(--primary-color)'" :columns="1">
        <template #contain>
            <div class="buttons">
                <HomeButtonsContainer :buttons="['A PROPOS', 'BOUTIQUE', 'RÉALISATIONS', 'CONTACT']" />
            </div>
        </template>
    </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import HomeButtonsContainer from '@/components/elements/HomeButtonsContainer.vue';
</script>

<style scoped>
.no-padding-section {
    padding: 0 !important;
    position: relative;
    height: 100vh;
    background-image: url('@/assets/images/logo-color.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.buttons {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 5;
    width: 50%;
    height: 75%;
}

/* Masquer les boutons sur mobile */
@media (max-width: 1024px) {
    .no-padding-section {
        background-size: contain;
    }
}
</style>
