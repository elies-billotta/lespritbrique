<template>
  <div :class="['section', { 'two-columns': columns === 2 }]" :style="backgroundStyle">
    <slot></slot>
  </div>
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
    default: "#var(--white)",
  },
  columns: {
    type: Number,
    default: 1,
  },
});

const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
.section {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10vh 10vw;
}

.section.two-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.section.two-columns > * {
  flex: 1;
  max-width: 50%;
}

@media (max-width: 1024px) {
  .section.two-columns {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .section.two-columns > * {
    max-width: 100%;
  }

  .section {
    padding: 50px 20px;
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

