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
   <div class="titulo"><div class="about">Sobre nós</div></div>
   <main-teste>
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">A bem mais fit</h1></div>
    <p class="content-about2">Fundada em Setembro de 2007, a Stilo Academia desde sua inauguração se preocupa em trazer a saúde e a boa forma aos seus alunos, que contam com todo o suporte de profissionais bem preparados, além de estrutura e aparelhagem completa para o desenvolvimento de diversas práticas esportivas que você pode conferir no menu modalidades.</p>
    <p class="content-about2">A academia conta com profissionais qualificados como: nutricionistas, fisioterapeutas e professores de educação física, aptos a atenderem pessoas de todas as idades que queiram praticar atividades físicas, tanto para fins estéticos, terapêuticos ou capacitadores.</p>
    <p class="content-about2">A Stilo Academia dispõe de uma ampla estrutura com equipamentos modernos e adequados a prática de exercícios físicos, que traz toda sua bagagem em treinamento e infraestrutura de alta qualidade.</p>
   </div>
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">missão</h1></div>
    <p class="content-about2">Fundada em Setembro de 2007, a Stilo Academia desde sua inauguração se preocupa em trazer a saúde e a boa forma aos seus alunos, que contam com todo o suporte de profissionais bem preparados, além de estrutura e aparelhagem completa para o desenvolvimento de diversas práticas esportivas que você pode conferir no menu modalidades.</p>
    <div class="content-about"><h1 class="h1-about">VISÕES</h1></div>
    <p class="content-about2">A academia conta com profissionais qualificados como: nutricionistas, fisioterapeutas e professores de educação física, aptos a atenderem pessoas de todas as idades que queiram praticar atividades físicas, tanto para fins estéticos, terapêuticos ou capacitadores.</p>
    <div class="content-about"><h1 class="h1-about">Métodos</h1></div>
    <p class="content-about2">A Stilo Academia dispõe de uma ampla estrutura com equipamentos modernos e adequados a prática de exercícios físicos, que traz toda sua bagagem em treinamento e infraestrutura de alta qualidade.</p>
   </div>



    </main-teste>
   
 
   


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


.h1-about{
    cursor: pointer;
    padding: 6px 6px 6px 6px;
    border-radius: 8px;
    border: solid 1px white;
    margin-left: 20px;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    display: flex;
    color: yellow;
    justify-content: center;
}

.content-about2{
    cursor: pointer;
    margin-bottom: 50px;
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-left: 100px;
    height: 80px;
    width: 700px;
}
.content-about{
    margin-right: 20px;
    height: 80px;
    width: 800px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 72.6vh;
}

.about{
    justify-content: center;
    align-content: center;
    justify-items: center;
}
.titulo{
    color: yellow;
    margin-top: 3px;
    border-bottom: 1px solid white;
    text-transform: uppercase;
    letter-spacing: 1.5rem;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 20vh;
}



</style>