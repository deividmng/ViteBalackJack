
//! resetGameAfterDelay()  is to restar the game afer win or lose  use later if is active 
 export  function resetGameAfterDelay() {
    setTimeout(function() {
      const sumDealer = document.getElementById("sum-dealer");
      const sumPlayer = document.getElementById("sum-player");
      // sumDealer.style.display = "none";  // Ocultar el total del dealer
      // sumPlayer.style.display = "none";  // Ocultar el total del jugador
      
      total = 0;             // Resetear el total del jugador
      totalDealer = 0;       // Resetear el total del dealer
      sumPlayer.textContent = total;  // Actualizar el total del jugador en la interfaz
      sumDealer.textContent = totalDealer;  // Actualizar el total del dealer en la interfaz
  
      const buttosPlayGame = document.getElementById("buttos-play-game");
      buttosPlayGame.style.display = "none"
  
       const mainButtos = document.getElementById("buttons-start")
       mainButtos.style.display = "flex"
       
      
     //* here we add the display none remeber and one style to appaer sloly afer 
  
        const MainContainer = document.getElementById("main-area")
        MainContainer.style.display="none"
  
      // Eliminar las cartas del jugador
      const cardsContainer = document.getElementById("cards-player");
      cardsContainer.innerHTML = "";  // Elimina todas las imágenes de cartas del jugador
      
      // Eliminar las cartas del dealer
      const dealerContainer = document.getElementById("dealer-container");
      dealerContainer.innerHTML = "";  // Elimina todas las imágenes de cartas del dealer
      
      // Aquí puedes añadir cualquier otra lógica necesaria para reiniciar el juego
      console.log("Juego reiniciado");
    }, 2000);  // El retraso es de 1000 milisegundos (1 segundo)
  }
  
  
  
  