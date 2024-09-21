<template>
  <Loader />
  <div id="app">
    <MenuButton :isFirstSectionVisible="isFirstSectionVisible" :toggleDrawer="toggleDrawer" />
    <!-- Drawer avec événement de fermeture -->
    <Drawer :isDrawerOpen="isDrawerOpen" :sections="sectionNames" @close-drawer="toggleDrawer" />
    <!-- Les sections -->
    <div id="sections">
      <HomeSection id="ACCUEIL" />
      <AboutSection id="A PROPOS" />
      <SkillsSection id="COMPETENCES" />
      <CardSection id="RÉALISATIONS" />
      <ShopSection id="BOUTIQUE"/>  
    </div>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
import Drawer from '@/components/Drawer.vue';
import CardSection from '@/components/sections/CardSection.vue';
import Loader from '@/components/Loader.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import FooterSection from '@/components/Footer.vue';
import ShopSection from '@/components/sections/ShopSection.vue';

const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);
const sectionNames = ref([]); // ref([]) correctement initialisé

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const observeFirstSection = () => {
  // Sélection de la première div avec la classe section
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

onMounted(() => {
  observeFirstSection();

  // Correction : utilisation de .value pour modifier le ref sectionNames
  sectionNames.value = Array.from(document.getElementById('sections').children).map((section) => section.id);
});
</script>
