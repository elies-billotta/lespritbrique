<template>
    <section class="container">
        <Accordion value="0" unstyled>
            <AccordionPanel value="0">
                <AccordionHeader class="button">
                    <h2>NOS VALEURS</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <div class="column">
                            <div class="image-container">
                                <img class= "robot" src="../../assets/icons/robot.png" alt="stand">
                            </div>
                            <div class="text-column">
                                <h2>UNE CRÉATIVITÉ HUMAINE</h2>
                                <p class="m-0 text">
                                    En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la
                                créativité</strong>.
                            Par gage de qualité et par respect pour les artistes, <strong>nous banissons l'utilisation
                                de l'intelligence
                                artificielle dans le processus de création</strong>. Tous nos designs sont fait à la
                            main et c'est mieux ainsi !
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader class="button">
                    <h2>STAND BOUTIQUE</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <div class="column">
                            <div class="image-container">
                                <img class="stand-image" src="../../assets/images/stand.jpg" alt="stand">
                            </div>
                            <div class="text-column">
                                <h2>RETROUVEZ NOUS EN EXPO !</h2>
                                <p class="m-0 text">
                                    En plus de la <my-link :anim="false"
                                        :href="'https://shop.lespritbrique.com'">boutique
                                        en ligne</my-link>, L'Esprit Brique est présent sur de nombreux salons
                                    dédiés à la brique. Présentation des produits, exposition de créations, vente de pièces... N'hésitez pas à venir nous rencontrer (en plus, on propose des
                                    tarifs spéciaux et ça c'est pas mal !).
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader class="button">
                    <h2>DEMANDE SUR MESURE</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <p class="m-0">
                            Vous avez une idée précise en tête ? Faites-nous part de votre projet et nous créerons des
                            designs sur mesure pour vos briques ! Grâce à <my-link :anim="false"
                                :href="'#contact'">notre service de
                                personnalisation</my-link>,nous pouvons créer ensemble le design de vos rêves. Que ce
                            soit pour un
                            événement particulier, une entreprise, ou simplement pour ajouter une touche personnelle à
                            vos créations, nous réalisons des impressions UV de haute qualité sur vos briques.</p>
                        <p class="m-0">
                            Découvrez nos modèles de briques déjà personnalisées, disponibles à la vente. Que ce soit
                            pour un cadeau spécial, une décoration originale ou une collection unique, vous trouverez
                            des créations originales qui s'adaptent à tous vos besoins.
                        </p>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </section>
</template>

<script setup>

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>
<style scoped>
.container {
    margin-left: var(--margin);
    margin-right: var(--margin);
    border: 1px solid black;
    border-bottom: 0px;
}

.accordion-panel {
    width: 100%;
}

.button {
    background-color: var(--primary-color);
    color: var(--black);
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border: 0px;
    border-bottom: 1px solid black;
    padding: var(--margin);
    cursor: pointer;
}

.accordion-content {
    padding: var(--margin);
    border-bottom: 1px solid black;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: var(--margin)
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    max-height: 400px;
    overflow: hidden;
}

.robot {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.column {
    display: flex;
    flex-direction: row;
    gap: var(--margin);
}

.stand-image {
    width: 100%;
    height: auto;
    object-fit: contain; 
}


.text-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text {
    max-width: 75%;
}

@media (max-width: 768px) {
    .image-container {
        max-width: 100%;
    }

    .text-column {
        gap: 1rem;
    }

    .column {
        flex-direction: column;
    }

    .text {
        max-width : 100%;
    }

    .robot {
        width : 75%;
    }
}
</style>