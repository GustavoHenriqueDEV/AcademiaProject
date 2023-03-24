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
            <li><router-link class="router-link" to="/aboutPage">quem somos</router-link></li>
            <li><router-link class="router-link" to="/contactPage">Contato</router-link></li>
            <li><router-link class="router-link" to="/locationPage">Localização</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="content-makeTrain">
        <h1 class="a">Prepare seu treino!</h1>
      </div>
      <hr>
      <div class="Select-container">
        <div class="theme">Objetivo:</div>
        <select v-model="objetivo" class="form-select" aria-label="Default select example">
          <option value="Ganho de massa">Hipertrofia(Ganho de massa muscular)</option>
          <option value="Perder peso">Perca de peso</option>
        </select>
        <div class="theme">Peso:</div>
        <select v-model="peso" class="form-select" aria-label="Default select example">
          <option selected>Peso</option>
          <option value="30">30kg - 40kg</option>
          <option value="40">40kg - 50kg</option>
          <option value="50">50kg - 60kg</option>
          <option value="70">60kg - 70kg</option>
          <option value="80">60kg - 80kg</option>
          <option value="90">80kg - 100kg</option>
        </select>
      </div>
      <div class="btn-content">
        <button @click="proteinCalc()" class="btn-make">PREPARAR TREINO</button>
      </div>
      <div class="textarea-content">
        <textarea v-model="result" readonly style="resize: none"></textarea>
      </div>

    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      objetivo: "",
      peso: "20",
      result: ""
    }
  },
  methods: {
    proteinCalc() {
      this.result = this.peso * (0, 83)
      console.log(this.result)
    }
  },
















  /**  methods: {
     sendQuestion() {
       const sQuestion = this.frase.trim();
       if (!sQuestion) {
         return;
       }
 
       const url = "https://api.openai.com/v1/completions";
       const payload = {
         model: "text-davinci-003",
         prompt: sQuestion,
         max_tokens: 2048,
         temperature: 0.5
       };
       const headers = {
         Accept: "application/json",
         "Content-Type": "application/json",
         Authorization: "Bearer " + this.openaiApiKey
       };
 
       fetch(url, {
         method: "POST",
         headers,
         body: JSON.stringify(payload)
       })
         .then(response => response.json())
         .then(json => {
           const text = json.choices?.[0]?.text || "Sem resposta";
           this.result += `Chat GPT: ${text}\n`;
         })
         .catch(error => {
           this.result += `Error: ${error.message}\n`;
         })
         .finally(() => {
           this.inputQuestion = "";
         });
 
       this.result += `Eu: ${sQuestion}\n`;
 
     },
 
 
     gerarFrase() {
       this.frase = "Faça um treino para a academia com o objetivo de" + " " + this.objetivo + " " + "treinando apenas" + " " + this.dia + " " + "com uma altura de" + " " + this.altura + " " + "pesando" + " " + this.peso
       console.log(this.frase)
 
     },
     fazerTreino() {
       this.gerarFrase(),
         this.sendQuestion()
     }
   },
 */


}
</script>
<style>
@media screen and (max-width: 600px) {
  .a {
    margin-top: 15px;
    font-size: 1.2rem;
  }

  .btn-content {
    width: 60%;
    margin-left: 70px;
  }

  .btn-make {
    width: 50%;
  }

  select.form-select {
    font-size: 1rem;
  }

  select.form-select {
    font-size: 1rem;
    margin: 0 10px;
    height: 30px;
    width: 30rem;
    margin-left: 40px;
  }

  textarea {
    width: 100%;
    height: 100%;
  }

  .textarea-content textarea {
    font-size: 0.7rem;
  }

  .Select-container {
    display: flex;
    flex-direction: column;
  }

  .theme {
    margin-left: 150px;
  }
}




.Select-container {
  display: flex;
}


.theme {
  padding: 0 5px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: rgba(225, 223, 233, 0.904);
  font-size: 1.6rem;
  margin-top: 10px;
}


.btn-content {
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
}


.background {
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)), url(../assets/academiaWallapaper.jpg);
  background-position: center, center;
  background-size: cover;
  background-position-y: auto;
  background-repeat: no-repeat;
}

.a {
  text-transform: uppercase;
  letter-spacing: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 5rem;
}


.textarea-content {
  display: flex;
  justify-content: center;
  height: 70vh;
  margin-top: 15px;
  width: 100%;
  resize: none;

}

.btn-make:hover {
  background-color: #83888d;
  /* altere a cor de fundo para a cor desejada */
  border-color: #a1b3c7;
  /* altere a cor da borda para a cor desejada */
  color: #fff;
  /* altere a cor do texto para a cor desejada */
}

textarea {
  border-radius: 10px;
  height: 70%;
  width: 70%;
  resize: none;
  border: none;
  padding: 8px;
  background-color: #3c3d46;
  color: white;
  outline: none;
  font-size: 50Px;
  text-align: justify;
}

.btn-make {
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  border: solid orange 1px;
  background-color: transparent;
  width: 50rem;
  height: 50px;
  letter-spacing: 1rem;
  font-size: 1.2rem;
  color: white;

}

.img {
  width: 5%;
}

select.form-select {
  font-size: 1.55rem;
}

select.form-selec {
  margin: 0 10px;
  height: 40px;
}

.content-makeTrain {
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}










/**Aqui está todo o css relacionado ao header e app-bar*/
@media only screen and (max-width: 768px) {

  .list-itens {
    margin: 0;
    font-size: 6px;
  }

  .logo {
    margin-left: 21px;
    margin-bottom: 10px;
  }

  .header-menu {
    width: 100%;
  }

  .router-link {
    display: block;
    width: 100%;
    text-align: center;
  }

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

header {
  width: 100%;
  height: 7vh;
  background-color: rgba(22, 22, 22, 0.5)
}

.router-link {
  cursor: pointer;
  letter-spacing: 4px;
  color: inherit;
  text-decoration: none;
}

.menu-content {
  height: 100%;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-around;
  display: flex;
  font-size: 1.8rem;
}

.list-itens,
li {
  color: white;
  cursor: pointer;
  gap: 40px;
  list-style: none;
  display: flex;
  transform: 2ms ease-in;
  position: relative;
}

.list-itens li:before {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 1px;
  background-color: yellow;
  transition: all 1.5s ease;
}

.list-itens li:hover:before {
  width: 100%;
}

.logo {
  letter-spacing: 6px;
  font-size: 2.4rem;
  cursor: pointer;
}

body {
  background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)), url(../assets/academiaWallapaper.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fit {
  max-height: 5vh;
}
</style>