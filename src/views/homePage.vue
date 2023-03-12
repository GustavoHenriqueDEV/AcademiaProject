<template>
    <div class="background">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        <button class="btn-treino" @click="goMakeTrain" ><div class="btn-text">faça seu treino</div></button>
    </div>
    </div>
   </main>
</div>
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
        },
        goMakeTrain(){
            router.push({name:"makeYourTrain"})
        }
    }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@media screen and (max-width: 600px) {
    .main-content {
      padding: 0 10px;
      text-align: center;
    }

    .primary-text {
      font-size: 28px;
    }

    .second-text {
      font-size: 24px;
    }

    .btn-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .btn-plano,
    .btn-treino {
      width: 100%;
      margin-bottom: 10px;
    }
  }
.background{
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
  background-position: center, center ;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat; 

}

main{
    height: 90vh; /* diminua a altura para que o conteúdo caiba na tela */
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
    color: white;
    margin-bottom: 3rem;
    font-size: 4rem;
    text-align: center;
    width: 100%;
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
.btn-text{
    margin-left: 4px;
}

</style>