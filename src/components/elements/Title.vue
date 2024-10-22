<template>
    <div class="title-wrapper" v-if="title">
        <h1>{{ title }}</h1>
        <div class="bandeau">
            <Line />
            <img class="small-icon" :src="icon" alt="brick icon" />
            <Line />
        </div>
        <p class="description">{{description}}</p>
    </div>
</template>

<script setup>
import Line from '@/components/elements/Line.vue';
const props = defineProps({
    title: {
        type: [String, null],
        required: true
    },
    icon: {
        type: [String, null],
        default: '@/assets/icons/brick.svg'
    },
    description: {
        type: [String, null], // Accepter String ou null
        default: null
    }
});
</script>
<style scoped>
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

</style>

