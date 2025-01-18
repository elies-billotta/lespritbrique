<script setup>
import MyMenuBanner from '@/components/elements/MyMenuBanner.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import AboutColumn from '@/components/sections/AboutSection.vue';
import BrickSeparator from '@/components/elements/BrickSeparator/BrickSeparator.vue';
import RealisationSection from '@/components/sections/RealisationSection.vue';
import Gallery from '@/components/elements/Gallery.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import InfoSection from '@/components/sections/InfoSection.vue';
import Footer from '@/components/elements/Footer.vue';
</script>

<template>
  <main>
    <MyMenuBanner/>
    <HomeSection id="home" />
    <AboutColumn />
    <BrickSeparator />
    <RealisationSection id="realisations" />
    <Gallery/>
    <InfoSection id="infos" />
    <ContactSection id="contact" />
    <Footer />
  </main>
</template>
