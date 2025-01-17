<template>
    <nav>
        <ul class="menu">
            <li>
                <my-link :href="'https://shop.lespritbrique.com'">BOUTIQUE</my-link>
            </li>
            <li>
                <my-link :href="'#realisations'">REALISATIONS</my-link>
            </li>
            <li>
                <my-link :href="'#infos'">INFOS</my-link>      
            </li>
            <li>
                <my-link :href="'#contact'">CONTACT</my-link>
            </li>
        </ul>  
    </nav>
</template>
<style scoped>
.menu {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .menu {
        flex-direction: column;
    }
}


</style>