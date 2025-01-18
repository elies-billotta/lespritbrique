<template>
    <FullScreenBanner :src="imageSrc" :text="'Un kit pas mal'" :background="videoSrc"/>
</template>
<script>
    import FullScreenBanner from '@/components/elements/FullScreenBanner.vue';

    export default {
        components : {
            FullScreenBanner
        },
        data() {
            return {
                imageSrc: new URL('@/assets/images/logo-color.png', import.meta.url).href,
                videoSrc : new URL('@/assets/videos/4x4.mp4', import.meta.url ).href,
            };
        }
    }
</script>