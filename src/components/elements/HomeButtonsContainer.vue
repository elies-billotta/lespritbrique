<template>
    <div class="buttons-wrapper">
        <div class="buttons-container">
            <Bubble 
                v-for="(section, index) in firstLineButtons" 
                :key="index" 
                :text="section" 
                :invertWidth="getInvertWidth(index)" 
                :invertHeight="false" 
                @click="scrollIntoView(section)" 
                :class="{'fade-in': true, [`fade-in-delay-${index}`]: true}"
            />
        </div>
        <div class="buttons-container">
            <Bubble 
                v-for="(section, index) in secondLineButtons" 
                :key="index" 
                :text="section" 
                :invertWidth="getInvertWidth(index + firstLineButtons.length)" 
                :invertHeight="true" 
                @click="scrollIntoView(section)" 
                :class="{'fade-in': true, [`fade-in-delay-${index + firstLineButtons.length}`]: true}"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import Bubble from '@/components/buttons/Bubble.vue';

const props = defineProps({
    buttons: {
        type: Array,
        required: true
    }
});

const remainingButtons = ref([]);

watch(() => props.buttons, (newButtons) => {
    remainingButtons.value = newButtons.slice(1);
}, { immediate: true });

const half = computed(() => Math.ceil(remainingButtons.value.length / 2));
const firstLineButtons = computed(() => remainingButtons.value.slice(0, half.value));
const secondLineButtons = computed(() => remainingButtons.value.slice(half.value));

console.log("here");

const scrollIntoView = (name) => {
    const section = document.getElementById(name);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
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
    flex: 1;
    width: 100%;
    height: 100%;
}

.buttons-container {
    display: flex;
    justify-content: space-between; /* Correction de "space-bet" à "space-between" */
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
</style>
