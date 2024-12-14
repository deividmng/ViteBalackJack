 const finalReault = document.getElementById("final-result");


 export function calculateValue() {
    //! combirtiendo el valor a num 
    const sumPlayer = parseInt(document.getElementById("sum-player").textContent); // Obtener el total del jugador
    const sumDealer = parseInt(document.getElementById("sum-dealer").textContent); // Obtener el total del dealer
  
    if (sumPlayer > 21) {
      // El jugador ha excedido 21
      finalReault.textContent ="Perdiste, te pasaste de 21."
      console.log("Perdiste, te pasaste de 21.");
    // } else if (sumDealer > 21) {
    //   // El dealer ha excedido 21
    //   console.log("¡Ganaste, el dealer se pasó de 21!");
    } else if (sumPlayer > sumDealer) {
        finalReault.textConten ="!Ganastes"
      // El jugador tiene un total mayor que el dealer
      console.log("¡Ganaste!");
    } else if (sumPlayer < sumDealer) {
        finalReault.textConten = "Perdistes"
      // El dealer tiene un total mayor que el jugador
      console.log("Perdiste.");
    } else {
      // en el caso de empate 
      finalReault.textConten = "Tie"
      console.log("Es un empate.");
    }
  }