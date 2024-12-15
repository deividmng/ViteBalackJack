//! lo del l abarra
let progress = 0; // Porcentaje inicial de la barra
const maxProgress = 100; // Límite de la barra
let currentNumberOne = 0; // Número inicial a la izquierda
const currentNumberTwo = maxProgress; // Número inicial a la derecha

export function loadState() {
  currentNumberOne = parseInt(localStorage.getItem("currentNumberOne")) || 0;
  progress = parseInt(localStorage.getItem("progress")) || 0;
  document.getElementById("left-number").textContent = currentNumberOne;
  document.getElementById("right-number").textContent = currentNumberTwo;
  document.getElementById("fill-bar").style.width = progress + "%";
}

function saveState() {
  localStorage.setItem("currentNumberOne", currentNumberOne);
  localStorage.setItem("progress", progress);
}

export function increaseProgress() {
  if (progress < maxProgress) {
    progress += 1; // Incrementa la barra en 1%
    if (progress > maxProgress) progress = maxProgress;
    document.getElementById("fill-bar").style.width = "100%";
    currentNumberOne++;
    setTimeout(() => {
      document.getElementById("fill-bar").style.width = progress + "%";
      saveState();
    }, 1000);
    document.getElementById("left-number").textContent = currentNumberOne;
  }
}

// document.getElementById('progress-button').addEventListener('click', increaseProgress);
