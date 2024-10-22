<template>
    <div class="row">
        <p>© 2024</p>
        <p>L'ESPRIT BRIQUE</p>
        <p>{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>()
</script>
<style scoped>
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding: 5px;
}

.row p {
    color: var(--black-hover);
}
</style>
