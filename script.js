let nivel = "";

function setNivel(n) {
  nivel = n;
  document.getElementById("objetivoCard").classList.remove("hidden");
}

function finalizar(objetivo) {
  localStorage.setItem("nivel", nivel);
  localStorage.setItem("objetivo", objetivo);
  window.location.href = "resultado.html";
}

if (window.location.pathname.includes("resultado")) {
  const nivel = localStorage.getItem("nivel");
  const objetivo = localStorage.getItem("objetivo");

  const resumo = document.getElementById("resumo");
  const lista = document.getElementById("lista");

  resumo.innerText = `Nível: ${nivel} • Objetivo: ${objetivo}`;

  const dados = {
    texto: [
      { nome: "ChatGPT", desc: "Excelente para escrita, ideias e produtividade." },
      { nome: "Claude", desc: "Ótimo para textos longos e respostas naturais." },
      { nome: "Gemini", desc: "Integração forte com Google e pesquisa." }
    ],
    imagem: [
      { nome: "Midjourney", desc: "Imagens artísticas de alta qualidade." },
      { nome: "Leonardo AI", desc: "Ideal para imagens realistas e controle criativo." },
      { nome: "DALL·E", desc: "Simples e rápido para criar imagens." }
    ],
    video: [
      { nome: "Pika", desc: "Criação de vídeos curtos com IA." },
      { nome: "Runway", desc: "Edição e geração de vídeo profissional." },
      { nome: "Synthesia", desc: "Vídeos com avatar e apresentação." }
    ]
  };

  dados[objetivo].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h3>${item.nome}</h3><p>${item.desc}</p>`;
    lista.appendChild(div);
  });
}
