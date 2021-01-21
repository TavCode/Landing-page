// const button = document.getElemtById("button");
const igual = document.getElementById("igual");
const eliminar = document.getElementById("delete");
const head = document.getElementById("head");
const one_head = document.getElementById("one-head");

let booleano = true;

igual.addEventListener("click", modal);
eliminar.addEventListener("click", modal);

function modal() {
  if (booleano === true) {
    booleano = false;
    eliminar.style.display = "inline";
    igual.style.display = "none";
    head.className = "inline";
    one_head.className = "one-head";
  } else {
    booleano = true;
    igual.style.display = "inline";
    eliminar.style.display = "none";
    head.className = "none";
    one_head.className = "div-head";
  }

  window.addEventListener("resize", () => {
    const width = window.innerWidth;

    if (width === 1000) {
      eliminar.style.display = "none"; 
      one_head.className = "div-head";
      head.className = "div-sub-head";
      one_head.className = "div-head";

    }
  });
}
