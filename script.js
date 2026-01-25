let nivelSelecionado = "";

// ETAPA 1 → escolher nível
function setNivel(nivel) {
  nivelSelecionado = nivel;

  const objetivoCard = document.getElementById("objetivoCard");
  objetivoCard.classList.remove("hidden");

  // rolagem suave para próxima etapa
  objetivoCard.scrollIntoView({ behavior: "smooth" });
}

// ETAPA 2 → finalizar e ir para resultado
function finalizar(objetivo) {
  localStorage.setItem("nivel", nivelSelecionado);
  localStorage.setItem("objetivo", objetivo);

  // pequeno delay para UX
  setTimeout(() => {
    window.location.href = "resultado.html";
  }, 300);
}

/* ===========================
   PÁGINA DE RESULTADO
=========================== */

if (document.body.classList.contains("resultado-page")) {
  const nivel = localStorage.getItem("nivel");
  const objetivo = localStorage.getItem("objetivo");

  const resumo = document.getElementById("resumo");
  const lista = document.getElementById("lista");

  if (!nivel || !objetivo) {
    resumo.innerText = "Escolha não encontrada. Volte e refaça o teste.";
    return;
  }

  resumo.innerText = `Nível: ${nivel} • Objetivo: ${objetivo}`;

  const dados = {
    texto: [
      { nome: "ChatGPT", desc: "Ideal para textos, ideias, estudos e produtividade." },
      { nome: "Claude", desc: "Excelente para textos longos e explicações detalhadas." },
      { nome: "Gemini", desc: "Bom para pesquisa e integração com Google." }
    ],
    imagem: [
      { nome: "Midjourney", desc: "Imagens artísticas e criativas de alto nível." },
      { nome: "Leonardo AI", desc: "Ótimo para imagens realistas e controle criativo." },
      { nome: "DALL·E", desc: "Rápido e simples para gerar imagens." }
    ],
    video: [
      { nome: "Runway", desc: "Criação e edição de vídeos com IA." },
      { nome: "Pika", desc: "Geração rápida de vídeos curtos." },
      { nome: "Synthesia", desc: "Vídeos com avatar e apresentação profissional." }
    ]
  };

  lista.innerHTML = "";

  if (!dados[objetivo]) {
    lista.innerHTML = "<p>Nenhuma recomendação encontrada.</p>";
    return;
  }

  dados[objetivo].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.nome}</h3>
      <p>${item.desc}</p>
      <button class="cta">Qual escolher?</button>
    `;
    lista.appendChild(div);
  });
}
