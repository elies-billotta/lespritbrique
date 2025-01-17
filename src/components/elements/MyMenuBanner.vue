<template>
    <header class="menu-banner">
        <div class="menu-left">
            <div class="imgContainer">
                <my-link :anim="false" :href="'/'">
                    <img class="logo" src="@/assets/images/logo-color.png" alt="Logo">
                </my-link>
            </div>
        </div>
        <MyMenu class="menu-right" />
        <!-- <div class="menu-right" v-else>
            <Slide>
                <a id="home" href="#">
                    <span>Home</span>
                </a>
            </Slide>
        </div> -->
    </header>
</template>

<script>
import MyMenu from './MyMenu.vue';
import { Slide } from 'vue3-burger-menu';

export default {
    components: {
        Slide,
        MyMenu
    },
};
</script>

<style scoped>
.imgContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}
.inline > a {
    height: 0%;
}
.menu-banner {
    background-color: var(--primary-color);
    padding-left: var(--margin);
    padding-right: var(--margin);
    border-bottom: 1px solid var(--black);
    width: 100vw;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 1000;
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
        justify-content: flex-start;
    }

    .menu-right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: var(--margin);
    }
}
</style>
