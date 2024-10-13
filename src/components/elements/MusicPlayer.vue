<template>
    <div class="music">
        <div class="icon">
            <i v-if="!isPlaying" @click="toggleMusic" class="fa-solid fa-music"></i>
            <i v-else @click="toggleMusic" class="fa-solid fa-stop"></i>
        </div>
        <div v-if="isPlaying" class="volume-container">
            <input
                id="volume-control"
                class="volume-control"
                type="range"
                min="0"
                max="0.25"
                step="0.01"
                v-model="localVolume"
                @input="updateVolume"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    isPlaying: Boolean,
    volume: Number,
    currentMusic: String,
});

const emit = defineEmits(['toggle-music', 'update-volume']);
const localVolume = ref(props.volume);

watch(() => props.volume, (newVolume) => {
    localVolume.value = newVolume; // Synchronisez la valeur locale avec la prop volume
});

const toggleMusic = () => {
    emit('toggle-music');
};

const updateVolume = () => {
    emit('update-volume', localVolume.value);
};
</script>

<style scoped>
.music {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Centre horizontalement */
    align-items: center;    /* Centre verticalement */
}

.icon {
    width: 20px;
    height: 20px;
}

.icon i:hover{
    cursor: pointer; /* Curseur en forme de main */
    color: var(--secondary-color); /* Couleur de l'icône */
}

/* Styles pour le contrôle de volume */
.volume-container {
    display: flex; /* Utiliser flex pour aligner le contrôle de volume */
    align-items: center; /* Aligner verticalement l'input */
}

.volume-control {
    -webkit-appearance: none; /* Supprime le style par défaut sur WebKit (Chrome, Safari) */
    width: 80px; /* Largeur de l'input */
    height: 8px; /* Hauteur de la barre */
    background: var(--black); /* Couleur de la barre arrière */
    border-radius: 5px; /* Arrondir les bords */
    outline: none; /* Supprime le contour par défaut */
    cursor: pointer; /* Curseur en forme de main */
}

/* Styles pour la partie remplie (partie à gauche du curseur) */
.volume-control::-webkit-slider-runnable-track {
    height: 8px; /* Hauteur de la barre */
    background: var(--secondary-color); /* Couleur de la partie remplie */
    border-radius: 5px; /* Arrondir les bords */
}

/* Styles pour la partie non remplie (à droite du curseur) */
.volume-control::-webkit-slider-runnable-track {
    background: var(--black); /* Couleur de la barre arrière */
}

/* Styles pour le curseur (pour Chrome, Safari, et Edge) */
.volume-control::-webkit-slider-thumb {
    -webkit-appearance: none; /* Supprime le style par défaut */
    appearance: none; /* Supprime le style par défaut sur Firefox */
    width: 16px; /* Largeur du curseur */
    height: 16px; /* Hauteur du curseur */
    background: var(--secondary-color); /* Couleur du curseur */
    border: 2px solid var(--black); /* Bordure noire autour du curseur */
    border-radius: 50%; /* Arrondir le curseur */
    cursor: pointer; /* Curseur en forme de main */
    margin-top: -4px; /* Ajuste la position verticale du curseur pour alignement */
}

/* Styles pour le curseur (pour Firefox) */
.volume-control::-moz-range-thumb {
    width: 16px; /* Largeur du curseur */
    height: 16px; /* Hauteur du curseur */
    background: var(--secondary-color); /* Couleur du curseur */
    border: 2px solid var(--black); /* Bordure noire autour du curseur */
    border-radius: 50%; /* Arrondir le curseur */
}

/* Styles pour la partie de la piste arrière (pour Firefox) */
.volume-control::-moz-range-track {
    height: 8px; /* Hauteur de la barre */
    background: var(--black); /* Couleur de la barre arrière */
    border-radius: 5px; /* Arrondir les bords */
}

/* Styles pour Internet Explorer */
.volume-control::-ms-thumb {
    width: 16px; /* Largeur du curseur */
    height: 16px; /* Hauteur du curseur */
    background: var(--secondary-color); /* Couleur du curseur */
    border: 2px solid var(--black); /* Bordure noire autour du curseur */
    border-radius: 50%; /* Arrondir le curseur */
}

/* Styles pour la piste dans Internet Explorer */
.volume-control::-ms-track {
    height: 8px; /* Hauteur de la barre */
    background: var(--black); /* Couleur de la barre arrière */
    border-radius: 5px; /* Arrondir les bords */
    border: none; /* Pas de bordure */
    color: transparent; /* Couleur transparente pour la piste */
}
</style>
