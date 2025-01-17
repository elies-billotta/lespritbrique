<template>
    <header id="menuBanner" class="menu-banner">
        <div class="menu-left">
            <div class="imgContainer">
                <my-link :anim="false" :href="'/'">
                    <img class="logo" src="@/assets/images/logo-color.png" alt="Logo">
                </my-link>
            </div>
        </div>
        <div v-if="!isMobile" class="menu-right">
            <MyMenu />
        </div>
        <div v-else class="menu-right">
            <BurgerMenu @click="toggleMobileMenu"/>
        </div>
    </header>
    <transition name="slide">
        <div v-if="showMobileMenu" class="mobile-menu-container">
            <MyMenuMobile @click="toggleMobileMenu"/>
        </div>
    </transition>
</template>


<script>
import MyMenu from '@/components/elements/MyMenu.vue';
import BurgerMenu from '@/components/elements/BurgerMenu.vue';
import MyMenuMobile from './MyMenuMobile.vue';

export default {
    components: {
        BurgerMenu,
        MyMenu, 
        MyMenuMobile,
    },
    data() {
        return {
            isMobile: window.innerWidth <= 768,
            showMobileMenu: false,
        };
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth <= 768;
            if (!this.isMobile) {
                this.showMobileMenu = false;
            }
        },
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>

<style scoped>
.menu-banner {
    background-color: var(--primary-color);
    padding: var(--margin);
    border-bottom: 1px solid var(--black);
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 1000;
}

.menu-right {
    position: relative;
}

.mobile-menu-container {
    position: fixed;
    top: 113px;
    left: 0;
    width: 100%;
    background-color: var(--primary-color);
    z-index: 999;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateY(0);
}

img {
    width: 80px;
    height: auto;
}


</style>
