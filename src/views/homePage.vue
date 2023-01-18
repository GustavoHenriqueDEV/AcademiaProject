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
   <main>
    <div class="main-content" >
        <h1 class="primary-text">O peso não ficou mais leve, você ficou mais forte!</h1>
        <h2 class="second-text">Junte-se a nós, veja os planos!</h2>
    <div class="btn-content">
        <button class="btn-plano" @click="irPlano" >Planos</button>
        <button class="btn-alg">*****</button>
    </div>
    </div>

   </main>
</template>

<script>
import router from "../router";
export default {
    data() {
        return {
            
        }
    },
    methods:{
        irPlano(){
            router.push({name:'plansPage'})
        }
    }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');




.fit{
    height: 7vh;
}

header{
    width: 100%;
    height: 7vh;
    background-color: rgba(22, 22, 22, 0.5)
}
.router-link{
    cursor: pointer;
    letter-spacing: 4px;
    color: inherit;
    text-decoration: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    color: white;
    font-family: 'Lato', sans-serif;
}

.menu-content{
    height: 100%;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-around;
    display: flex;
    font-size: 1.8rem;
}

.list-itens, li {
    cursor: pointer;
    gap: 40px;
    list-style: none;
    display: flex;
    transform: 2ms ease-in;
    position: relative;
}
.list-itens li:before{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background-color: yellow;
    transition: all 1.5s ease;
}
.list-itens li:hover:before{
    width: 100%;
}
.logo{
    letter-spacing: 6px;
    font-size: 1.8rem;
    cursor: pointer;
}
body{
    background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
    background-position: center, center ;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
}
/****main*/
main{
    height: 93vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-content{
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
/**texto conteúdo*/
.primary-text{
    margin-bottom: 3rem;
    font-size: 4rem;
    text-align: center;
    width: 850px;
}
.second-text{
    color: rgb(165, 165, 165);
    font-size: 2.1rem;
    margin-bottom: 2rem;
}

/**botões */
.btn-content{
    gap: 20px ;
    display: flex;
}
.btn-content button{
    color: white;
    text-transform: uppercase;
    border: 1px solid white;
    background-color: transparent;
    width: 250px;
    height: 60px;
    transform: 2ms ease-in;
    position: relative;
    border-radius: 20px;
    letter-spacing: 1.1rem;
}
.btn-content button:before{
    border-radius: 20px;
    content: '';
    position: absolute ;
    bottom: 0px;
    left: 0px;
    width: 250px;
    height: 0px;
    background-color: rgba(194, 190, 179, 0.404);
}
.btn-content button:hover:before{
    
    height:  100%;
}



</style>