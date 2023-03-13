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
    <div class="plans-content">
      <h1 class="plans-text">confira nossos planos!</h1>
    </div>

  <div class="container-plans container text-center">
  <div class="row-plans row align-items-start">

    <div class="col-plans col">
    <img class="img-plans  " src="../assets/Musculação.png" alt="">
    </div>

    <div class="col-plans col">
      <img class="img-plans" src="../assets/Musculação.png" alt="">  
    </div>

    <div class="col-plans col">
    <img class="img-plans  " src="../assets/Musculação.png" alt="">      
    </div>
  </div>
</div>
</main>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');


@media screen and (max-width: 600px){
  .plans-content{
    padding: 0 10px;
    text-align: center;
  }
  .row-plans{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
  }
  .container-plans{
    display: flex;
    flex-direction: row;
  }  


}


.img-plans{
  border-radius: 20px;
}

.background{
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
  background-position: center, center ;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat; 

}
.container-plans{
  margin-top: 100px;
  align-content: center;
  justify-content: center;
}
.row-plans{
  gap: 1rem;
}

.plans-content{
  margin-top: 100px;
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  display: flex;
  height: 3vh;
  width: 100%;
  justify-content: center ;
  align-items: center;
  color: yellow;
}
.img-plans{
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

}
.plans-text{
  font-size: 2.4rem;
  color: white;
  letter-spacing: 1.2rem;
  border-radius: 8px;
  padding: 4px 4px 4px 11px;
}

.col-plans {
  border-radius: 10px;
  color:yellow;
}
/* estilo ao passar o mouse por cima */
.col-plans:hover {
  color: rgb(14, 1, 1);
  background-color: rgba(252, 235, 4, 0.945);
}



</style>