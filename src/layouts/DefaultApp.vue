<template>
   <header>
    <div class="menu-content">
        <div class="logo"><router-link class="router-link" to="/"><img class="fit" src="../assets/fit.png" alt="">
        </router-link>
        </div>
        <nav class="header-menu">
            <ul class="list-itens">
                <li><router-link class="router-link"  to="/aboutPage">quem somos</router-link></li>
                <li><router-link class="router-link" to="/contactPage">Contato</router-link></li>
                <li><router-link class="router-link" to="/locationPage">Localização</router-link></li>
            </ul>
        </nav>
    </div>
   </header>
</template>

<script>
export default {

}
</script>

<style>
.appBar{
    background-color: red;
}
</style>