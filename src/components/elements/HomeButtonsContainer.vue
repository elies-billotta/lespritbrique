<template>
    <div class="buttons-wrapper">
        <!-- Ligne 1 -->
        <div class="buttons-container">
            <Bubble v-for="(section, index) in firstLineButtons" :key="index" :text="section" :invertWidth="getInvertWidth(index)" :invertHeight="false" @click="scrollIntoView(section)" />
        </div>
        <!-- Ligne 2 -->
        <div class="buttons-container">
            <Bubble v-for="(section, index) in secondLineButtons" :key="index" :text="section" :invertWidth="getInvertWidth(index + firstLineButtons.length)" :invertHeight="true" @click="scrollIntoView(section)" />
        </div>
    </div>
</template>

<script setup>
import Bubble from '@/components/buttons/Bubble.vue';

const props = defineProps({
    buttons: Array
});

// Exclure le premier élément du tableau
const remainingButtons = props.buttons.slice(1);

// Sépare les boutons restants en deux lignes
const half = Math.ceil(remainingButtons.length / 2);
const firstLineButtons = remainingButtons.slice(0, half);
const secondLineButtons = remainingButtons.slice(half);

const scrollIntoView = (name) => {
    const section = document.getElementById(name);
    section.scrollIntoView({ behavior: 'smooth' });
};

const getInvertWidth = (index) => {
    return index == 1 || index == 3;
};
</script>

<style>
.buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px; /* Ajoute un espace entre les lignes */
}
</style>