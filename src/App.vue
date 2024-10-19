<template>
  <OldTvShader v-if="isShaderActive" />
  <Loader @documentLoaded="handleDocumentLoaded" />
  <div id="app" :style="{ clipPath: clipPathStyle }" @transitionend="handleTransitionEnd">
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
      @toggleShader="toggleShader"
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
import artofbrick from '@/assets/images/art-of-brick.png';
import StartSound from '@/assets/audio/start.mp3';
import StopSound from '@/assets/audio/stop.mp3';
import OldTvShader from '@/components/OldTvShader.vue';

const isPlaying = ref(false);
const volume = ref(0.2);
const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);
const sectionNames = ref([]);
const cardsData = [
  { title: 'GROUPE PALOMBI', imageSrc: orderSpecial, sizeX: 20, link: 'https://www.groupe-palombi.com/' },
  { title: 'ARTOFBRICK 2025', imageSrc: artofbrick, sizeX: 20, link: 'https://www.artofbrick2025.com/' },
];
const isMobile = ref(false);
const currentMusic = ref('');
const audioElement = ref(null);
const clickSoundElement = ref(null);
const isToggling = ref(false);
const isLoaded = ref(false);  
const clipPathStyle = ref('circle(0% at 50% 50%)'); 
const isShaderActive = ref(true);

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
  if (localStorage.getItem('activeShader') == 'false') {
    toggleShader();
  }
  if (localStorage.getItem('volume')) {
    volume.value = parseFloat(localStorage.getItem('volume'));
  }
  if(localStorage.getItem('music') == 'true'){
    localStorage.setItem('music', 'false');
  } 
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const handleDocumentLoaded = () => {
  isLoaded.value = true; 
  clipPathStyle.value = 'circle(150% at 50% 50%)'; 
};

const handleTransitionEnd = () => {
    if (isLoaded.value)
    clipPathStyle.value = 'none'; 
};

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
    localStorage.setItem('volume', audioElement.value.volume);
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

const toggleShader = () => {
  isShaderActive.value = !isShaderActive.value;
};
</script>


<style scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 3s ease;
  background-color: black;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
