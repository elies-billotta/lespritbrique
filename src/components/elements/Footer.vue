<template>
  <footer>
    <ColumnSection>
      <template #column1>
        <div class="logo">
          <img class="turn" src="@/assets/icons/logo.svg" alt="logo" />
        </div>
        <p>© 2025 L'ESPRIT BRIQUE</p>
        <p>L'ESPRIT BRIQUE® est une marque déposée. Tous droits réservés. Ne pas reproduire.</p>
        <div class="inline">
          <p class="space">Personnages et designs réalisés par</p><my-link
            href="https://www.instagram.com/meli_melodraw/">meli_melodraw</my-link>
        </div>
      </template>
      <template #column2>
        <h3>CONTACTEZ-NOUS</h3>
        <ul class="menu">
          <li>
            <my-link :href="'https://www.facebook.com/lesprit.brique'">FACEBOOK</my-link>
          </li>
          <li>
            <my-link :href="'https://www.instagram.com/lesprit.brique'">INSTAGRAM</my-link>
          </li>
          <li>
            <my-link :copyOnClick="true" :href="'contact@lespritbrique.com'">CONTACT@LESPRITBRIQUE.COM</my-link>
          </li>
        </ul>
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
.align-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  gap: 1.5rem;
}

.space {
  margin-right: 6px;
}

.inline {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.footer-content {
  background-color: var(--primary-color);
  padding: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.footer-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.line {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
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
</style>