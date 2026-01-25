let nivel = "";

function setNivel(n) {
  nivel = n;
  const card = document.getElementById("objetivoCard");
  card.classList.remove("hidden");

  card.scrollIntoView({ behavior: "smooth" });
}

function finalizar(objetivo) {
  document.getElementById("loader").classList.remove("hidden");

  setTimeout(() => {
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("objetivo", objetivo);
    window.location.href = "resultado.html";
  }, 700);
}

if (window.location.pathname.includes("resultado")) {
  const nivel = localStorage.getItem("nivel");
  const objetivo = localStorage.getItem("objetivo");

  document.getElementById("resumo").innerText =
    `Nível: ${nivel} • Objetivo: ${objetivo}`;

  // 👉 AQUI você troca nomes, descrições e LINKS depois
  const dados = {
    texto: [
      { nome: "Ferramenta A", desc: "Boa para escrita rápida e ideias." },
      { nome: "Ferramenta B", desc: "Ideal para textos longos." },
      { nome: "Ferramenta C", desc: "Foco em produtividade." }
    ],
    imagem: [
      { nome: "Ferramenta X", desc: "Criação de imagens realistas." },
      { nome: "Ferramenta Y", desc: "Estilo artístico." },
      { nome: "Ferramenta Z", desc: "Rápida e simples." }
    ],
    video: [
      { nome: "Ferramenta V1", desc: "Vídeos curtos com IA." },
      { nome: "Ferramenta V2", desc: "Vídeos profissionais." },
      { nome: "Ferramenta V3", desc: "Avatares e apresentações." }
    ],
    produtividade: [
      { nome: "Ferramenta P1", desc: "Organização e automação." },
      { nome: "Ferramenta P2", desc: "Auxílio em tarefas diárias." },
      { nome: "Ferramenta P3", desc: "Foco em trabalho." }
    ]
  };

  const lista = document.getElementById("lista");

  dados[objetivo].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h3>${item.nome}</h3><p>${item.desc}</p>`;
    lista.appendChild(div);
  });
}
