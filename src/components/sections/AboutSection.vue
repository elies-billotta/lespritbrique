<template>
    <ColumnSection>
        <template #column1>
            <h2>BIENVENUE SUR<br> L'ESPRIT BRIQUE<sup>®</sup></h2>
            <img src="../../assets/images/coffee.png" alt="logo">
        </template>
        <template #column2>
            <h2>VOTRE SERVICE D'IMPRESSION UV SUR BRIQUES</h2>
            <p>L'Esprit Brique, c'est une entreprise fondée par Eliès, finaliste de la saison 4 de l'émission Lego
                Masters</p>
            <div class="center"><my-link :href="'/'">Lire la suite</my-link></div>
        </template>
    </ColumnSection>
</template>
<script setup>
import ColumnSection from '@/components/elements/columns/ColumnSection.vue';
</script>
<style scoped>
sup {
    font-size: 20px;
}

p {
    margin-top: var(--margin);
    margin-bottom : var(--margin);
}

img {
    width: 70%;
    height: auto;
    max-width: 400px;
}

.center {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
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