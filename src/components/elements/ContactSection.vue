<template>
    <ColumnSection>
        <template #column1>
            <EmailForm/>       
        </template>
        <template #column2>
            <h2>CONTACTEZ-NOUS</h2>
            <p>Une commande personnalisée ?</p>
            <img src="../../assets/images/contact.png" alt="logo">
        </template>
    </ColumnSection>
</template>
<script setup>
import ColumnSection from '@/components/elements/ColumnSection.vue';
import EmailForm from './EmailForm.vue';
</script>
<style scoped>
img {
    width: 400px;
    height: auto;
}
</style>