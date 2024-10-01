<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="3" :title="'A PROPOS'"
    :icon="BrickIcon">
    <template #description>
      <p>AUTO-ENTREPRENEUR BASÉ À NÎMES</p>
    </template>
    <TextColumn :icon="BrickIcon" :title="'IMPRESSION UV'" :subtitle="'Briques Personnalisées'">
      <p>
        Chez L'Esprit Brique, tous nos designs sont réalisés à la main avec soin et passion. Par respect pour l'art et l'authenticité, nous banissons l'utilisation d'intelligence artificielle dans le processus de création. Chaque design est unique et personnel, garantissant des briques personnalisées qui reflètent votre vision.
      </p>
    </TextColumn>
    <TextColumn :icon="BrickIcon" :title="'DESIGN'" :subtitle="'Un travail artisanal'">
      <p>
        Chez L'Esprit Brique, tous nos designs sont réalisés à la main avec soin et passion. Par respect pour l'art et l'authenticité, nous banissons l'utilisation d'intelligence artificielle dans le processus de création. Chaque design est unique et personnel, garantissant des briques personnalisées qui reflètent votre vision.
      </p>
    </TextColumn>
    <TextColumn :icon="BrickIcon" :title="'DESIGN'" :subtitle="'Un travail artisanal'">
      <p>
        En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la créativité</strong>. Par gage de qualité, par respect pour les artistes, <strong>l'utilisation de l'intelligence artificielle est bannie dans le processus de création</strong>, vous garantissant des designs uniques et personnels. Vous faites ainsi le choix de la <strong>qualité et de l’authenticité</strong>, tout en soutenant un avenir où le travail artistique est valorisé.
      </p>
    </TextColumn>
  </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import TextColumn from '../elements/TextColumn.vue'
import BrickIcon from '@/assets/icons/brick.svg';
</script>
