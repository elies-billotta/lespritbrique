<template>
    <div class="container">
        <Stud v-for="i in 50" :key="i"/>
    </div>
</template>

<script setup>
import Stud from './Stud.vue';
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    flex-direction: row;
}
</style>
