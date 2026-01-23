const afiliados = {
  iniciante: [
    {
      nome: "ChatGPT",
      desc: "Ideal para começar, conversar e aprender",
      link: "https://chat.openai.com/"
    },
    {
      nome: "Canva",
      desc: "Criação fácil de artes com IA",
      link: "SEU_LINK_AFILIADO_AQUI"
    }
  ],

  intermediario: [
    {
      nome: "Notion AI",
      desc: "Organização e produtividade com IA",
      link: "SEU_LINK_AFILIADO_AQUI"
    },
    {
      nome: "Midjourney",
      desc: "Criação de imagens com IA",
      link: "https://www.midjourney.com/"
    }
  ],

  avancado: [
    {
      nome: "GitHub Copilot",
      desc: "IA para programação profissional",
      link: "SEU_LINK_AFILIADO_AQUI"
    },
    {
      nome: "Claude AI",
      desc: "IA avançada para textos longos",
      link: "https://claude.ai/"
    }
  ]
};

function responder(nivel) {
  document.getElementById("perguntas").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  afiliados[nivel].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong>${item.nome}</strong>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank" rel="nofollow noopener">
        Acessar →
      </a>
    `;
    lista.appendChild(div);
  });
}

function resetar() {
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("perguntas").classList.remove("hidden");
}

