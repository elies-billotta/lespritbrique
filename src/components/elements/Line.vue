<template>
    <div :style="lineStyle"></div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'Line',
    props: {
        color: {
            type: String,
            default: 'var(--black)',
        },
        width: {
            type: String,
            default: '50px',
        },
    },
    setup(props) {
        const lineStyle = computed(() => ({
            width: props.width,
            height: '2px',
            backgroundColor: props.color,
        }));

        return { lineStyle };
    },
};
</script>

<style scoped>
</style>
