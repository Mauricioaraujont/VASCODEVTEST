document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const imagemModal = document.getElementById("imagemModal");
  const botaoFechar = document.getElementById("fechar");
  const fotos = document.querySelectorAll(".item img");

  fotos.forEach(function (foto) {
    foto.addEventListener("click", function () {
      imagemModal.src = foto.src;
      imagemModal.alt = foto.alt;
      modal.classList.add("ativo");
    });
  });

  botaoFechar.addEventListener("click", function () {
    modal.classList.remove("ativo");
    imagemModal.src = "";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("ativo");
      imagemModal.src = "";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.classList.remove("ativo");
      imagemModal.src = "";
    }
  });
});