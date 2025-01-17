<template>
    <nav>
        <ul class="menu">
            <li>
                <my-link class="menu-link" :anim="false" :href="'https://shop.lespritbrique.com'"><p>BOUTIQUE</p></my-link>
            </li>
            <li>
                <my-link :anim="false" :href="'#realisations'">REALISATIONS</my-link>
            </li>
            <li>
                <my-link :anim="false" :href="'#infos'">INFOS</my-link>
            </li>
            <li>
                <my-link :anim="false" :href="'#contact'">CONTACT</my-link>
            </li>
        </ul>  
    </nav>
</template>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    flex-direction: column;
    flex: 1;
    max-height: 400px;
}

li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 2rem;
}

li:last-child {
    border-bottom: 1px solid black;
}


.dropdown-menu {
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
    display: block;
    background-color: #f5f5f5;
    width: 100%;
}

.dropdown-menu li {
    padding: var(--margin);
    border-bottom: 1px solid #ccc;
}

.dropdown-menu li:last-child {
    border-bottom: none;
}

.dropdown-menu a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
}
</style>
