let pergunta;
let alternativas;
let pontos = 0;
let estadoJogo = "inicio"; // Pode ser "inicio", "quiz", "fim"
let respostaEscolhida = "";
let indicePergunta = 0;

const perguntasCampo = [
  { pergunta: "Onde você encontra vacas?", alternativas: ["Na fazenda", "No zoológico", "Na cidade", "Na praia"], respostaCorreta: 'A' },
  { pergunta: "Onde cresce o milho?", alternativas: ["Na floresta", "No campo", "Na cidade", "No oceano"], respostaCorreta: 'B' },
  { pergunta: "Qual desses animais vive no campo?", alternativas: ["Cavalo", "Tigre", "Leão", "Cachorro"], respostaCorreta: 'A' },
  { pergunta: "Qual dessas plantas cresce no campo?", alternativas: ["Cacto", "Couve", "Pineapple", "Petróleo"], respostaCorreta: 'B' },
  { pergunta: "Onde você pode ver muitos pastores?", alternativas: ["Na escola", "Na cidade", "Na fazenda", "No shopping"], respostaCorreta: 'C' },
  { pergunta: "Onde o trigo é cultivado?", alternativas: ["Na floresta", "No campo", "No deserto", "Na cidade"], respostaCorreta: 'B' }
];

function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  if (estadoJogo === "inicio") {
    // Tela inicial
    fill(0);
    text("Quiz sobre o Campo", width / 2, height / 2 - 40);
    text("Pressione 'Enter' para começar", width / 2, height / 2 + 40);
  } else if (estadoJogo === "quiz") {
    // Perguntas e respostas
    fill(0);
    textAlign(LEFT, TOP);
    text(`Pontos: ${pontos}`, 10, 10);
    text(pergunta, width / 2, height / 2 - 40);
    text("A) " + alternativas[0], width / 2, height / 2);
    text("B) " + alternativas[1], width / 2, height / 2 + 40);
    text("C) " + alternativas[2], width / 2, height / 2 + 80);
    text("D) " + alternativas[3], width / 2, height / 2 + 120);
  } else if (estadoJogo === "fim") {
    // Tela final
    fill(0);
    text("Fim do Quiz!", width / 2, height / 2 - 40);
    text(`Sua pontuação: ${pontos}`, width / 2, height / 2);
    text("Pressione 'R' para jogar novamente", width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  if (estadoJogo === "inicio" && keyCode === ENTER) {
    // Iniciar o quiz
    estadoJogo = "quiz";
    indicePergunta = 0; // Começar pela primeira pergunta
    gerarPergunta();
  }

  if (estadoJogo === "quiz") {
    if (key === 'A' || key === 'B' || key === 'C' || key === 'D') {
      respostaEscolhida = key;
      verificarResposta();
      if (indicePergunta < perguntasCampo.length - 1) {
        // Passar para a próxima pergunta
        indicePergunta++;
        gerarPergunta();
      } else {
        estadoJogo = "fim";
      }
    }
  }

  if (estadoJogo === "fim" && key === 'R') {
    // Reiniciar o quiz
    pontos = 0;
    estadoJogo = "inicio";
  }
}

function gerarPergunta() {
  const perguntaAtual = perguntasCampo[indicePergunta];
  pergunta = perguntaAtual.pergunta;
  alternativas = perguntaAtual.alternativas;
}

function verificarResposta() {
  let respostaCerta = perguntasCampo[indicePergunta].respostaCorreta;

  if (respostaEscolhida.toUpperCase() === respostaCerta) {
    pontos += 10;
  } else {
    pontos -= 5;
  }
}
//REFERENCIACHATGPT
