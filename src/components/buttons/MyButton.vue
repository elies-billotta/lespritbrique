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
  background-color: var(--black);
  color: var(--white);
  padding: 10px 20px;
  border: 0px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 2px;
  border: 2px solid var(--black);
  transition: background-color 0.3s;
  font-family: "Super Carnival", sans-serif;
}

.button:hover {
  background-color: transparent;
  border: 2px solid var(--black);
  color: var(--black);
  border-radius: 2px;
}
</style>