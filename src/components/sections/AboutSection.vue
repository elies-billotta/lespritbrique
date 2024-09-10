<template>
    <Section>
      <div class="flex">
        <div>
          <h2>À propos</h2>
          <p>Je suis un développeur web passionné par la création de sites web modernes et performants. J'aime
            travailler avec les dernières technologies pour offrir des expériences utilisateur uniques et
            innovantes.
          </p>
        </div>
        <div>
          <h2>Compétences</h2>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>
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
    flex: 1 1 45%; /* Largeur minimale de 45%, les éléments se réduisent et se replient si nécessaire */
  }
  
  /* Ajustement automatique sans media queries spécifiques */
  </style>
  