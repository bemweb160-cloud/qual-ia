/* =========================
   ESTADO GLOBAL
========================= */
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

  window.location.href = "resultado.html";
}

/* =========================
   PÁGINA DE RESULTADO
========================= */
document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("resultado-page")) return;

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
      { nome: "ChatGPT", desc: "Ideal para escrita, estudos e produtividade." },
      { nome: "Claude", desc: "Excelente para textos longos e detalhados." },
      { nome: "Gemini", desc: "Bom para pesquisa e integração com Google." }
    ],
    imagem: [
      { nome: "Midjourney", desc: "Imagens artísticas e criativas." },
      { nome: "Leonardo AI", desc: "Imagens realistas e controle criativo." },
      { nome: "DALL·E", desc: "Simples e rápido." }
    ],
    video: [
      { nome: "Runway", desc: "Criação e edição de vídeos." },
      { nome: "Pika", desc: "Vídeos curtos com IA." },
      { nome: "Synthesia", desc: "Vídeos com avatar profissional." }
    ]
  };

  lista.innerHTML = "";

  dados[objetivo].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.nome}</h3>
      <p>${item.desc}</p>
    `;
    lista.appendChild(card);
  });
});
