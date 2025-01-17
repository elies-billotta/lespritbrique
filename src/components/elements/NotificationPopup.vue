<template>
  <div v-if="visible" class="notification" :class="type">
    <p>{{ message }}</p>
    <button @click="closeNotification">x</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const visible = ref(true);

const closeNotification = () => {
  visible.value = false;
};

watch(() => props.message, () => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
});
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #444;
  color: black;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slide-in 0.5s ease-out;
  z-index: 1000;
  gap: 10px;
}

.notification.success {
  background-color: var(--white)
}

.notification.error {
  background-color: var(--red);
}

.notification.info {
  background-color: var(--primary-color)
}

.notification button {
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>