<template>
  <section class="section" :style="backgroundStyle">
    <div class="section-content">
      <h2>{{ title }}</h2>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: "Section Title",
  },
  backgroundColor: {
    type: String,
    default: "#ffffff", // Couleur de fond par défaut
  },
});

const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.section-content {
  text-align: center;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.content {
  font-size: 1.2rem;
  max-width: 800px;
  color: #fff;
}

@media (max-width: 768px) {
  .section h2 {
    font-size: 2rem;
  }

  .content {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section h2 {
    font-size: 1.5rem;
  }

  .content {
    font-size: 0.9rem;
  }
}
</style>
