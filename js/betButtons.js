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
