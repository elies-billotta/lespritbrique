<template>
  <Loader />
  <div id="app">
    <MenuButton :isFirstSectionVisible="isFirstSectionVisible" :toggleDrawer="toggleDrawer" />
    <Drawer 
      :isDrawerOpen="isDrawerOpen" 
      :sections="sectionNames"
      :isPlaying="isPlaying" 
      :volume="volume" 
      @toggle-music="handleToggleMusic" 
      @update-volume="handleUpdateVolume"
      @close-drawer="toggleDrawer" 
      :currentMusic="currentMusic.value"
    />
    <div id="sections">
      <HomeSection id="ACCUEIL" :sections="sectionNames" />
      <AboutSection id="A PROPOS" />
      <CardSection v-if="!isMobile" id="RÉALISATIONS" :cardsData="cardsData" />
      <CardSectionResponsive v-if="isMobile" id="RÉALISATIONS" :cardsData="cardsData" />
      <ShopSection id="BOUTIQUE" />  
      <ContactSection id="CONTACT"/>
    </div>
    <FooterSection />
    <!-- Élément audio pour jouer la musique -->
    <audio ref="audioElement" @ended="handleMusicEnd"></audio>
    <!-- Élément audio pour le son de clic -->
    <audio ref="clickSoundElement" :src="StartSound"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MenuButton from '@/components/buttons/MenuButton.vue';
import Drawer from '@/components/elements/Drawer.vue';
import CardSection from '@/components/sections/CardSection.vue';
import Loader from '@/components/elements/Loader.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import FooterSection from '@/components/elements/Footer.vue';
import ShopSection from '@/components/sections/ShopSection.vue';
import CardSectionResponsive from '@/components/sections/CardSectionResponsive.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import orderSpecial from '@/assets/images/special-order1.png';
import StartSound from '@/assets/audio/start.mp3';
import StopSound from '@/assets/audio/stop.mp3';

// État global pour la musique
const isPlaying = ref(false);
const volume = ref(0.2); // Volume initial à 20%
const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);
const sectionNames = ref([]);
const cardsData = [
  { title: 'BRIQUES GROUPE PALOMBI', imageSrc: orderSpecial, sizeX: 400 },
];
const isMobile = ref(false);
const currentMusic = ref('');
const audioElement = ref(null); // Référence à l'élément audio principal
const clickSoundElement = ref(null); // Référence à l'élément audio du son de clic
const isToggling = ref(false); // Indicateur pour empêcher les toggles rapides

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const observeFirstSection = () => {
  const firstSection = document.querySelector('.section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isFirstSectionVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.5 }
  );
  if (firstSection) {
    observer.observe(firstSection);
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 1024;
};

const handleToggleMusic = () => {
  if (!isToggling.value) { // Vérifie si un toggle est déjà en cours
    toggleMusic();
  }
};

const handleUpdateVolume = (newVolume) => {
  volume.value = Number(newVolume); // Convertit en Number avant d'assigner
  if (audioElement.value) {
    audioElement.value.volume = volume.value; // Applique le volume à l'élément audio principal
  }
};

onMounted(() => {
  observeFirstSection();
  sectionNames.value = Array.from(document.getElementById('sections').children).map((section) => section.id);
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// Tableau contenant les fichiers audio
const audioFiles = [
  new URL('@/assets/audio/Gentlemen.mp3', import.meta.url).href,
  new URL('@/assets/audio/SwingTime.mp3', import.meta.url).href,
  new URL('@/assets/audio/BigBand.mp3', import.meta.url).href,
];

// Fonction pour jouer une musique aléatoire
const playRandomMusic = () => {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  currentMusic.value = audioFiles[randomIndex]; // Mise à jour de currentMusic avec l'URL choisie
  if (audioElement.value) {
    audioElement.value.src = currentMusic.value; // Met à jour la source de l'élément audio
    audioElement.value.volume = volume.value; // Définit le volume
    audioElement.value.play(); // Joue la musique
  }
};

// Fonction pour basculer la musique avec un délai
const toggleMusic = () => {
  isToggling.value = true; // Indique qu'un toggle est en cours

  if (!isPlaying.value) {
    // Jouer le son de démarrage
    if (clickSoundElement.value) {
      clickSoundElement.value.src = StartSound; // Assigner le son de démarrage
      clickSoundElement.value.play();
    }

    isPlaying.value = true; // Met à jour immédiatement l'état de lecture

    // Délai de 2500 ms avant de jouer la musique
    setTimeout(() => {
      playRandomMusic(); // Si aucune musique n'est en cours, on en sélectionne une
      isToggling.value = false; // Réinitialise l'indicateur de toggle
    }, 2500);
  } else {
    // Jouer le son d'arrêt
    if (clickSoundElement.value) {
      clickSoundElement.value.src = StopSound; // Assigner le son d'arrêt
      clickSoundElement.value.play();
    }
    audioElement.value.pause(); // Met la musique en pause
    isPlaying.value = false; // Met à jour l'état de lecture
    isToggling.value = false; // Réinitialise l'indicateur de toggle
  }
};

// Gérer la fin de la musique
const handleMusicEnd = () => {
  playRandomMusic(); // Relancer une nouvelle musique quand celle-ci se termine
};
</script>
