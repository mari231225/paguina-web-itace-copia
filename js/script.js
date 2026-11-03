/* =====================================
   ITACE DIGITAL 4.0
===================================== */

/* ===== HISTORIA INSTITUCIONAL ===== */

function iniciarHistoria() {
  const boton = document.getElementById("botonHistoria");
  const linea = document.getElementById("lineaTiempo");

  if (!boton || !linea) return;

  boton.addEventListener("click", () => {
    const abierta = linea.classList.toggle("abierta");

    boton.setAttribute("aria-expanded", String(abierta));

    boton.textContent = abierta
      ? "📜 Ver menos ↑"
      : "📜 Ver más historia ↓";
  });
}

/* ===== MENÚ RESPONSIVO ===== */

function iniciarMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const enlaces = document.getElementById("enlaces");

  if (!menuToggle || !enlaces) return;

  menuToggle.addEventListener("click", () => {
    const abierto = enlaces.classList.toggle("activo");

    menuToggle.setAttribute("aria-expanded", String(abierto));
    menuToggle.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );

    menuToggle.textContent = abierto ? "✕" : "☰";
  });

  enlaces.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      enlaces.classList.remove("activo");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Abrir menú de navegación"
      );
      menuToggle.textContent = "☰";
    });
  });
}

/* ===== INICIAR FUNCIONES ===== */

document.addEventListener("DOMContentLoaded", () => {
  iniciarHistoria();
  iniciarMenu();
});