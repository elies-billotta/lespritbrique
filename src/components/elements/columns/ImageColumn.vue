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
    background-color: var(--primary-color);
    justify-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 2rem;
    width: 100%;
}

.column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--margin);
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
    object-fit: cover;
}

@media (max-width: 768px) {
    .card-section {
        grid-template-columns: 1fr;
        height: auto;
    }

    .video-container {
        height: 250px; 
        border-right: none;
        border-bottom: 1px solid black;
    }

    .column{
        min-height: 100%;
    }
}
</style>
