const perguntas = [
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "A) Retorna o tipo de dado de uma variável",
        "B) Concatena duas strings",
        "C) Realiza uma comparação estrita entre valores",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "A) Uma linguagem de programação",
        "B) Uma técnica de otimização de código",
        "C) Uma interface que representa a estrutura de um documento HTML",
      ],
      correta: 2,
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "A) var myVar;",
        "B) let myVar;",
        "C) ambas as opções estão corretas",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "A) Um tipo de loop",
        "B) Uma função aninhada que tem acesso às variáveis da função externa",
        "C) Um método de ordenação de arrays",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "A) Uma função de manipulação de strings",
        "B) Um evento que é acionado quando um elemento é clicado",
        "C) Uma forma de animação em CSS",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "A) Um tipo de dado primitivo",
        "B) Uma linguagem de programação",
        "C) Um formato de dados leve e fácil de ler",
      ],
      correta: 2,
    },
    {
      pergunta: "Como você pode prevenir a execução de código JavaScript no lado do cliente?",
      respostas: [
        "A) Não é possível prevenir a execução de código JavaScript no lado do cliente",
        "B) Desabilitando o JavaScript no navegador",
        "C) Utilizando uma VPN",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o hoisting em JavaScript?",
      respostas: [
        "A) Um método de animação",
        "B) O comportamento de mover declarações para o topo de um escopo antes da execução",
        "C) Uma técnica de criptografia",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "A) Nenhuma diferença, ambos realizam comparação estrita",
        "B) '==' realiza comparação de valor, enquanto '===' realiza comparação de valor e tipo",
        "C) '===' realiza comparação de valor, enquanto '==' realiza comparação de valor e tipo",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é o objeto global 'window' em JavaScript?",
      respostas: [
        "A) Um tipo de dado primitivo",
        "B) O escopo global onde todas as variáveis globais são definidas",
        "C) Uma função de manipulação de eventos",
      ],
      correta: 1,
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
    