<script setup>
import MyMenuBanner from '@/components/elements/MyMenuBanner.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import BrickSeparator from '@/components/elements/BrickSeparator/BrickSeparator.vue';
import RealisationSection from '@/components/sections/RealisationSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import InfoSection from '@/components/sections/InfoSection.vue';
import Footer from '@/components/elements/Footer.vue';
import AboutSection from '@/components/sections/Home/AboutSection.vue';
</script>

<template>
  <main>
    <MyMenuBanner />
    <HomeSection id="home" />
    <AboutSection />
    <BrickSeparator />
    <RealisationSection id="realisations" />
    <InfoSection id="infos" />
    <ContactSection id="contact" />
    <BrickSeparator />
    <Footer />
  </main>
</template>