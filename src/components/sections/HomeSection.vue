<template>
    <Section class="no-padding-section" :backgroundColor="'var(--primary-color)'" :columns="1">
        <div class="main-image-container">
            <img src="@/assets/images/logo-color.png" alt="Section 1" class="main-image" />
        </div>
    </Section>
</template>

<script setup>
import Section from '@/components/Section.vue';
</script>

<style scoped>
.no-padding-section {
    padding: 0 !important;
}

.main-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.main-image {
    max-width: 50%;
    height: auto;
}

@media (max-width: 1024px) {
    .main-image {
        max-width: 100%;
    }
}
</style>