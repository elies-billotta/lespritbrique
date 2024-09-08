<template>
  <div id="app">
    <MenuButton
      :isFirstSectionVisible="isFirstSectionVisible"
      :toggleDrawer="toggleDrawer"
    />

    <!-- Drawer avec événement de fermeture -->
    <Drawer
      :isDrawerOpen="isDrawerOpen"
      :sections="sectionNames"
      @close-drawer="toggleDrawer"
    >
    </Drawer>

    <!-- Les sections -->
    <Section
      v-for="(section, index) in sectionNames"
      :key="index"
      :title="section"
      :backgroundColor="getBackgroundColor(index)"
      :ref="'section-' + index"
    >
      <p>Contenu de {{ section }}</p>
    </Section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuButton from './components/MenuButton.vue';
import Drawer from './components/Drawer.vue';
import Section from './components/Section.vue';

// État pour gérer l'ouverture/fermeture du drawer
const isDrawerOpen = ref(false);
const isFirstSectionVisible = ref(true); // Pour la visibilité du bouton

// Liste des sections du site
const sectionNames = ['Bienvenue', 'Nos services', 'Notre équipe', 'Contact'];

// Fonction pour gérer l'ouverture/fermeture du drawer
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

// Fonction pour attribuer une couleur différente à chaque section
const getBackgroundColor = (index) => {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
  return colors[index % colors.length];
};

// Observer la première section
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

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

section {
  padding: 20px;
  height: 100vh;
  scroll-snap-align: start;
}
</style>
