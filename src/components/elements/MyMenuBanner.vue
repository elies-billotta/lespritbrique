<template>
    <header class="menu-banner">
        <div class="menu-left">
            <my-link :anim="false" :href="'/home'">
                <img class="logo" src="@/assets/images/logo-color.png" alt="Logo">
            </my-link>
        </div>
        <MyMenu v-if="!isMobile" class="menu-right" />
        <div class="menu-right" v-else>
            <Slide>
                <a id="home" href="#">
                    <span>Home</span>
                </a>
            </Slide>
        </div>
    </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MyMenu from './MyMenu.vue';
import { Slide } from 'vue3-burger-menu';

export default {
    components: {
        Slide,
        MyMenu
    },
    setup() {
        const isMobile = ref(false);
        const updateIsMobile = () => {
            isMobile.value = window.matchMedia('(max-width: 768px)').matches;
        };
        onMounted(() => {
            updateIsMobile(); 
            window.addEventListener('resize', updateIsMobile);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateIsMobile);
        });

        return {
            isMobile
        };
    }
};
</script>

<style scoped>
.menu-banner {
    background-color: var(--primary-color);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-bottom: 1px solid var(--black);
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 1000;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}

.menu-left {
    display: flex;
    align-items: center;
}

.logo {
    width: 80px;
    height: 80px;
}

@media (max-width: 768px) {
    .menu-banner {
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }

    .menu-left {
        flex: 1;
        /* Permet au logo de s'ajuster */
        justify-content: flex-start;
    }

    .menu-right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
