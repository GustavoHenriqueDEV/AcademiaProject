<template>
  <div>
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
  <main-plan>
    <div class="plans-content">
      <h1 class="plans-text ">confira nossos planos!</h1>
    </div>

  <div class="container text-center">
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

  </main-plan>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');


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

header{
    width: 100%;
    height: 7vh;
    background-color: rgba(22, 22, 22, 0.5)
}
.col-plans {
  border-radius: 10px;
  color:yellow
}

/* estilo ao passar o mouse por cima */
.col-plans:hover {
  color: rgb(14, 1, 1);
  background-color: rgba(252, 235, 4, 0.945);
}




</style>