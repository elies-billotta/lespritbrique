<template>
  <OldTvShader />
  <Loader v-show="!loadingStore.isAppLoaded" />
  <div v-show="loadingStore.isAppLoaded" id="app">
    <RouterView v-slot="{ Component }" :key="$router.push">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useDataStore } from '@/stores/data';
import { useLoadingStore } from '@/stores/loading';
import Loader from '@/components/elements/Loader.vue'
import OldTvShader from '@/components/OldTvShader.vue';

const dataStore = useDataStore();
const loadingStore = useLoadingStore();

onMounted(async () => {
  const taskName = 'initial-data-loading';
  loadingStore.startLoading(taskName);

  await dataStore.loadCreationData();

  loadingStore.finishLoading(taskName);
});
</script>


<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
