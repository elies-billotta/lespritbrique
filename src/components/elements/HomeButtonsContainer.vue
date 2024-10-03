<template>
    <div class="buttons-container" v-for="(section, index) in sections" :key="index">
        <MyButton :text="section" @click="scrollIntoView(index)" />
    </div>
</template>

<script setup>
import MyButton from '@/components/buttons/MyButton.vue';
import Bubble from '@/components//buttons/Bubble.vue';

const props = defineProps({
    sections: Array
});

const scrollIntoView = (index) => {
    const section = document.getElementById(props.sections[index]);
    section.scrollIntoView({ behavior: 'smooth' });
};

</script>
<style>
.buttons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>