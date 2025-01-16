<template>
  <section class="column-section">
    <div class="column">
      <slot name="column1"></slot>
    </div>
    <div class="column">
      <slot name="column2"></slot>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.column-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100vh;
  background-color: var(--primary-color);
  justify-items: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 1.5rem;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
}
</style>
