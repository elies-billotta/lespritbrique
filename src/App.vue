    <template>
      <OldTvShader v-if="isShaderActive" />
      <Loader @cardsLoaded="handleCardsLoaded" @modalLoaded="handleModalLoaded" @loadingComplete="handleLoadingComplete" />

      <div v-if="isLoadingComplete" id="app">
        <Drawer :isDrawerOpen="isDrawerOpen" :sections="['A PROPOS', 'RÉALISATIONS', 'BOUTIQUE', 'CONTACT']"
          :isPlaying="isPlaying" :volume="volume" @toggle-music="handleToggleMusic" @update-volume="handleUpdateVolume"
          @close-drawer="toggleDrawer" :currentMusic="currentMusic.value" @toggleShader="toggleShader" />
        <RouterView v-slot="{ Component }" :key="$router.push">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>

        <audio ref="audioElement" @ended="handleMusicEnd"></audio>
        <audio ref="clickSoundElement" :src="StartSound"></audio>
      </div>
    </template>

    <script setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
    import { useRoute, RouterView } from 'vue-router'
    import MenuButton from '@/components/buttons/MenuButton.vue';
    import Drawer from '@/components/elements/Drawer.vue';
    import Loader from '@/components/elements/Loader.vue';
    import StartSound from '@/assets/audio/start.mp3';
    import StopSound from '@/assets/audio/stop.mp3';
    import OldTvShader from '@/components/OldTvShader.vue';

    const isPlaying = ref(false);
    const volume = ref(0.2);
    const isDrawerOpen = ref(false);
    const isMobile = ref(false);
    const currentMusic = ref('');
    const audioElement = ref(null);
    const clickSoundElement = ref(null);
    const isToggling = ref(false);
    const isShaderActive = ref(true);
    const cardsData = ref([]);
    const modalsData = ref([]);
    const isLoading = ref(true);
    const isLoadingComplete = ref(false);
    const route = useRoute();
    const showMenuButton = computed(() => route.path !== '/');

    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 1024;
    };

    const handleToggleMusic = () => {
      if (!isToggling.value) {
        toggleMusic();
      }
    };

    const handleUpdateVolume = (newVolume) => {
      volume.value = Number(newVolume);
      if (audioElement.value) {
        audioElement.value.volume = volume.value;
      }
    };

    const handleCardsLoaded = (data) => {
      cardsData.value = data;
      checkLoadingState();
    };

    const handleModalLoaded = (data) => {
      modalsData.value = data;
      checkLoadingState();
    };

    const checkLoadingState = () => {
      if (cardsData.value.length > 0 && modalsData.value.length > 0) {
        isLoading.value = false;
        handleLoadingComplete();
      }
    };

    const handleLoadingComplete = () => {
      isLoadingComplete.value = true;
    };

    onMounted(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      if (localStorage.getItem('activeShader') == 'false') {
        toggleShader();
      }
      if (localStorage.getItem('volume')) {
        volume.value = parseFloat(localStorage.getItem('volume'));
      }
      if (localStorage.getItem('music') == 'true') {
        localStorage.setItem('music', 'false');
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    const audioFiles = [
      new URL('@/assets/audio/Gentlemen.mp3', import.meta.url).href,
      new URL('@/assets/audio/SwingTime.mp3', import.meta.url).href,
      new URL('@/assets/audio/BigBand.mp3', import.meta.url).href,
    ];

    const playRandomMusic = () => {
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      currentMusic.value = audioFiles[randomIndex];
      if (audioElement.value) {
        audioElement.value.src = currentMusic.value;
        audioElement.value.volume = volume.value;
        localStorage.setItem('volume', audioElement.value.volume);
        audioElement.value.play();
      }
    };

    const toggleMusic = () => {
      isToggling.value = true;

      if (!isPlaying.value) {
        if (clickSoundElement.value) {
          clickSoundElement.value.src = StartSound;
          clickSoundElement.value.play();
        }

        isPlaying.value = true;

        setTimeout(() => {
          playRandomMusic();
          isToggling.value = false;
        }, 2500);
      } else {
        if (clickSoundElement.value) {
          clickSoundElement.value.src = StopSound;
          clickSoundElement.value.play();
        }
        audioElement.value.pause();
        isPlaying.value = false;
        isToggling.value = false;
      }
    };

    const handleMusicEnd = () => {
      playRandomMusic();
    };

    const toggleShader = () => {
      isShaderActive.value = !isShaderActive.value;
    };


    </script>

    <style scoped>
    #app {
      position: relative;
      width: 100%;
      height: 100vh;
      background-color: black;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
    </style>