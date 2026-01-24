let nivelSelecionado = "";
let usoSelecionado = "";

function selectNivel(nivel) {
  nivelSelecionado = nivel;
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function selectUso(uso) {
  usoSelecionado = uso;
  document.getElementById("step2").classList.add("hidden");
  mostrarResultado();
}

function mostrarResultado() {
  const lista = document.getElementById("lista-recomendacoes");
  lista.innerHTML = "";

  const recomendacoes = bancoDeRecomendacoes[nivelSelecionado][usoSelecionado];

  recomendacoes.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.nome}</strong><br>
      <a href="${item.link}" target="_blank">Acessar</a>
    `;
    lista.appendChild(li);
  });

  document.getElementById("resultado").classList.remove("hidden");
}

function resetar() {
  nivelSelecionado = "";
  usoSelecionado = "";
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
}

/* ==========================
   BANCO DE RECOMENDAÇÕES
   (troque só os nomes e links depois)
========================== */

const bancoDeRecomendacoes = {
  iniciante: {
    texto: [
      { nome: "Ferramenta Texto A", link: "#" },
      { nome: "Ferramenta Texto B", link: "#" },
      { nome: "Curso IA para Textos", link: "#" }
    ],
    imagem: [
      { nome: "Imagem IA A", link: "#" },
      { nome: "Imagem IA B", link: "#" },
      { nome: "Curso IA para Imagens", link: "#" }
    ],
    voz: [
      { nome: "Voz IA A", link: "#" },
      { nome: "Voz IA B", link: "#" },
      { nome: "Curso Voz com IA", link: "#" }
    ],
    automacao: [
      { nome: "Automação IA A", link: "#" },
      { nome: "Automação IA B", link: "#" },
      { nome: "Curso Automação IA", link: "#" }
    ],
    codigo: [
      { nome: "IA Código A", link: "#" },
      { nome: "IA Código B", link: "#" },
      { nome: "Curso Programação com IA", link: "#" }
    ]
  },

  intermediario: {
    texto: [
      { nome: "Texto Pro A", link: "#" },
      { nome: "Texto Pro B", link: "#" },
      { nome: "Curso Copy com IA", link: "#" }
    ],
    imagem: [
      { nome: "Imagem Pro A", link: "#" },
      { nome: "Imagem Pro B", link: "#" },
      { nome: "Curso Imagem IA", link: "#" }
    ],
    voz: [
      { nome: "Voz Pro A", link: "#" },
      { nome: "Voz Pro B", link: "#" },
      { nome: "Curso Voz Avançada", link: "#" }
    ],
    automacao: [
      { nome: "Automação Pro A", link: "#" },
      { nome: "Automação Pro B", link: "#" },
      { nome: "Curso Automação Avançada", link: "#" }
    ],
    codigo: [
      { nome: "Código Pro A", link: "#" },
      { nome: "Código Pro B", link: "#" },
      { nome: "Curso Dev com IA", link: "#" }
    ]
  },

  avancado: {
    texto: [
      { nome: "Texto Expert A", link: "#" },
      { nome: "Texto Expert B", link: "#" },
      { nome: "Mentoria IA Texto", link: "#" }
    ],
    imagem: [
      { nome: "Imagem Expert A", link: "#" },
      { nome: "Imagem Expert B", link: "#" },
      { nome: "Mentoria IA Visual", link: "#" }
    ],
    voz: [
      { nome: "Voz Expert A", link: "#" },
      { nome: "Voz Expert B", link: "#" },
      { nome: "Mentoria Voz IA", link: "#" }
    ],
    automacao: [
      { nome: "Automação Expert A", link: "#" },
      { nome: "Automação Expert B", link: "#" },
      { nome: "Mentoria Automação IA", link: "#" }
    ],
    codigo: [
      { nome: "Código Expert A", link: "#" },
      { nome: "Código Expert B", link: "#" },
      { nome: "Mentoria Dev IA", link: "#" }
    ]
  }
};
