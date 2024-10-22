<template>
    <div class="row">
        <p class="first">© 2024</p>
        <p class="middle">L'ESPRIT BRIQUE</p>
        <p class="end">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>()
</script>
<style scoped>
.row {
    position: relative; /* Position relative pour contenir les éléments absolus */
    display: flex;
    align-items: center;
    width: 100%;
}

.first {
    flex: 0 0 auto;
    margin-right: auto; /* Aligné à gauche */
}

.middle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /* Centrage parfait, peu importe la largeur */
}

.end {
    flex: 0 0 auto;
    margin-left: auto; /* Aligné à droite */
    text-align: right;
}

</style>
