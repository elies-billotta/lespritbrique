<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
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
                    <p>© 1930</p>
                    <p>L'ESPRIT BRIQUE</p>
                    <p> {{title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import ImageGallery from '@/components/elements/ImageGallery.vue';
import MyButton from '@/components/buttons/MyButton.vue';

const props = defineProps({
    title: String,
    isVisible: Boolean,
    text: String,
    images: Array,
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

.modal-content::before {
    content: '';
    position: absolute;
    background-color: rgba(199, 192, 184, 0.406);
    z-index: -1; 
}

.btn {
    margin-bottom: 8px;
}

.modal-content {
    display: flex;
    background-color: var(--white);
    padding: 20px;
    max-width: 60vw;
    height: 70vh;
    overflow: hidden;
    border-radius: 2px;
    transform: rotate(-2deg);
    background-image: url('@/assets/images/paperboard-yellow-texture.jpg');
    background-size: cover;
    opacity: 1;
}

.modal-body {
    display: flex;
    flex-direction: column;
    border: 5px solid var(--black);
    padding: 20px;
    border-radius: 2px;
}

.content {
    flex: 1; /* Prendre tout l'espace disponible sauf pour la row */
    display: flex;
    flex-direction: row;
}

.images-column,
.text-column {
    flex: 1; /* Chaque colonne prendra une part égale de l'espace disponible */
    display: flex;
    flex-direction: column;
    padding:5px;
}

.images-column {
    justify-content: center; /* Centrer verticalement le contenu */
    align-items: center; /* Centrer horizontalement le contenu */
}

.text-column {
    display: flex;
    flex-direction: column; /* Disposer les éléments en colonne */
    justify-content: space-between; /* Pousse le bouton vers le bas */
    flex: 1; /* Permet à la colonne de prendre tout l'espace disponible */
}


.text-column h2 {
    width: 100%;
    text-align: center;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Alignement vertical centré */
    margin-top: auto; /* Pousse la row vers le bas */
    padding : 5px;

}

.row p {
    color : var(--black-hover);
}
</style>
