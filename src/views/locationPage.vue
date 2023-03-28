<template>
  <div class="background">
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
  <div class="location-text">Nossa academia!</div>

  <div class="container-iframe">
    <iframe src="https://www.google.com/maps/embed?pb=!4v1673969139685!6m8!1m7!1s8xbR638SHH19pCiOsaXQQA!2m2!1d-26.45186504002438!2d-48.61960932334976!3f196.1789840844788!4f10.083361774138694!5f0.7820865974627469" width="600" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div>
  </div>
  </div> 

  <hr>
   <section>
    <div class="location-content">
      <button @click="goUp" class="upButton"  v-if="mostrarBotão">Subir</button>
      <div>Localização:</div>
      <div>Avenida Jaragua do Sul, 941 -Bal.Barra do sul - SC - 89247-000</div>
    </div>
   </section>
  </main>
</div>
</template>
<script>
export default {
  data(){
    return{
      mostrarBotão: false
    }
  },
 methods: {
    verTela(){
      if(window.innerWidth < 600){
        this.mostrarBotão = true
      }
    },
    goUp(){
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    }
  },
  mounted(){
  this.verTela()
},
}
</script>
<style scoped>

@media screen and (max-width: 600px) {
  .container-iframe iframe {
    width: 95%;
  }
main{
  display: flex;
  flex-direction: column;
}

.upButton{
  border-radius: 20px;
  border: none;
  margin-left: 25%;
  align-items: baseline;
  display:flex;
  justify-content: center; 
  width: 50%;
  height: 50%;
  text-transform: uppercase;
  color: yellow;
  background-color: rgba(158, 156, 156, 0.527);;
}


  iframe{
    margin-top: 4vh;
    border-radius: 20px;
    display: flex;
    width: 100%;
  }
  .location-content{
    display: flex;
    flex-direction: column;
    font-size: 0.1rem;
  }
  .location-text{ 
  margin-top: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: white;
  font-size:2rem;
}
}
iframe{
  width: 50%;
  margin-top: 5rem;
  border-radius: 20px;
}
.location-text{ 
  margin-top: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: white;
  font-size:2rem;
}
.location-content{
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  color: white;
}
hr{
  color: white ;
}
.container-iframe{
  display: flex;
  flex: ;
  justify-content: center;
  align-items: center;
}
.location-li{
  margin-top: 10px;
}
.background{
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
  background-position: center, center ;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat; 
}
</style>