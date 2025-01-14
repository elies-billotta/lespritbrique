<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import MyMenuBanner from '@/components/elements/MyMenuBanner.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HomeSection from '@/components/elements/HomeSection.vue'
import AboutColumn from '@/components/elements/AboutColumn.vue'
import BrickSeparator from '@/components/elements/BrickSeparator/BrickSeparator.vue'
import RealisationSection from '@/components/elements/RealisationSection.vue'
</script>

<template>
  <main>
    <MyMenuBanner />
    <HomeSection/>
    <AboutColumn/>
    <BrickSeparator/>
    <RealisationSection/>
    <AboutSection />
    <ContactSection />
  </main>
</template>
