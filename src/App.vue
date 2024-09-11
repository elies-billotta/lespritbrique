<template>
  <Loader/>
  <div id="app">
    <MenuButton :isFirstSectionVisible="isFirstSectionVisible" :toggleDrawer="toggleDrawer" />
    <!-- Drawer avec événement de fermeture -->
    <Drawer :isDrawerOpen="isDrawerOpen" :sections="sectionNames" @close-drawer="toggleDrawer" />
    <!-- Les sections -->
    <HomeSection id="ACCUEIL"/>
    <AboutSection id="A PROPOS"/>
    <CardSection id="RÉALISATIONS"/>
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

const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);

const sectionNames = ['ACCUEIL', 'BOUTIQUE', 'A PROPOS', 'RÉALISATIONS', 'CONTACT'];

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const observeFirstSection = () => {
  //select the first div with the class section
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
});
</script>
