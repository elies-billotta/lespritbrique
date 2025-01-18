<template>
    <ColumnSection>
        <template #column1>
            <h2>BIENVENUE SUR<br> L'ESPRIT BRIQUE<sup>®</sup></h2>
            <img src="../../../assets/images/coffee.png" alt="logo">
        </template>
        <template #column2>
            <h2>VOTRE SERVICE D'IMPRESSION UV SUR BRIQUES</h2>
            <p>Bienvenue dans l'univers de la personnalisation de briques de construction ! Vous êtes à la recherche de
                créations uniques et originales ? Nous proposons une large gamme de briques de construction entièrement
                personnalisées, prêtes à l'achat ou sur demande.</p>
            <p>L'Esprit Brique c'est la nouvelle marque d'<strong>Eliès, finaliste de la saison 4 de l'émission Lego
                    Masters !</strong> Que vous soyez un fan de briques, une association créative ou une entreprise,
                L'Esprit Brique
                vous propose son savoir pour réaliser vos projets en briques, <strong>entièrement personnalisés grâce à
                    la technologie UV. </strong>
            </p>
            <p class="inline">Notre service est divisé en deux parties : un premier consacré uniquement aux briques
                personnalisées, que vous pouvez retrouver
                sur <my-link :anim="false" :href="'https://shop.lespritbrique.com'">notre boutique en ligne</my-link>
            </p>
            <div class="center"><my-link :href="'#realisations'">Découvrir</my-link></div>
        </template>
    </ColumnSection>
</template>
<script setup>
import ColumnSection from '@/components/elements/columns/ColumnSection.vue';
</script>
<style scoped>
/* sup {
    font-size: 20px;
} */

p {
    margin-top: var(--margin);
    margin-bottom: var(--margin);
}

.inline {
    display: inline-block;
}

img {
    width: 70%;
    height: auto;
    max-width: 400px;
}

.center {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
}

@media (max-width: 768px) {
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
    }
}
</style>