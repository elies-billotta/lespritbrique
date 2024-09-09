<template>
  <div id="app">
    <MenuButton :isFirstSectionVisible="isFirstSectionVisible" :toggleDrawer="toggleDrawer" />

    <!-- Drawer avec événement de fermeture -->
    <Drawer :isDrawerOpen="isDrawerOpen" :sections="sectionNames" @close-drawer="toggleDrawer" />

    <!-- Les sections -->
    <Section v-for="(section, index) in sectionNames" :key="index" :title="section"
      :backgroundColor="getBackgroundColor(index)" :ref="'section-' + index">
    </Section>
    <CardSection/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuButton from './components/MenuButton.vue';
import Drawer from './components/Drawer.vue';
import Section from './components/Section.vue';
import CardSection from './components/CardSection.vue';

const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true);

const sectionNames = ['Accueil', 'A Propos', 'Réalisations', 'Contact'];

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const getBackgroundColor = (index) => {
  const colors = ["var(--primary-color)", 'var(--white)', 'var(--white)', 'var(--primary-color)'];
  return colors[index % colors.length];
};

const observeFirstSection = () => {
  const firstSection = document.querySelector('section');

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
