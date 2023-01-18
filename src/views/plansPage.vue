<template>
  <header>
    <div class="menu-content">
        <h1 class="logo"><router-link class="router-link" to="/">bem + fit</router-link></h1>
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
      <h1 class="plans-text">confira nossos planos!</h1>
    </div>
  </main-plan>

</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

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
}
.plans-text{
  border-radius: 8px;
  padding: 4px 4px 4px 11px;
  border: solid white 2px;
}

header{
    width: 100%;
    height: 7vh;
    background-color: rgba(22, 22, 22, 0.5)
}


</style>