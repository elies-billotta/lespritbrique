<template>
    <section ref="bannerContainer" class="home-section">
        <div ref="bannerContent" class="home-section__content">
            <img :src="src" alt="logo" width="500" height="500">
            <h3 class="home-section__description">{{ text }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.loadBackground();
    },
    methods: {
        loadBackground() {
            const container = this.$refs.bannerContainer;
            if (container) {
                if (this.background.endsWith('.mp4')) {
                    const content = this.$refs.bannerContent;
                    content.style.zIndex = '100'; 
                    const video = document.createElement('video');
                    video.src = this.background;
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    video.style.position = 'absolute';
                    video.style.top = '0';
                    video.style.left = '0';
                    video.style.width = '100%';
                    video.style.height = '100%';
                    video.style.zIndex = "0";
                    video.style.objectFit = 'cover';
                    container.appendChild(video);
                } else if (this.background.endsWith('.jpg') || this.background.endsWith('.JPG')  || this.background.endsWith('.png')) {
                    container.style.backgroundImage = `url(${this.background})`;
                    container.style.backgroundSize = 'cover';
                    container.style.backgroundPosition = 'top';
                    container.style.backgroundRepeat = 'no-repeat';
                }
            }
        },
    },

};
</script>

<style scoped>
.home-section {
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

.home-section__description {
    color: white;
}

img {
    width: 50%;
    height: auto;
}
</style>
