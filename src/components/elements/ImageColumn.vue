<template>
    <section class="card-section">
        <div class="video-container">
            <video :src="bgVideo" autoplay loop muted playsinline>
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="column">
            <slot name="column2"></slot>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    bgVideo: String,
  },
}
</script>

<style scoped>
.card-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 400px;
    background-color: var(--primary-color);
    justify-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 2rem;
}

.column {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: var(--white);
    justify-content: space-between;
}

.video-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-right: 1px solid black;
}

video {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Ajuste la vidéo pour couvrir tout l'espace sans déformation */
}
</style>
