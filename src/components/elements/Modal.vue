<template>
    <div v-show="isVisible || isClosing" class="modal-overlay" @click="closeModal">
        <div :class="['modal-content', isClosing ? 'fade-out' : 'fade-in']" @click.stop>
            <div class="modal-body">
                <div class="content">
                    <div class="images-column">
                        <ImageGallery :images="images" />
                    </div>
                    <div class="text-column">
                        <h2>{{ title }}</h2>
                        <p>{{ text }}</p>
                        <MyButton class="btn" @click="closeModal" text="FERMER" />
                    </div>
                </div>
                <div class="row">
                    <p>© 2024</p>
                    <p>L'ESPRIT BRIQUE</p>
                    <p>{{ title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import ImageGallery from '@/components/elements/ImageGallery.vue';
import MyButton from '@/components/buttons/MyButton.vue';

import { ref } from 'vue';

const props = defineProps({
    title: String,
    isVisible: Boolean,
    text: String,
    images: Array,
});

const emit = defineEmits(['close']);

const isClosing = ref(false);

const closeModal = () => {
    isClosing.value = true;
    emit('close');
    isClosing.value = false;
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
    opacity: 1;
    transition: opacity 0.5s ease;
}

.modal-content {
    display: flex;
    background-color: var(--white);
    padding: 20px;
    max-width: 60vw;
    height: 70vh;
    overflow: hidden;
    border-radius: 2px;
    background-image: url('@/assets/images/paperboard-yellow-texture.jpg');
    background-size: cover;
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: rotate(0deg);
}

.fade-in {
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    from {
        transform: rotate(-50deg);
    }

    to {
        transform: rotate(-3deg);
    }
}

.fade-out {
    animation: fadeOut 0.5s forwards;
}

@keyframes fadeOut {
    from {
        transform: rotate(-3deg);
    }

    to {
        transform: rotate(-3deg);
    }
}

.btn {
    margin-bottom: 8px;
}

.modal-body {
    display: flex;
    flex-direction: column;
    border: 5px solid var(--black);
    padding: 20px;
    border-radius: 2px;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: row;
}

.images-column,
.text-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.images-column {
    justify-content: center;
    align-items: center;
}

.text-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.text-column h2 {
    width: 100%;
    text-align: center;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding: 5px;
}

.row p {
    color: var(--black-hover);
}
</style>