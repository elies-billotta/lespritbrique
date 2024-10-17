<template>
    <div class="button" @click="handleClick" :class="{ disabled: isCooldown }">
        <img v-if="!isClicked" class="iconImg" :src="icon1" />
        <img v-else class="iconImg" :src="icon2" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    icon1: String,
    icon2: String,
    onClick: Function,
    cooldownDuration: {
        type: Number,
        default: 0,
    },
});

const isClicked = ref(false);
const isCooldown = ref(false);

onMounted(() => {
    const savedState = localStorage.getItem(props.id);
    isClicked.value = savedState === 'true';
});

const handleClick = () => {
    if (isCooldown.value) return;
    isClicked.value = !isClicked.value;
    localStorage.setItem(props.id, isClicked.value.toString());
    if (props.onClick) {
        props.onClick();
    }
    isCooldown.value = true;
    setTimeout(() => {
        isCooldown.value = false;
    }, props.cooldownDuration);
};
</script>

<style scoped>
.button {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    transition: opacity 0.2s; /* Pour une meilleure transition visuelle */
}

.iconImg {
    width: 20px;
    height: 20px;
}

.button:hover {
    cursor: pointer;
    background-color: var(--black-hover);
}

.button.disabled {
    opacity: 0.5; /* Change l'opacité pour indiquer le cooldown */
    pointer-events: none; /* Empêche les événements de clic */
}
</style>
