<template>
    <ColumnSection>
        <template #column1>
            <EmailForm />
        </template>
        <template #column2>
            <h2>CONTACTEZ-NOUS</h2>
            <p>Une commande personnalisée ?</p>
            <img src="../../assets/images/contact.png" alt="logo">
        </template>
    </ColumnSection>
</template>
<script setup>
import ColumnSection from '@/components/elements/columns/ColumnSection.vue';
import EmailForm from '@/components/elements/EmailForm.vue';
</script>
<style scoped>
img {
    height: auto;
    max-width: 400px;
    align-self: flex-end;
}

@media (max-width: 768px) {
    img {
        width: 200px;
        margin-top: 2rem;
    }
}

@media (max-width: 768px) {
    .column-section {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>