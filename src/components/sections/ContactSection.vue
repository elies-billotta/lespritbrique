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
import EmailForm from '@/components/elements/EmailForm.vue';
</script>
<style scoped>
img {
    width: 400px;
    height: auto;
    max-width: 500px;
}
img {
        width: 70%;
        height: auto;
    }

    @media (max-width: 768px) {
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
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