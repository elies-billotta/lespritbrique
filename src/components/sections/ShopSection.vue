<template>
    <Section class="text-section" :background-color="'var(--white)'" :columns="2" :title="'BOUTIQUE'" :icon="BrickIcon" :description="'TROUVEZ LA BRIQUE'">
        <template #columns>
            <div class="img-container">
                <!-- L'image est utilisée en background -->
            </div>
            <div class="text-column">
                <p>
                    Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure
                    incluant la création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la
                    vente ou sur demande des briques personnalisées. N'attendez plus et contactez-nous pour soumettre votre demande !
                </p>
                <MyButton text="VISITER LA BOUTIQUE" />
            </div>
        </template>
    </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import MyButton from '@/components/buttons/MyButton.vue';
import BrickIcon from '@/assets/icons/brick.svg';
</script>

<style scoped>
/* Style par défaut pour la section */
.text-section {
    display: flex;
    gap: 20px;
    align-items: center; /* Centre verticalement le contenu */
}

.text-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centre verticalement le texte */
    align-items: flex-start;
}

/* Conteneur pour l'image */
.img-container {
    flex: 1;
    width: 100%;
    min-height: 400px; /* Augmente la hauteur minimale de l'image */
    background-image: url('@/assets/images/logo_temporaire.png'); /* Image en background */
    background-size: cover; /* S'assure que l'image couvre toute la div */
    background-position: center; /* Centre l'image */
    background-repeat: no-repeat; /* Empêche la répétition de l'image */
}

.text-column p {
        margin-bottom: 20px; /* Ajoute un espace entre le texte et le bouton */
    }

/* Media query pour mobile */
@media (max-width: 768px) {
    .text-section {
        flex-direction: column; /* Empile les éléments en colonne */
        align-items: center;
    }

    .img-container {
        margin-bottom: 20px;
        min-height: 300px; /* Hauteur adaptée pour mobile */
        width: 100%; /* Prend toute la largeur */
    }

    .text-column {
        width: 100%;
        text-align: left; /* Centre le texte sur mobile */
    }
}
</style>
