<template>
    <FullScreenBanner :src="imageSrc" :text="'Des créations à votre image'" :background="background"/>
</template>
<script>
    import FullScreenBanner from '@/components/elements/FullScreenBanner.vue';

    export default {
        components : {
            FullScreenBanner
        },
        data() {
            return {
                imageSrc: new URL('@/assets/icons/logo.svg', import.meta.url).href,
                videoSrc : new URL('@/assets/videos/4x4.mp4', import.meta.url ).href,
                background : new URL('@/assets/images/cover.png', import.meta.url ).href,
            };
        }
    }
</script>