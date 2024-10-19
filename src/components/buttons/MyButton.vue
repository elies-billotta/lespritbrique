<template>
  <button class="button" :type="type" @click="onClick">
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    required: false,
  },
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<style scoped>
.button {
  background-color: var(--secondary-color);
  color: var(--black);
  padding: 10px 20px;
  border: 3px solid var(--black);
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
  font-family: "Super Carnival", sans-serif;
}

.button:hover {
  background-color: transparent;
}
</style>