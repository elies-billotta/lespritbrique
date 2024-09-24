<template>
    <button class="button" @click="onClick">
        {{ text }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    onClick: {
        type: Function,
        required: true
    },
    text: {
        type: String,
        default: ''
    }
});

const { onClick, text } = props;
</script>

<style scoped>
.button {
    background-color: var(--black);
    color: var(--white);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    font-family: "Bevellier-Regular", sans-serif;
}

.button:hover {
    background-color: var(--black-hover);
}
</style>
