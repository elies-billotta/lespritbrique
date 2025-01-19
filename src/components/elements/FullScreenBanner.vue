<template>
    <section ref="bannerContainer" class="home-section">
        <div class="home-section__overlay" :style="overlayStyle"></div>
        <div ref="bannerContent" class="home-section__content">
            <img :src="src" alt="logo">
            <h3 class="home-section__description">{{ subtitle }}</h3>
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
        backgroundOpacity: {
            type: Number,
            default: 0,
        },
    },
    mounted() {
        this.loadBackground();
    },
    watch: {
        background(newBackground) {
            this.loadBackground();
        },
    },
    computed: {
        overlayStyle() {
            if (this.backgroundOpacity == 0) {
                return {
                    display: 'none',
                };
            }
            return {
                backgroundColor: `rgba(0, 0, 0, ${this.backgroundOpacity})`,
            };
        },
        subtitle() {
            return this.text.toUpperCase();
        },
    },
    methods: {
        loadBackground() {
            const container = this.$refs.bannerContainer;
            const content = this.$refs.bannerContent;
            if (container) {
                const existingVideo = container.querySelector('video');
                if (existingVideo) {
                    existingVideo.remove();
                }
                if (this.background.endsWith('.mp4')) {
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
                    video.style.zIndex = "1";
                    video.style.objectFit = 'cover';
                    video.style.pointerEvents = 'none';
                    video.playsInline = true;
                    container.appendChild(video);
                }
                else if (this.background.endsWith('.jpg') || this.background.endsWith('.JPG') || this.background.endsWith('.png')) {
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

.home-section__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
}

.home-section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    position: relative;
    gap: 1rem;
}

.home-section__description {
    color: white;
}

img {
    width: 50%;
    height: auto;
    min-width: 300px;
}





</style>
