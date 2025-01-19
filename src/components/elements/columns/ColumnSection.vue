<template>
  <section class="column-section" :class="{ 'reverse-mobile': reverseMobile}">
    <div class="column1" :class="{'center-mobile': centerMobile}">
      <slot name="column1"></slot>
    </div>
    <div :style="{ alignItems: alignItems}" class="column2" :class="{'center-mobile': centerMobile}">
      <slot name="column2"></slot>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  props : {
    right : {
      type : Boolean,
      default : false,
    },
    reverseMobile : {
      type : Boolean,
      default : false,
    }, 
    centerMobile : {
      type : Boolean,
      default : false,
    }
  },
  setup(props) {
    const alignItems = computed(() => {
      return props.right ? 'flex-end' : 'flex-start';
    });

    return {
      alignItems
    };
  }
}
</script>

<style scoped>
.column-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: var(--primary-color);
  justify-items: center;
  margin-left: var(--margin);
  margin-right: var(--margin);
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: var(--margin);
}

.column1, .column2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
}

@media (max-width: 768px) {
  .column-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .reverse-mobile {
    display: flex;
    flex-direction: column-reverse;
  }

  .center-mobile {
    justify-items: center;
    align-items: center;
  }
}
</style>
