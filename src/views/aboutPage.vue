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
   <div class="titulo"><div class="about">Sobre nós</div></div>
   <main-teste>
    
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">A BEM + FIT</h1></div>
    <p class="content-about2">Fundada em Setembro de 2007, a Stilo Academia desde sua inauguração se preocupa em trazer a saúde e a boa forma aos seus alunos, que contam com todo o suporte de profissionais bem preparados, além de estrutura e aparelhagem completa para o desenvolvimento de diversas práticas esportivas que você pode conferir no menu modalidades.</p>
    <p class="content-about2">A academia conta com profissionais qualificados como: nutricionistas, fisioterapeutas e professores de educação física, aptos a atenderem pessoas de todas as idades que queiram praticar atividades físicas, tanto para fins estéticos, terapêuticos ou capacitadores.</p>
    <p class="content-about2">A Stilo Academia dispõe de uma ampla estrutura com equipamentos modernos e adequados a prática de exercícios físicos, que traz toda sua bagagem em treinamento e infraestrutura de alta qualidade.</p>
   </div>
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">MISSÃO</h1></div>
    <p class="content-about2">Fundada em Setembro de 2007, a Stilo Academia desde sua inauguração se preocupa em trazer a saúde e a boa forma aos seus alunos, que contam com todo o suporte de profissionais bem preparados, além de estrutura e aparelhagem completa para o desenvolvimento de diversas práticas esportivas que você pode conferir no menu modalidades.</p>
    <div class="content-about"><h1 class="h1-about">VISÕES</h1></div>
    <p class="content-about2">A academia conta com profissionais qualificados como: nutricionistas, fisioterapeutas e professores de educação física, aptos a atenderem pessoas de todas as idades que queiram praticar atividades físicas, tanto para fins estéticos, terapêuticos ou capacitadores.</p>
    <div class="content-about"><h1 class="h1-about">Métodos</h1></div>
    <p class="content-about2">A Stilo Academia dispõe de uma ampla estrutura com equipamentos modernos e adequados a prática de exercícios físicos, que traz toda sua bagagem em treinamento e infraestrutura de alta qualidade.</p>
   </div>
    </main-teste>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

main-teste{
    display: flex;
}

@media only screen and (max-width: 768px) {
  header {
    height: auto;
    padding: 10px;
  }
  .menu-content {
    flex-direction: column;
    align-items: center;
  }
  .logo {
    margin: 0;
    margin-bottom: 10px;
  }
  .header-menu {
    position: static;
    max-height: none;
    overflow: visible;
    display: none;
    width: 100%;
    background-color: #222;
  }
  .list-itens {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .router-link {
    display: block;
    padding: 10px;
    margin: 0;
    width: 100%;
    text-align: center;
  }
  .router-link:hover {
    background-color: #111;
  }
  .menu-toggle {
    display: block;
  }
}

.content-about2{
  font-size: 1.4rem;
}

.h1-about{
    text-decoration: underline 0.1rem; ;
    font-size: 4rem;
}
.container{
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: white;
}

</style>