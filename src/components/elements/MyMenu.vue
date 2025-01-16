<template>
    <nav>
        <ul class="menu">
            <li>
                <MyLink :href="'https://shop.lespritbrique.com'">BOUTIQUE</MyLink>
            </li>
            <li>
                <MyLink :href="'#realisations'">REALISATIONS</MyLink>
            </li>
            <li>
                <MyLink :href="'#infos'">INFOS</MyLink>      
            </li>
            <li>
                <MyLink :href="'#contact'">CONTACT</MyLink>
            </li>
        </ul>  
    </nav>
</template>
<script setup>
import MyLink from './MyLink.vue';
import "animate.css"
</script>
<style scoped>
.menu {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 1.5rem;
}
</style>