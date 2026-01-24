let nivelSelecionado = "";
let objetivoSelecionado = "";

function selecionarNivel(nivel) {
  nivelSelecionado = nivel;

  document.getElementById("objetivo").classList.remove("hidden");
  document.getElementById("resultado").classList.add("hidden");
}

function selecionarObjetivo(objetivo) {
  objetivoSelecionado = objetivo;
  mostrarResultado();
}

function mostrarResultado() {
  const resultado = document.getElementById("resultado");
  const lista = document.getElementById("lista-resultados");

  let recomendacoes = [];

  if (objetivoSelecionado === "texto") {
    recomendacoes = [
      "ChatGPT",
      "Claude",
      "Gemini"
    ];
  }

  if (objetivoSelecionado === "imagem") {
    recomendacoes = [
      "Midjourney",
      "DALL·E",
      "Leonardo AI"
    ];
  }

  if (objetivoSelecionado === "video") {
    recomendacoes = [
      "Pika",
      "Runway",
      "Synthesia"
    ];
  }

  if (objetivoSelecionado === "produtividade") {
    recomendacoes = [
      "Notion AI",
      "ChatGPT",
      "Microsoft Copilot"
    ];
  }

  lista.innerHTML = `
    <p><strong>Nível:</strong> ${nivelSelecionado}</p>
    <p><strong>Objetivo:</strong> ${objetivoSelecionado}</p>
    <ul>
      ${recomendacoes.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

  resultado.classList.remove("hidden");
}
