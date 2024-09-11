<template>
    <Section :background-color="'var(--white)'">
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </Section>
  </template>
  
  <script setup>
  import Section from '@/components/Section.vue';
  </script>
  
  <style scoped>
  </style>
  