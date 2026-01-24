let nivelSelecionado = "";
let objetivoSelecionado = "";

function selecionarNivel(nivel) {
  nivelSelecionado = nivel;
  document.getElementById("passo-objetivo").classList.remove("hidden");
}

function selecionarObjetivo(objetivo) {
  objetivoSelecionado = objetivo;

  const params = new URLSearchParams({
    nivel: nivelSelecionado,
    objetivo: objetivoSelecionado
  });

  window.location.href = "resultado.html?" + params.toString();
}

// ============================
// RESULTADO
// ============================

if (window.location.pathname.includes("resultado.html")) {
  const params = new URLSearchParams(window.location.search);
  const nivel = params.get("nivel");
  const objetivo = params.get("objetivo");

  const resumo = document.getElementById("resumo");
  const recomendacoes = document.getElementById("recomendacoes");

  resumo.innerText = `Perfil: ${nivel} • Objetivo: ${objetivo}`;

  const dados = {
    texto: [
      { nome: "IA Texto A", desc: "Boa para escrever artigos e posts." },
      { nome: "IA Texto B", desc: "Ideal para copy e anúncios." },
      { nome: "IA Texto C", desc: "Foco em produtividade." }
    ],
    imagem: [
      { nome: "IA Imagem A", desc: "Criação artística rápida." },
      { nome: "IA Imagem B", desc: "Imagens realistas." },
      { nome: "IA Imagem C", desc: "Boa para designers." }
    ],
    video: [
      { nome: "IA Vídeo A", desc: "Vídeos curtos." },
      { nome: "IA Vídeo B", desc: "Vídeos realistas." },
      { nome: "IA Vídeo C", desc: "Avançada para criadores." }
    ],
    marketing: [
      { nome: "IA Marketing A", desc: "Automação de anúncios." },
      { nome: "IA Marketing B", desc: "Copy persuasiva." },
      { nome: "IA Marketing C", desc: "Funil e e-mails." }
    ]
  };

  dados[objetivo].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${item.nome}</h3><p>${item.desc}</p>`;
    recomendacoes.appendChild(div);
  });
}
