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
  <div class="location-content">Venha nos visitar!</div>
  <main>
  <div class="maps" ><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4247.963205050189!2d-48.618362308628555!3d-26.452601053028268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1673916938994!5m2!1spt-BR!2sbr" width="800" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  <div class="location-list" >
    <iframe src="https://www.google.com/maps/embed?pb=!4v1673969139685!6m8!1m7!1s8xbR638SHH19pCiOsaXQQA!2m2!1d-26.45186504002438!2d-48.61960932334976!3f196.1789840844788!4f10.083361774138694!5f0.7820865974627469" width="600" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ul class="ul-content">
    <div class="endereço-stilo">Endereço</div>
    <li class="li-location">Cidade: Balneário Barra Do Sul</li>
    <li class="li-location">Rua: Dório Da Silva</li>
    <li class="li-location">Numero: 511</li>
  </ul>
</div>
  </main>
</div>
</template>

<script>
export default {

}
</script>

<style>

.maps iframe, .location-list iframe {
    max-width: 100%;
    height: 60rem;
  }

.endereço-stilo{
  color: yellow;
  padding-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3rem;
  font-size: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


.location-content{
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin-top: 10px;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  height: 10rem;
}
.maps{
  border-radius: 20px;
  border: solid white 1px;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  height: 50%;
}
iframe{
  border-radius: 10px;
}

.location-list{
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  border: solid white 1px;
  height: '';
  width: 1000px;
  display: flex;
}
.li-location{
  letter-spacing: 4px;
  font-size: 2.2rem;
  width: 500px;
  border-radius:5px;
  margin-top: 10px;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
}
.ul-content{

  margin-top: 100px;
}
.background{
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
  background-position: center, center ;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat; 

}

</style>