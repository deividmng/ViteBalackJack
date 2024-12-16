export function resetGameAfterDelay() {
  setTimeout(function () {
    const sumDealer = document.getElementById("sum-dealer");
    const sumPlayer = document.getElementById("sum-player");
    
    // Reiniciar los totales mostrados
    sumPlayer.textContent = 0;
    sumDealer.textContent = 0;
    // Ocultar los botones de juego
    const buttosPlayGame = document.getElementById("buttos-play-game");
    buttosPlayGame.style.display = "none";

    // Mostrar los botones principales
    const mainButtos = document.getElementById("buttons-start");
    mainButtos.style.display = "flex";

    // Ocultar el área principal del juego
    const MainContainer = document.getElementById("main-area");
    MainContainer.style.display = "none";

    // Eliminar las cartas del jugador
    const cardsContainer = document.getElementById("cards-player");
    cardsContainer.innerHTML = ""; // Limpia las cartas del jugador

    // Eliminar las cartas del dealer
    const dealerContainer = document.getElementById("dealer-container");
    dealerContainer.innerHTML = ""; // Limpia las cartas del dealer


    const buttosBet = document.getElementById("bet-buttons")
    buttosBet.style.display = "flex"

    //! here is the arrows to show up again 
    const arrows = document.getElementsByClassName('allArrows');

    for (let arrow of arrows) {
      arrow.style.display = "flex";
    }
    

    // const messageDisplay  = document.getElementById("message")
    // messageDisplay.style.display = "none"
    // Aquí puedes añadir cualquier otra lógica necesaria para reiniciar el juego
    console.log("Juego reiniciado correctamente.");
  }, 3000); // El retraso es de 2000 milisegundos (2 segundos)
}


