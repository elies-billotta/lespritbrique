<template>
  <footer>
    <ColumnSection class="footer" :right="true" :reverseMobile="true" :centerMobile="true">
      <template #column1>
        <div class="logo">
          <img class="turn" src="@/assets/icons/logo.svg" alt="logo" />
        </div>
        <p class="text-line">© 2025 L'ESPRIT BRIQUE</p>
        <p class="text-line">L'ESPRIT BRIQUE<sup>®</sup> est une marque déposée. Tous droits réservés. Ne pas
          reproduire.</p>
          <p class="text-line">LEGO® est une marque déposée par The LEGO Group qui ne sponsorise pas, n'autorise pas et n'approuve pas ce site.</p>
        <div class="inline">
          <p class="space">Personnages et designs réalisés par</p><my-link
            href="https://www.instagram.com/meli_melodraw/">meli_melodraw</my-link>
        </div>
      </template>
      <template #column2>
        <div class="info-section">
          <div class="column">
            <h3>NOS RÉSEAUX</h3>
            <ul class="menu">
              <li>
                <my-link :href="'https://www.facebook.com/lesprit.brique'">FACEBOOK</my-link>
              </li>
              <li>
                <my-link :href="'https://www.instagram.com/lesprit.brique'">INSTAGRAM</my-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <h3>MAIL</h3>
            <ul class="menu">
              <li>
                <my-link :copyOnClick="true" :href="'contact@lespritbrique.com'">CONTACT@LESPRITBRIQUE.COM</my-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <h3>AUTRES LIENS</h3>
            <ul class="menu">
              <li>
                <my-link :href="'https://www.instagram.com/bricktendo'">BRICKTENDO</my-link>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </ColumnSection>
  </footer>
</template>

<script>
import ColumnSection from '@/components/elements/columns/ColumnSection.vue';

export default {
  components: {
    ColumnSection
  }
};
</script>

<style scoped>
sup {
  font-size: 12px;
}

.column {
  display : flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-items: flex-end;
}

.text-line {
  margin-top: 0.5rem;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  gap: 1.5rem;
}

.space {
  margin-right: 6px;
}

.inline {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.info-section {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: auto;
}

img {
  width: 200px;
  height: auto;
}

.turn {
  animation: turn 20s linear infinite;
}

@keyframes turn {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  img {
    width: 100px;
  }

  .footer {
    display : flex;
    flex-direction: column-reverse;
  }

  .info-section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
  }

  .info-section > .column {
    align-items: center;
    justify-content: center;
  }

  .text-line{
    text-align: center;
  }
  .inline {
    padding-top: 8px;
    flex-direction: column;
  }
}
</style>
