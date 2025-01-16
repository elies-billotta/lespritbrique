<template>
    <header class="menu-banner">
        <div class="menu-left">
            <myLink :anim="false" :href="'/home'"><img class="logo" src="@/assets/images/logo-color.png"></img></myLink>
        </div>
        <MyMenu class="menu-right" />
    </header>
</template>
<script setup>
import MyMenu from './MyMenu.vue';
import myLink from './MyLink.vue';
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
}

.menu-left {
    display: flex;
    align-items: center;
}

.logo {
    width: 80px;
    height: 80px;
}
</style>
