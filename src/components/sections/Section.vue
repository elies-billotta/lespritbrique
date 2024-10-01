<template>
  <div :class="['section', { 'two-columns': columns === 2 }]" :style="backgroundStyle">
    <div class="title-wrapper" v-if="title">
      <h1>{{ title }}</h1>
      <div class="bandeau">
        <Line/>
        <img class="small-icon" :src="icon" alt="brick icon" />
        <Line/>
      </div>
      <slot class="description" name="description"></slot>
    </div>
    <div class="columns">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import Line from '@/components/elements/Line.vue';

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
  }
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
  gap:30px;
}

.title-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bandeau {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.description {
  text-align: center;
}

.small-icon {
  width: 20px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
}

.icon-container {
  margin-left: 10px;
  margin-right: 10px;
}

.columns {
  display: flex;
  justify-content: center;
  gap : 20px;
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
