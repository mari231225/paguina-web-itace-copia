function iniciarHistoria() {
  const boton = document.getElementById("botonHistoria");
  const linea = document.getElementById("lineaTiempo");
  if (!boton || !linea) return;

  boton.addEventListener("click", () => {
    const abierta = linea.classList.toggle("abierta");
    boton.setAttribute("aria-expanded", abierta);
    boton.textContent = abierta ? "📜 Ver menos ↑" : "📜 Ver más historia ↓";
    if (!abierta) linea.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", iniciarHistoria);