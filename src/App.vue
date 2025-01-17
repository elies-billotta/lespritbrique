<template>
  <Loader v-show="!isLoadingComplete" />
  <div v-show="isLoadingComplete" id="app">
    <MyMenuBanner />
    <RouterView v-slot="{ Component }" :key="$router.push">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <BrickSeparator />
    <RealisationSection id="realisations" />
    <Gallery @imagesLoaded="handleGalleryLoaded" />
    <InfoSection id="infos" />
    <ContactSection id="contact" />
    <BrickSeparator />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Loader from '@/components/elements/Loader.vue';
import BrickSeparator from '@/components/elements/BrickSeparator/BrickSeparator.vue';
import RealisationSection from '@/components/sections/RealisationSection.vue';
import Gallery from '@/components/elements/Gallery.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import MyMenuBanner from '@/components/elements/MyMenuBanner.vue';
import InfoSection from '@/components/sections/InfoSection.vue';
import Footer from '@/components/elements/Footer.vue';

const isLoadingComplete = ref(false);

const handleGalleryLoaded = () => {
  handleLoadingComplete();
};

const handleLoadingComplete = () => {
  isLoadingComplete.value = true;
};

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
