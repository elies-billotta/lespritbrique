<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="3" :title="'A PROPOS'" :icon="BrickIcon">
    <template #description>
      <p>AUTO-ENTREPRISE BASÉE À NÎMES</p>
    </template>
    <template #columns>
      <TextColumn :icon="BrickIcon" :title="'IMPRESSION UV'" :subtitle="'Des briques inédites'" :text-button="'VOIR LES RÉALISATIONS'" :name="'RÉALISATIONS'">
        <p>
          Tous nos designs sont imprimées sur des briques de qualité grâce à la technologie UV, vous garantissant 
          <strong>une durabilité à toute épreuve</strong>. Les briques sont également vernies pour un rendu plus éclatant.
        </p>
      </TextColumn>
      <TextColumn :icon="BrickIcon" :title="'CUSTOMISATION'" :subtitle="'Personnalisez vos briques'" :text-button="'NOUS CONTACTER'" :name="'CONTACT'">
        <p>
          L'Esprit Brique vous offre la possibilité de <strong>personnaliser vos briques et figurines</strong> selon vos envies. 
          Que vous souhaitiez ajouter un texte ou une image, nous sommes là pour vous 
          concevoir des designs conformes à votre vision.
        </p>
      </TextColumn>
      <TextColumn :icon="BrickIcon" :title="'AUTHENTICITÉ'" :subtitle="'Un travail artisanal'" :text-button="'VISITER LA BOUTIQUE'" :name="'BOUTIQUE'">
        <p>
          En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la
            créativité</strong>. Par gage de qualité et par respect pour les artistes, <strong>nous banissons l'utilisation de
            l'intelligence artificielle dans le processus de création</strong>. Tous nos designs sont fait à la main et c'est mieux ainsi !
        </p>
      </TextColumn>
    </template>
  </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import TextColumn from '@/components/elements/TextColumn.vue'
import BrickIcon from '@/assets/icons/brick.svg';
</script>
