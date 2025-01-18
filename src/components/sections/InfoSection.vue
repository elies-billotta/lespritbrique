<template>
    <section class="container">
        <Accordion value="0" unstyled>
            <AccordionPanel value="0">
                <AccordionHeader class="button">
                    <h2>NOS VALEURS</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <p class="m-0">
                            En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la
                                créativité</strong>.
                            Par gage de qualité et par respect pour les artistes, <strong>nous banissons l'utilisation
                                de l'intelligence
                                artificielle dans le processus de création</strong>. Tous nos designs sont fait à la
                            main et c'est mieux ainsi !
                        </p>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader class="button">
                    <h2>STAND BOUTIQUE</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader class="button">
                    <h2>PERSONNALISATION SUR MESURE</h2>
                </AccordionHeader>
                <AccordionContent>
                    <div class="accordion-content">
                        <p class="m-0">
                            Vous avez une idée précise en tête ? Faites-nous part de votre projet et nous créerons des
                            designs sur mesure pour vos briques ! Grâce à <my-link :href="'#contact'">notre service de
                                personnalisation</my-link>,nous pouvons créer ensemble le design de vos rêves. Que ce soit pour un
                            événement particulier, une entreprise, ou simplement pour ajouter une touche personnelle à
                            vos créations, nous réalisons des impressions UV de haute qualité sur vos briques.</p>
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
}
</style>