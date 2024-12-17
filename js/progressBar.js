let currentNumberOne = parseInt(localStorage.getItem('currentNumberOne')) || 0;
let currentNumberTwo = 100; // El número de la derecha permanece constante
let progress = parseInt(localStorage.getItem('progress')) || 0;
let maxProgress = 100;
// Cargar el estado al cargar la página
window.onload = loadState;
//! i didt work cause I  did not sabe the currenNumber on the local

// Función para cargar el estado desde localStorage
export function loadState() {
  currentNumberOne = parseInt(localStorage.getItem("currentNumberOne")) || 0;
  progress = parseInt(localStorage.getItem("progress")) || 0;
  // Actualizar la interfaz con los valores cargados
  document.getElementById("left-number").textContent = currentNumberOne;
  document.getElementById("right-number").textContent = currentNumberTwo;
  document.getElementById("fill-bar").style.width = progress + "%";
}

// Función para guardar el estado en localStorage
function saveState() {
  localStorage.setItem("currentNumberOne", currentNumberOne);
  localStorage.setItem("progress", progress);
}

// Función para incrementar el progreso
export function increaseProgress() {
  if (progress < maxProgress) {
    progress += 1; // Incrementa la barra en 1%
    if (progress > maxProgress) progress = maxProgress;
    
    // Actualiza la barra de progreso visualmente
    document.getElementById("fill-bar").style.width = progress + "%";

    // Incrementa el número a la izquierda
    currentNumberOne++;
    
    // Actualiza la interfaz con el nuevo número
    document.getElementById("left-number").textContent = currentNumberOne;
    
    // Guarda el estado en localStorage después de actualizar el progreso
    saveState();
  }
}


