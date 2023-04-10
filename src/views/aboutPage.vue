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
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">*NOME DA ACADEMIA</h1></div>
    <p class="content-about2">Bem-vindo(a) à *NOME DA ACADEMIA* uma academia que tem como objetivo promover a saúde e o bem-estar dos nossos alunos, através de um ambiente acolhedor e equipamentos modernos.

Nós acreditamos que praticar exercícios físicos é fundamental para ter uma vida saudável e equilibrada, e por isso oferecemos uma variedade de opções de treinamento, para que cada aluno possa encontrar a atividade que mais lhe agrada e se adapta às suas necessidades.

Com uma equipe de profissionais capacitados e experientes, estamos sempre prontos para oferecer o melhor atendimento e suporte aos nossos alunos, desde a orientação para a realização correta dos exercícios até o planejamento de treinos personalizados.

Além disso, na *NOME DA ACADEMIA valorizamos a importância do ambiente e do convívio social para a motivação e o sucesso nos treinos, por isso criamos um espaço aconchegante e com uma atmosfera de cooperação e amizade, onde nossos alunos se sentem motivados a alcançar seus objetivos.

Acreditamos que todos podem ser bem mais felizes e saudáveis, e é por isso que a *NOME DA ACADEMIA* está aqui, para te ajudar a conquistar o seu melhor eu. Venha nos conhecer e fazer parte da nossa família!</p>
   </div>
   <div class="container" >
    <div class="content-about"><h1 class="h1-about">MISSÃO</h1></div>
    <p class="content-about2">Na nossa academia, acreditamos que a saúde é o maior bem que podemos ter. Por isso, nossa missão é oferecer aos nossos alunos um ambiente seguro e motivador para que possam cuidar do corpo e da mente através da prática de exercícios físicos e atividades que promovam o bem-estar.</p>
    <div class="content-about"><h1 class="h1-about">VISÕES</h1></div>
    <p class="content-about2">Queremos ser reconhecidos como uma academia que oferece um ambiente acolhedor, onde nossos alunos se sintam motivados a treinar e a cuidar da sua saúde, em um espaço que ofereça conforto e segurança em todos os momentos.</p>
    <div class="content-about"><h1 class="h1-about">Métodos</h1></div>
    <p class="content-about2">A *NOME DA ACADEMIA* dispõe de uma ampla estrutura com equipamentos para a prática de exercícios físicos, que traz toda sua bagagem em treinamento e infraestrutura de alta qualidade.</p>
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


/* Estilos padrão para desktops e tablets */
.container {
  margin-top: 100px;
  color: white;
}

.content-about2 {
  font-size: 1.4rem;
  line-height: 1.5;
}

.h1-about {
  text-decoration: underline 0.1rem;
  font-size: 4rem;
}

/* Estilos para dispositivos móveis */
@media screen and (max-width: 600px) {
  .titulo {
    margin-top: 20px;
  }

  .h1-about {
    font-size: 2rem;
  }

  .content-about2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .container {
    margin-top: 50px;
  }
 
}
.background{
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
  background-position: center, center ;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat; 
}

</style>