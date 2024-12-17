
// Elemento donde se muestra el totalbet
const totalCount = document.getElementById("total-bet");
const chipsCount = document.getElementById("chips");

let chips = localStorage.getItem("chips") ? parseInt(localStorage.getItem("chips")) : 200; // Valor inicial 200 si no existe en localStorage

 // Fichas iniciales
let totalbet = 0;   // Total inicial

// Inicializa el valor de las fichas en el DOM
chipsCount.textContent = `chips ${chips}`;

// Función para obtener el valor actual de totalbet
export function getTotal() {
    return totalbet;
}

// Función para reiniciar el totalbet
//! use to as well for the lose function  

export function resetTotal() {
    totalbet = 0;
    totalCount.textContent = totalbet; // Reinicia el totalbet mostrado en el DOM
}

// Función para manejar la apuesta
export function bet(amount) {
    if (chips >= amount) { // Verifica que tengas suficientes fichas
        totalbet += amount;
        chips -= amount; // Reduce las fichas
        totalCount.textContent = totalbet; // Actualiza el totalbet en el DOM
        chipsCount.textContent = `chips ${chips} `; // Actualiza las fichas en el DOM
    } else {
        alert("No tienes suficientes fichas para realizar esta apuesta."); // Muestra un mensaje de error
    }
}


export function win() {
  // Multiplicar el totalbet por 2 y guardarlo en la variable 'winnings'
  let winnings = totalbet * 2;
  console.log(`totalll ===== bet ${totalbet}`);
  
  // Actualizar las fichas con las ganancias
  chips += winnings; // Agregar las ganancias a las fichas del jugador

  // Restablecer totalbet a 0 (si lo deseas reiniciar)
  totalbet = 0;

  // Actualizar el DOM con los nuevos valores
  chipsCount.textContent = `chips ${chips} `;  // Actualiza el valor de las fichas en el DOM
  totalCount.textContent = totalbet;  // Reinicia el valor de totalbet en el DOM (si lo deseas reiniciar)

  // Guardar el nuevo valor de chips en localStorage
  localStorage.setItem("chips", chips); // Guardar las fichas en localStorage

  // Imprimir el resultado para verificar en la consola
  console.log('Resultado después de ganar:');
  console.log('Winnings: when I win the bet ', winnings);
  console.log('Total (debe ser 0 ahora)=====================: ', totalbet);
  console.log('Chips después de ganar: ', chips);
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
  // Sumar la apuesta totalbet de nuevo a las fichas
  chips += totalbet; 
  // Reiniciar el totalbet de la apuesta
  totalbet = 0;
  // Actualizar el DOM con los nuevos valores
  chipsCount.textContent = `chips ${chips} `;
  totalCount.textContent = totalbet;

  // Logs para depuración
  console.log("Total después de limpiar: ", totalbet);
  console.log("Chips después de limpiar: ", chips);
});

//* funcion to add chips 

let counterEl = document.getElementById("counter-el");
let counter = 10; // Tiempo en segundos
 // Suponiendo que chips es 0 inicialmente

// Incrementar chips cada minuto
setInterval(function () {
  chips += 10; // Incrementar chips en 10 cada minuto
  chipsCount.textContent = `chips ${chips} `;
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

console.log("Total después de limpiar: ", totalbet);
console.log("Chips después de limpiar: ", chips);

// Recuperar las fichas almacenadas en localStorage (si existen)
if (localStorage.getItem("chips")) {
  chips = parseInt(localStorage.getItem("chips"));
}


console.log("Total después de limpiar: ", totalbet);
console.log("Chips después de limpiar: ", chips);



