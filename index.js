const perguntas = [
  {
    pergunta: "Como se diz 'hello' em inglês?",
    respostas: [
      "A) Goodbye",
      "B) Hi",
      "C) Good morning",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a tradução de 'book'?",
    respostas: [
      "A) Mesa",
      "B) Livro",
      "C) Cachorro",
    ],
    correta: 1
  },
  {
    pergunta: "O que significa 'thank you' em português?",
    respostas: [
      "A) Desculpe",
      "B) Por favor",
      "C) Obrigado",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o oposto de 'big'?",
    respostas: [
      "A) Small",
      "B) Tall",
      "C) Fast",
    ],
    correta: 0
  },
  {
    pergunta: "Como se escreve 'cat' em inglês?",
    respostas: [
      "A) Cet",
      "B) Dog",
      "C) Cat",
    ],
    correta: 2
  },
  {
    pergunta: "O que significa 'I don't understand' em português?",
    respostas: [
      "A) Eu não gosto",
      "B) Eu não entendo",
      "C) Eu não quero",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a tradução de 'apple'?",
    respostas: [
      "A) Banana",
      "B) Maçã",
      "C) Laranja",
    ],
    correta: 1
  },
  {
    pergunta: "Como se diz 'good night' em português?",
    respostas: [
      "A) Bom dia",
      "B) Boa noite",
      "C) Boa tarde",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o plural de 'child'?",
    respostas: [
      "A) Children",
      "B) Childs",
      "C) Childes",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'where' em português?",
    respostas: [
      "A) Quando",
      "B) Onde",
      "C) Quem",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length 
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
      const estaCorreta = parseInt(event.target.value) === item.correta;

    corretas.delete(item);
    if (estaCorreta) {
    corretas.add(item);
  } 

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
};

  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    
    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  