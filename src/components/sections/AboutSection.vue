<template>
  <Section class="text-section" :background-color="'var(--white)'" :columns="3" :title="'A PROPOS'" :icon="BrickIcon" :description="'ENTREPRISE BASÉE À NÎMES'">
    <template v-if="isMobile" #columns>
      <Swiper 
        :slides-per-view="1" 
        :pagination="{ clickable: true }" 
        :loop="true" 
        :autoplay="{ delay: 3000, disableInteraction: false }">
        <SwiperSlide>
          <TextColumn :icon="Bricks" :title="'IMPRESSION UV'" :subtitle="'Des briques inédites'" :text-button="'VOIR LES RÉALISATIONS'" :name="'RÉALISATIONS'">
            <p>
              Tous nos designs sont imprimés sur des briques de qualité grâce à la technologie UV, vous garantissant
              <strong>une durabilité à toute épreuve</strong>. Les briques sont également vernies pour un rendu plus éclatant.
            </p>
          </TextColumn>
        </SwiperSlide>
        <SwiperSlide>
          <TextColumn :icon="Pinceau" :title="'CUSTOMISATION'" :subtitle="'Personnalisez vos briques'" :text-button="'NOUS CONTACTER'" :name="'CONTACT'">
            <p>
              L'Esprit Brique vous offre la possibilité de <strong>personnaliser vos briques et figurines</strong> selon vos envies.
              Que vous souhaitiez ajouter un texte ou une image, nous sommes là pour vous
              concevoir des designs conformes à votre vision.
            </p>
          </TextColumn>
        </SwiperSlide>
        <SwiperSlide>
          <TextColumn :icon="Robot" :title="'AUTHENTICITÉ'" :subtitle="'Un travail artisanal'" :text-button="'VISITER LA BOUTIQUE'" :name="'BOUTIQUE'">
            <p>
              En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la créativité</strong>.
              Par gage de qualité et par respect pour les artistes, <strong>nous banissons l'utilisation de l'intelligence
              artificielle dans le processus de création</strong>. Tous nos designs sont fait à la main et c'est mieux ainsi !
            </p>
          </TextColumn>
        </SwiperSlide>
      </Swiper>
    </template>

    <!-- Colonnes normales pour les écrans plus grands -->
    <template v-else #columns>
      <TextColumn :icon="Bricks" :title="'IMPRESSION UV'" :subtitle="'Des briques inédites'" :text-button="'VOIR LES RÉALISATIONS'" :name="'RÉALISATIONS'">
        <p>
          Tous nos designs sont imprimés sur des briques de qualité grâce à la technologie UV, vous garantissant
          <strong>une durabilité à toute épreuve</strong>. Les briques sont également vernies pour un rendu plus éclatant.
        </p>
      </TextColumn>
      <TextColumn :icon="Pinceau" :title="'CUSTOMISATION'" :subtitle="'Personnalisez vos briques'" :text-button="'NOUS CONTACTER'" :name="'CONTACT'">
        <p>
          L'Esprit Brique vous offre la possibilité de <strong>personnaliser vos briques et figurines</strong> selon vos envies.
          Que vous souhaitiez ajouter un texte ou une image, nous sommes là pour vous
          concevoir des designs conformes à votre vision.
        </p>
      </TextColumn>
      <TextColumn :robot="true" :icon="Robot" :title="'AUTHENTICITÉ'" :subtitle="'Un travail artisanal'" :text-button="'VISITER LA BOUTIQUE'" :name="'BOUTIQUE'">
        <p>
          En choisissant L'Esprit Brique, vous optez pour un service qui respecte <strong>l’art et la créativité</strong>.
          Par gage de qualité et par respect pour les artistes, <strong>nous banissons l'utilisation de l'intelligence
          artificielle dans le processus de création</strong>. Tous nos designs sont fait à la main et c'est mieux ainsi !
        </p>
      </TextColumn>
    </template>
  </Section>
</template>

<script setup>
import Section from '@/components/sections/Section.vue';
import TextColumn from '@/components/elements/TextColumn.vue';
import BrickIcon from '@/assets/icons/brick.svg';
import Pinceau from '@/assets/icons/pinceau.png';
import Robot from '@/assets/icons/robot.png';
import Bricks from '@/assets/icons/bricks.png';
import {Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref, onMounted, onUnmounted } from 'vue';

// Utiliser les modules de Swiper
import SwiperCore from 'swiper';
SwiperCore.use([Pagination, Scrollbar, A11y]);

// Responsive mobile detection
const isMobile = ref(window.innerWidth <= 768);
const handleResize = () => (isMobile.value = window.innerWidth <= 768);

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style>
.swiper{
  width: 100vw;
  height: 100%;
}

</style>