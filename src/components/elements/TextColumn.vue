<template>
    <div class="text-column">
        <div class="title-container">
            <div class="icon-container">
                <img :src="icon" alt="Icon" class="icon" />
            </div>
            <h3 class="title">{{ this.title }}</h3>
            <p class="subtitle">{{ this.subtitle }}</p>
            <Line class="line"/>
        </div>
        <div class="text-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Line from '@/components/elements/Line.vue';
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
    },

    components: {
        Line,
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
    gap:0px;
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
    border-radius: 50%; /* Cercle */
  position: relative; /* Nécessaire pour utiliser ::before */
}

.icon-container::before {
  content: '';
  position: absolute;
  width: 130px; /* Taille de la bordure blanche interne */
  height: 130px; /* Taille de la bordure blanche interne */
  border-radius: 50%; /* Cercle pour la bordure interne */
  border: 4px solid var(--black); /* Bordure blanche interne */
}

.icon {
    width: 50%;
    height: auto;
    object-fit: cover;
}

.line {
    margin-top: 10px;
}

.title {
    padding-top : 10px;
}

.text-container {
    width: 100%;
    max-width: 280px;
    max-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
