<template>
    <ColumnSection>
        <template #column1>
            <h2>BIENVENUE SUR L'ESPRIT BRIQUE</h2>
            <img src="../../assets/images/coffee.png" alt="logo">
        </template>
        <template #column2>
            <h2>VOTRE SERVICE D'IMPRESSION UV SUR BRIQUES</h2>
            <p>L'Esprit Brique, c'est une entreprise fondée par Eliès, finaliste de la saison 4 de l'émission Lego
                Masters</p>
            <Button>Test</Button>
        </template>
    </ColumnSection>
</template>
<script setup>
import ColumnSection from '@/components/elements/ColumnSection.vue';
</script>
<style scoped>
img {
        width: 70%;
        height: auto;
        max-width: 500px;
    }

    @media (max-width: 768px) {
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 2rem;
        }
    }
</style>