let objetivo = "";

function etapa2(tipo) {
  objetivo = tipo;
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("etapa2").style.display = "block";
}

function resultado(nivel) {
  let r = document.getElementById("resultado");

  if (objetivo === "texto") {
    r.innerHTML = `
      <h2>Ferramentas recomendadas</h2>
      <ul>
        <li>Jasper AI – escrita profissional</li>
        <li>Copy.ai – textos rápidos</li>
        <li>ChatGPT – uso geral</li>
      </ul>
    `;
  }

  if (objetivo === "video") {
    r.innerHTML = `
      <h2>Ferramentas recomendadas</h2>
      <ul>
        <li>Pictory AI – texto para vídeo</li>
        <li>Runway ML – vídeos avançados</li>
        <li>Canva IA – vídeos simples</li>
      </ul>
    `;
  }

  if (objetivo === "voz") {
    r.innerHTML = `
      <h2>Ferramentas recomendadas</h2>
      <ul>
        <li>ElevenLabs – voz realista</li>
        <li>Murf AI – narração</li>
      </ul>
    `;
  }

  if (objetivo === "design") {
    r.innerHTML = `
      <h2>Ferramentas recomendadas</h2>
      <ul>
        <li>Canva IA</li>
        <li>Adobe Firefly</li>
      </ul>
    `;
  }

  document.getElementById("etapa2").style.display = "none";
}

