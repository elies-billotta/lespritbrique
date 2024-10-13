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
    <audio ref="audioElement" @ended="handleMusicEnd"></audio>
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

const isPlaying = ref(false);
const volume = ref(0.2);
const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);
const sectionNames = ref([]);
const cardsData = [
  { title: 'BRIQUES GROUPE PALOMBI', imageSrc: orderSpecial, sizeX: 400 },
];
const isMobile = ref(false);
const currentMusic = ref('');
const audioElement = ref(null);
const clickSoundElement = ref(null);
const isToggling = ref(false);

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
  if (!isToggling.value) {
    toggleMusic();
  }
};

const handleUpdateVolume = (newVolume) => {
  volume.value = Number(newVolume);
  if (audioElement.value) {
    audioElement.value.volume = volume.value;
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

const audioFiles = [
  new URL('@/assets/audio/Gentlemen.mp3', import.meta.url).href,
  new URL('@/assets/audio/SwingTime.mp3', import.meta.url).href,
  new URL('@/assets/audio/BigBand.mp3', import.meta.url).href,
];

const playRandomMusic = () => {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  currentMusic.value = audioFiles[randomIndex];
  if (audioElement.value) {
    audioElement.value.src = currentMusic.value;
    audioElement.value.volume = volume.value;
    audioElement.value.play();
  }
};

const toggleMusic = () => {
  isToggling.value = true;

  if (!isPlaying.value) {
    if (clickSoundElement.value) {
      clickSoundElement.value.src = StartSound;
      clickSoundElement.value.play();
    }

    isPlaying.value = true;

    setTimeout(() => {
      playRandomMusic();
      isToggling.value = false;
    }, 2500);
  } else {
    if (clickSoundElement.value) {
      clickSoundElement.value.src = StopSound;
      clickSoundElement.value.play();
    }
    audioElement.value.pause();
    isPlaying.value = false;
    isToggling.value = false;
  }
};

const handleMusicEnd = () => {
  playRandomMusic();
};
</script>
