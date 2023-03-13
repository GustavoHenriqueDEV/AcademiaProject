const OPENAI_API_KEY = "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";
const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");

inputQuestion.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendQuestion();
  }
});

function sendQuestion() {
  const sQuestion = inputQuestion.value;

  if (sQuestion.trim() === "") {
    return;
  }

  inputQuestion.value = "Carregando...";
  inputQuestion.disabled = true;

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: sQuestion,
      max_tokens: 2048, // tamanho da resposta
      temperature: 0.5, // criatividade na resposta
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.error?.message) {
        // Trata erros da API OpenAI
        console.error("Erro:", json.error.message);
        result.value += `Erro: ${json.error.message}\n`;
      } else if (json.choices?.[0].text) {
        const text = json.choices[0].text || "Sem resposta";
        result.value += `Chat GPT: ${text}\n`;
      } else {
        result.value += "Sem resposta\n";
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => {
      // Trata erros de rede ou outras falhas na chamada da API
      console.error("Erro:", error);
      result.value += "Erro ao se comunicar com a API\n";
    })
  }
