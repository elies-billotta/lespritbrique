<template>
    <section class="home-section">
        <div class="home-section__content">
            <img src="../../assets/images/logo-color.png" alt="logo" width="500" height="500">
            <h3 class="home-section__description">Impression UV sur jouets de construction et kits en briques sur mesure.</h3>
        </div>
    </section>
</template>
<script setup>
</script>

<style scoped>
.home-section {
    background-image: url('http://www.photo-paysage.com/albums/userpics/10001/Cascade_-15.JPG');
    color: var(--white);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

.home-section__description{
    color : white;
}
</style>