<template>
  <div :class="['section', { 'two-columns': columns === 2 }]" :style="backgroundStyle">
    <Title :title="title" :icon="icon" :description="description" />
    <div class="columns">
      <slot name="columns"></slot>
    </div>
    <div class="full-section" v-if="$slots.contain">
      <slot name="contain"></slot>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import Title from '@/components/elements/Title.vue'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  backgroundColor: {
    type: String,
    default: "var(--white)",
  },
  columns: {
    type: Number,
    default: 1,
  },
  icon: {
    type: String,
    default: null,
  }, 
  description: {
    type: String,
    default: null,
  },
});

const backgroundStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
.section {
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}

.full-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
}

.icon-container {
  margin-left: 10px;
  margin-right: 10px;
}

.columns {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: stretch;
  flex:1;
}

.columns>* {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.two-columns .columns {
  flex-wrap: wrap;
}

.two-columns .columns>* {
  flex: 1;
  max-width: 50%;
}

@media (max-width: 1024px) {
  .two-columns .columns {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .two-columns .columns>* {
    max-width: 100%;
  }

  .section {
    padding: 50px 20px;
  }
}

@media (max-width: 480px) {
  .title-wrapper h2 {
    font-size: 1.5rem;
  }

  .content {
    font-size: 0.9rem;
  }
}
</style>
