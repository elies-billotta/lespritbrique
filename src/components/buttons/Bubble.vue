<template>
  <MyLink :href="url" ref="wrapper" class="button-wrapper">
    <button ref="button" class="button" :type="type">
      <img :src="img" alt="Bubble" class="bubble-icon"
        :class="{ 'invert-width': invertWidth, 'invert-height': invertHeight, 'invert-width.invert-height': invertHeight && invertWidth }" />
      <div class="text-container" ref="textElement">
        <span class="button-text">{{ text }}</span>
      </div>
    </button>
  </myLink>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Bubble from '@/assets/icons/bubble.svg';
import MyLink from '../elements/MyLink.vue';

const props = defineProps({
  img: {
    type: String,
    default: Bubble
  },
  text: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  },
  invertWidth: {
    type: Boolean,
    default: false
  },
  invertHeight: {
    type: Boolean,
    default: false
  }
});

const button = ref(null);

function getRandomDuration() {
  return Math.random() * (12 - 8) + 8;
}

onMounted(() => {
  const btn = button.value;
  const randomDuration = getRandomDuration();
  btn.style.animationDuration = `${randomDuration}s`;
  btn.classList.add('animate-swing');
});
</script>

<style scoped>
a,
a:hover,
a::after {
  all: unset;
}

.button-wrapper {
  display: inline-block;
  position: relative;
}

.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20vw;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(5deg);
  }

  66% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.animate-swing {
  animation: swing infinite;
  animation-timing-function: linear;
}

.button-wrapper:hover {
  transform: scale(1.1);

}

.bubble-icon {
  width: 100%;
  height: auto;
  display: block;
}

.invert-width {
  transform: scaleX(-1);
}

.invert-width.invert-height {
  transform: scaleX(-1) scaleY(-1);
}

.invert-height {
  transform: scaleY(-1);
}

.button-text {
  position: absolute;
  z-index: 1;
  text-align: center;
  font-family: 'Super Carnival', sans-serif;
  font-size: 1.9vw;
  color: var(--black);
  transition: transform 0.3s;
}

.text-container {
  width: calc(100% - (20vw * 0.27));
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: auto;
}

.invert-width~.text-container {
  justify-content: center;
  left: auto;
  right: 0;
}
</style>
