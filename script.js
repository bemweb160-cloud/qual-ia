let nivelSelecionado = "";

/* =========================
   ETAPA 1 – NÍVEL
========================= */
function setNivel(nivel) {
  nivelSelecionado = nivel;

  const objetivoCard = document.getElementById("objetivoCard");
  if (!objetivoCard) return;

  objetivoCard.classList.remove("hidden");
  objetivoCard.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   ETAPA 2 – OBJETIVO
========================= */
function finalizar(objetivo) {
  if (!nivelSelecionado) return;

  localStorage.setItem("nivel", nivelSelecionado);
  localStorage.setItem("objetivo", objetivo);

  setTimeout(() => {
    window.location.href = "resultado.html";
  }, 300);
}

/* =========================
   PÁGINA DE RESULTADO
========================= */
if (document.body.classList.contains("resultado-page")) {
  const nivel = localStorage.getItem("nivel");
  const objetivo = localStorage.getItem("objetivo");

  const resumo = document.getElementById("resumo");
  const lista = document.getElementById("lista");

  if (!resumo || !lista || !nivel || !objetivo) {
    if (resumo) {
      resumo.innerText = "Escolha não encontrada. Volte e refaça o teste.";
    }
    return;
  }

  resumo.innerText = `Nível: ${nivel} • Objetivo: ${objetivo}`;

  const dados = {
    texto: [
      { nome: "ChatGPT", desc: "Ideal para escrita, estudos e produtividade." },
      { nome: "Claude", desc: "Excelente para textos longos e detalhados." },
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
      { nome: "Synthesia", desc: "Vídeos com avatar profissional." }
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
