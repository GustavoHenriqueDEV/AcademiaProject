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
   <main-contato>
	<div class="container-contact">
		<div class=""><i class="gg-facebook"></i></div>
	</div>
	<div class="container-contact" >
		<div class=""><i class="gg-instagram"></i></div>
	</div>
	<div class="container-contact">
		<div>whatzap</div>
	</div>
   </main-contato>

</template>

<script>
export default {

}
</script>

<style>
@import url('https://css.gg/instagram.css');
@import url('https://css.gg/facebook.css');

.gg-facebook {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px
}
.gg-instagram {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 4px;
    width: 20px;
    height: 20px
}


main-contato{
	height: 93vh;
	display: flex;
	justify-content: space-between;
}
.container-contact{
	border: solid 1px white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 873px;
	width: 624px;

}





</style>