<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="2" :title="'CONTACT'">
    <template #description>
      <p>UNE QUESTION ? UNE DEMANDE ? CONTACTEZ-NOUS</p>
    </template>
    <EmailForm/>
    <img class="img-column" src="@/assets/images/art-of-brick.png" alt="Contact us" /> 
  </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import EmailForm from '@/components/elements/EmailForm.vue';
</script>

<style scoped>
.text-column h2 {
  margin-bottom: 20px;
}

.text-column p {
  margin-bottom: 20px;
}
</style>