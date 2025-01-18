<script setup>
import MyMenuBanner from '@/components/elements/MyMenuBanner.vue';
import KitSection from '@/components/sections/KitSection.vue';
import BrickSeparator from '@/components/elements/BrickSeparator/BrickSeparator.vue';
import RealisationSection from '@/components/sections/RealisationSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import InfoSection from '@/components/sections/InfoSection.vue';
import Footer from '@/components/elements/Footer.vue';
import DescriptionSection from '@/components/sections/CreationSection.vue';
</script>

<template>
    <main>
        <MyMenuBanner />
        <KitSection />
        <DescriptionSection/>
        <BrickSeparator />
        <RealisationSection id="realisations" />
        <InfoSection id="infos" />
        <ContactSection id="contact" />
        <BrickSeparator />
        <Footer />
    </main>
</template>
