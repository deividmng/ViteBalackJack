// import { initializeBetButtons ,getTotal ,resetTotal,win} from "./betButtons.js"; // calling the bet 
//  const message = document.querySelector(".message");
//  export function calculateValue() {
//     //! combirtiendo el valor a num 
//     const sumPlayer = parseInt(document.getElementById("sum-player").textContent); // Obtener el total del jugador
//     const sumDealer = parseInt(document.getElementById("sum-dealer").textContent); // Obtener el total del dealer
  
//     if (sumPlayer > 21) {
//       // El jugador ha excedido 21
//       message.textContent ="Perdiste, te pasaste de 21."
//       console.log("Perdiste, te pasaste de 21 viene de calculeValue.");
//       win()
//     // } else if (sumDealer > 21) {
//     //   // El dealer ha excedido 21
//     //   console.log("¡Ganaste, el dealer se pasó de 21!");
//     } else if (sumPlayer > sumDealer) {
//         message.textConten ="!Ganastes"
//         win()
//       // El jugador tiene un total mayor que el dealer
//       console.log("¡Ganaste!");
//     } else if (sumPlayer < sumDealer) {
//         message.textConten = "Perdistes"
//       // El dealer tiene un total mayor que el jugador
//       console.log("Perdiste.");
//     } else {
//       // en el caso de empate 
//       message.textConten = "Tie"
//       console.log("Es un empate.");
//     }
//   }