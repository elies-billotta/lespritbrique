<template>
    <div class="text-column">
        <div class="title-container">
            <div class="icon-container">
                <div v-if="robot" class="rectangle"></div>
                <img :src="icon" alt="Icon" class="icon" />
            </div>
            <h3 class="title">{{ this.title }}</h3>
            <p class="subtitle">{{ this.subtitle }}</p>
            <Line class="line" />
        </div>
        <div class="text-container">
            <slot></slot>
            <MyButton :text="textButton" @click="scrollToSection(name)" />
        </div>
    </div>
</template>

<script>
import Line from '@/components/elements/Line.vue';
import MyButton from '@/components/buttons/MyButton.vue';
export default {
    name: 'TextColumn',
    props: {
        icon: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: 'Title here',
        },
        subtitle: {
            type: String,
            default: 'Subtitle here',
        },
        textButton: {
            type: String,
            default: 'Button text here',
        },
        name: {
            type: String,
            default: 'section',
        },
        robot: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Line,
        MyButton,
    },
    methods: {
        scrollToSection(name) {
            const section = document.getElementById(name);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
};
</script>

<style scoped>
.text-column {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-bottom: 10px;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--primary-color);
    position: relative;
}

.rectangle{
    width : 90%;
    height: 12px;
    z-index: 1;
    position: absolute;
    background-color: var(--black);
    transform: rotate(-45deg);
}

.icon-container::before {
    content: '';
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 4px solid var(--black);
}

.icon {
    width: 80%;
    height: auto;
    object-fit: cover;
    z-index: 2;
}

.line {
    margin-top: 10px;
}

.title {
    padding-top: 10px;
}

.text-container {
    width: 100%;
    max-width: 280px;
    max-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    gap: 20px;
}
</style>
