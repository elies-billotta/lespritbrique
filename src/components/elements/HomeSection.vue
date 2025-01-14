<template>
    <section class="home-section">
        <div class="home-section__content">
            <img src="../../assets/images/logo-color.png" alt="logo" width="500" height="500">
            <h3 class="home-section__description">Impression UV sur jouets de construction et kits en briques sur mesure."</h3>
        </div>
    </section>
</template>
<script setup>
</script>

<style scoped>
.home-section {
    background-image: url('../../assets/images/lm.jpg');
    color: var(--white);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid black;
}

.home-section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
</style>