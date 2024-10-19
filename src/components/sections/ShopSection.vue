<template>
    <Section class="text-section" :background-color="'var(--white)'" :columns="2" :title="'BOUTIQUE'" :icon="BrickIcon">
        <template #description>
            <p>TROUVEZ LA BRIQUE QU'IL VOUS FAUT</p>
        </template>
        <template #columns>
                <div class="text-column">
                    <p>Auto-entrepreneur spécialisé dans la communication, L'Esprit Brique propose des services sur mesure
                        incluant la création de kits personnalisés en briques avec vos propres designs. Nous proposons également à la
                        vente ou sur demande des briques personnalisées. N'attendez plus et contactez nous pour soumettre votre demande !
                    </p>
                    <MyButton text="VISITER LA BOUTIQUE" />
                </div>
                <div class="img-column">
                    <img src="@/assets/images/art-of-brick.png" alt="Description of image" />
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

.text-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
