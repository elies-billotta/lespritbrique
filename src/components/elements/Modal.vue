<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button class="close-button" @click="closeModal">&times;</button>
            <h2>{{ title }}</h2>
            <!-- <img :src="imageSrc" alt="Card image" class="modal-image" /> -->
            <p> {{ props.text }}</p>
            <!-- Add more details as needed -->
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    isVisible: Boolean,
    text: String,
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    text-align: center;
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
}

.modal-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
}
</style>