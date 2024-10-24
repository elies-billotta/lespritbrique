<template>
    <div class="music">
        <IconButton id="music" :cooldownDuration="2500" :icon1="musicIcon" :icon2="stopMusicIcon" :onClick="toggleMusic" />
        <div v-if="isPlaying" class="volume-container">
            <input id="volume-control" class="volume-control" type="range" min="0" max="0.25" step="0.01"
                v-model="localVolume" @input="updateVolume" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import stopMusicIcon from '@/assets/icons/nomusic.png';
import musicIcon from '@/assets/icons/music.png';
import IconButton from '@/components/buttons/IconButton.vue';

const props = defineProps({
    isPlaying: Boolean,
    volume: Number,
    currentMusic: String,
});

const emit = defineEmits(['toggle-music', 'update-volume']);
const localVolume = ref(null);

watch(() => props.volume, (newVolume) => {
    localVolume.value = newVolume;
    localStorage.setItem('volume', newVolume);
});


const toggleMusic = () => {
    emit('toggle-music');
};

const updateVolume = () => {
    emit('update-volume', localVolume.value);
};

onMounted(() => {
    const storedVolume = localStorage.getItem('volume');
    if (storedVolume) {
        localVolume.value = parseFloat(storedVolume);
    }
    else localVolume.value = props.volume;
});
</script>

<style scoped>
.music {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}

.iconImg {
    width: 20px;
    height: 20px;
}

.icon:hover {
    cursor: pointer;
    background-color: var(--black-hover);
}

.volume-container {
    display: flex;
    align-items: center;
}

.volume-control {
    -webkit-appearance: none;
    width: 80px;
    height: 5px;
    background: var(--black);
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    border: 2px solid var(--black);
    margin-bottom: 0px;
}

.volume-control::-webkit-slider-runnable-track {
    height: 5px;
    background: var(--black);
    border-radius: 20px;
}

.volume-control::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: var(--secondary-color);
    border: 2px solid var(--black);
    border-radius: 100%;
    cursor: pointer;
    margin-top: -5px;
}

.volume-control::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: var(--secondary-color);
    border: 2px solid var(--black);
    border-radius: 50%;
}

.volume-control::-moz-range-track {
    height: 5px;
    background: var(--black);
    border-radius: 5px;
}

.volume-control::-ms-thumb {
    width: 16px;
    height: 16px;
    background: var(--secondary-color);
    border: 2px solid var(--black);
    border-radius: 50%;
}

.volume-control::-ms-track {
    height: 5px;
    background: var(--black);
    border-radius: 5px;
    border: none;
    color: transparent;
}
</style>
