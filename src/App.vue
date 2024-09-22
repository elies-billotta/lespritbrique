<template>
  <Loader />
  <div id="app">
    <MenuButton :isFirstSectionVisible="isFirstSectionVisible" :toggleDrawer="toggleDrawer" />
    <Drawer :isDrawerOpen="isDrawerOpen" :sections="sectionNames" @close-drawer="toggleDrawer" />
    <div id="sections">
      <HomeSection id="ACCUEIL" />
      <AboutSection id="A PROPOS" />
      <SkillsSection id="COMPETENCES" />
      <CardSection v-if="!isMobile" id="RÉALISATIONS" :cardsData="cardsData" />
      <CardSectionResponsive v-if="isMobile" id="RÉALISATIONS" :cardsData="cardsData" />
      <ShopSection id="BOUTIQUE" />  
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
import Drawer from '@/components/Drawer.vue';
import CardSection from '@/components/sections/CardSection.vue';
import Loader from '@/components/Loader.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import FooterSection from '@/components/Footer.vue';
import ShopSection from '@/components/sections/ShopSection.vue';
import CardSectionResponsive from '@/components/sections/CardSectionResponsive.vue';

const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);
const sectionNames = ref([]);
const cardsData = [
  { title: "BRIQUES D'EXPOSITION", imageSrc: 'art-of-brick.png', sizeX: 400 },
  { title: 'KITS SUR MESURE', imageSrc: 'image2.jpg' },
  { title: 'Projet 3', imageSrc: 'image3.jpg' },
];

const isMobile = ref(false);

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

onMounted(() => {
  observeFirstSection();
  sectionNames.value = Array.from(document.getElementById('sections').children).map((section) => section.id);
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>