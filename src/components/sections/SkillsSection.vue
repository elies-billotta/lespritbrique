<template>
    <Section :background-color="'var(--white)'">
      <div>
        
      </div>
       </Section>
  </template>
  
  <script setup>
  import Section from '@/components/Section.vue';
  </script>
  
  <style scoped>
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--black);
  }
  
  p, ul {
    font-size: 1.2rem;
    max-width: 800px;
    color: var(--black);
  }
  
  .flex {
    display: flex;
    flex-wrap: wrap; /* Permet aux éléments de se replier automatiquement */
    justify-content: space-between;
    align-items: center; /* Alignement des éléments au début */
    gap: 20px; /* Espacement entre les éléments flex */
  }
  
  .flex > div {
    flex: 1 1 45%;
  }
  </style>
  