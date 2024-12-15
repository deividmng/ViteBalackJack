// Elemento donde se muestra el total
const totalCount = document.getElementById("total");
const chipsCount = document.getElementById("chips");

let chips = 200; // Fichas iniciales
let total = 0;   // Total inicial

// Inicializa el valor de las fichas en el DOM
chipsCount.textContent = chips;

// Función para obtener el valor actual de total
export function getTotal() {
    return total;
}

// Función para reiniciar el total
export function resetTotal() {
    total = 0;
    totalCount.textContent = total; // Reinicia el total mostrado en el DOM
}

// Función para manejar la apuesta
export function bet(amount) {
    if (chips >= amount) { // Verifica que tengas suficientes fichas
        total += amount;
        chips -= amount; // Reduce las fichas
        totalCount.textContent = total; // Actualiza el total en el DOM
        chipsCount.textContent = chips; // Actualiza las fichas en el DOM
    } else {
        alert("No tienes suficientes fichas para realizar esta apuesta."); // Muestra un mensaje de error
    }
}

// Función para asignar eventos a los botones
export function initializeBetButtons() {
    document.getElementById("bet-five-btn").addEventListener("click", () => bet(5));
    document.getElementById("bet-ten-btn").addEventListener("click", () => bet(10));
    document.getElementById("bet-twentyfive-btn").addEventListener("click", () => bet(25));
    document.getElementById("bet-fifty-btn").addEventListener("click", () => bet(50));
    document.getElementById("bet-hundred-btn").addEventListener("click", () => bet(100));
    document.getElementById("bet-twofifty-btn").addEventListener("click", () => bet(250));
}

const clearBet = document.getElementById("clear-bet");

// Listener para limpiar la apuesta
clearBet.addEventListener("click", function() {
  // Sumar la apuesta total de nuevo a las fichas
  chips += total; 
  // Reiniciar el total de la apuesta
  total = 0;
  // Actualizar el DOM con los nuevos valores
  chipsCount.textContent = chips;
  totalCount.textContent = total;

  // Logs para depuración
  console.log("Total después de limpiar: ", total);
  console.log("Chips después de limpiar: ", chips);
});

//* funcion to add chips 

let counterEl = document.getElementById("counter-el");
let counter = 10; // Tiempo en segundos
 // Suponiendo que chips es 0 inicialmente

// Incrementar chips cada minuto
setInterval(function () {
  chips += 10; // Incrementar chips en 10 cada minuto
  chipsCount.textContent = chips;
  console.log("Chips después de limpiar: ", chips);
  localStorage.setItem("chips", chips); // Guardar las fichas en localStorage
}, 10000); // 60000 milisegundos = 1 minuto

// Actualizar el contador cada segundo
setInterval(function () {
  if (counter > 0) {
    counter--; // Decrementar el contador
    counterEl.textContent = "Next chips in: " + counter + "s";
  }
  if (counter === 0) {
    counter = 10; // Reiniciar el contador a 60 segundos cuando llegue a cero
  }
}, 1000); // 1000 milisegundos = 1 segundo

console.log("Total después de limpiar: ", total);
console.log("Chips después de limpiar: ", chips);

// Recuperar las fichas almacenadas en localStorage (si existen)
if (localStorage.getItem("chips")) {
  chips = parseInt(localStorage.getItem("chips"));
}


console.log("Total después de limpiar: ", total);
console.log("Chips después de limpiar: ", chips);