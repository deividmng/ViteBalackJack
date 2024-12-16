import "../styles/main.css";
import { getDeck, deckId } from './url.js';  // Importamos la función y la variable
import { initializeBetButtons ,getTotal ,resetTotal,win} from "./betButtons.js"; // calling the bet 
// import{  calculateValue} from "./calculateValue"
 import{increaseProgress} from "./progressBar.js";
 import {resetGameAfterDelay} from "./resetGame.js";


 const messageDisplay = document.getElementById("message")
 

//! I`m  making this funcion to don't show the main area until I dont prest the button starGame()
function beforeStartGame() {
  const MainContainer = document.getElementById("main-area");
  MainContainer.style.display="none";

  
  const buttosPlayGame = document.getElementById("buttos-play-game");
  buttosPlayGame.style.display = "none"
}
beforeStartGame()

 function afterTheGame(){
     //* Here is to disable the main buttos
     const mainButtos = document.getElementById("buttons-start")
     mainButtos.style.display = "none"
 }

//! we have 2 let total, one here and the another in resetTotal
let total = 0
// Llamamos a getDeck() para obtener el deckId
getDeck().then(() => {
  console.log(`Deck ID en main.js: ${deckId}`);
  // Ahora puedes usar deckId en cualquier lugar después de que se haya obtenido
});


//* CALLING THE DIV OD THE PLAYER TO BE AVAILEBE TO OPEN SHOW THE CARDS
const startGame = document.getElementById("start-Game");
const cardsContiner = document.getElementById("cards-player");
//! here is the message 
 const  message = document.querySelector(".message");

//* calling the total for dealer and the player

const sumPlayer = document.getElementById("sum-player");

//! i gonna try to do the display in the main 
 const MainContainer = document.getElementById("main-area")

 //! here  is the buttos of the start and clear
  const mainButtos = document.getElementById("buttons-start")

// Inicializa los botones de betButtons the 5 to 250
initializeBetButtons();

getDeck();
//* calling the api to get to card we use the deckId to get thous 2
startGame.onclick = async function () {
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`; // Cambiado a 2 cartas
  const response = await fetch(cardUrl);
  const cardData = await response.json();

  //! calling the after start annd more staff and move on the anothe file 
  afterTheGame()

  //! quitando los buttons para apostar 
   const buttosBet = document.getElementById("bet-buttons")
   buttosBet.style.display = "none"

  const buttosPlayGame = document.getElementById("buttos-play-game");
  buttosPlayGame.style.display = "flex"
  
    //* Aquí estás ocultando el main 
    
    const MainContainer = document.getElementById("main-area")
    MainContainer.style.display="block"

    //* Here is to disable the main buttos
    const mainButtos = document.getElementById("buttons-start")
    mainButtos.style.display = "none"

  // Asegúrate de que se obtuvieron las cartas correctamente
  if (!cardData.cards || cardData.cards.length < 2) {
    console.error("No se pudieron obtener las cartas");
    return;
  }

  // Iterar sobre las dos cartas obtenidas
  cardData.cards.forEach(cardDetails => {
    // Mostrar la imagen de la carta
    cardsContiner.innerHTML += `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`;
    console.log(`${cardDetails.value}`)

    // Asignar el valor de la carta al total
    if (
      cardDetails.value === "QUEEN" ||
      cardDetails.value === "KING" ||
      cardDetails.value === "JACK"
    ) {
      total += 10;
    } else if (cardDetails.value === "ACE" && total + 11 <= 21) {
      total += 11;
    } else if (cardDetails.value === "ACE") {
      total += 1;
    } else {
      total += parseInt(cardDetails.value);
    }
  });

  // Verificar si el total excede 21
  if (total > 21) {

    //  message.style.display = "block";
    // resetTotal(); // Reinicia el total (asegúrate de que esta función esté definida)
  }

  // cambiando el sumPlayer for the total 
  sumPlayer.textContent = total
  console.log(`Total después de las dos cartas: ${total}`);
 
    dealerCards(); // Llamada a dealerCards una vez que el DOM esté listo
  
  
};


// ! here it gonna go the deales 
const dealerContainer = document.getElementById("dealer-container");
const sumDealer = document.getElementById("sum-dealer");

let totalDealer = 0; // Inicializar el total del dealer

// Función para actualizar las cartas del dealer
async function dealerCards() {
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`; // Solicita una carta para el dealer
  const response = await fetch(cardUrl);
  const cardData = await response.json();

  if (!cardData.cards || cardData.cards.length === 0) {
    console.error("No se pudo obtener una carta para el dealer.");
    return;
  }

  const dealerCard = cardData.cards[0]; // Obtener la carta para el dealer
  dealerContainer.innerHTML += `<img src="${dealerCard.image}" alt="${dealerCard.value} of ${dealerCard.suit}">`;

  // Asignar el valor de la carta al total del dealer
  if (
    dealerCard.value === "QUEEN" ||
    dealerCard.value === "KING" ||
    dealerCard.value === "JACK"
  ) {
    totalDealer += 10;
  } else if (dealerCard.value === "ACE" && totalDealer + 11 <= 21) {
    totalDealer += 11;
  } else if (dealerCard.value === "ACE") {
    totalDealer += 1;
  } else {
    totalDealer += parseInt(dealerCard.value);
  }

  // Mostrar el total de puntos del dealer
  // .textContent = total // Actualiza el contenido del elemento sum-dealer
  sumDealer.textContent = totalDealer

  console.log(`Carta del dealer: ${dealerCard.value} of ${dealerCard.suit}`);
  console.log(`Total actual del dealer: ${totalDealer}`);
}

// Asegúrate de llamar a la función dealerCards cuando sea necesario


//! this is the new card 
const newCard = document.getElementById("new-card");
// Añadir un event listener al elemento new-card we are using async 
newCard.addEventListener("click", async function() {
  // Código que quieres ejecutar cuando se haga clic en el botón
  console.log("Se ha hecho clic en 'new-card'");



  // Solicitar una nueva carta para el jugador
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`; // Cambiar para obtener solo 1 carta
  const responseNew = await fetch(cardUrl);  // Espera la respuesta
  const cardDataNew = await responseNew.json();  // Convierte la respuesta a JSON
  
  sumDealer.style.display="flex";
  sumPlayer.style.display="flex";

  // Verifica que las cartas se obtuvieron correctamente
  if (!cardDataNew.cards || cardDataNew.cards.length === 0) {
    console.error("No se pudo obtener una carta para el jugador.");
    return;
  }
  const playerCard = cardDataNew.cards[0]; // Obtener la carta para el jugador
  // Mostrar la imagen de la carta en el contenedor de las cartas del jugador
  const cardsContiner = document.getElementById("cards-player"); // Asegúrate de que el contenedor existe
  cardsContiner.innerHTML += `<img src="${playerCard.image}" alt="${playerCard.value} of ${playerCard.suit}">`;

  // Calcular el valor de la carta
  let cardValue = 0;
  if (
    playerCard.value === "QUEEN" ||
    playerCard.value === "KING" ||
    playerCard.value === "JACK"
  ) {
    cardValue = 10;
  } else if (playerCard.value === "ACE") {
    // Puedes añadir lógica para elegir entre 1 o 11 para el As
    cardValue = (total + 11 <= 21) ? 11 : 1;
  } else {
    cardValue = parseInt(playerCard.value);
    
  }
  // Actualizar el total del jugador
  total += cardValue;

  // Mostrar el nuevo total
  sumPlayer.textContent = total;

   // Verificar si el total excede 21
   if (total > 21) {
    // message.style.filter = "blue(4px)";
    // message.style.display = "block";
    resetTotal(); // Reinicia el total (asegúrate de que esta función esté definida)
    // calculateValue()
    
  }

  console.log(`Carta del jugador: ${playerCard.value} of ${playerCard.suit}`);
  console.log(`Total actual del jugador: ${total}`);
  // calculateValue()
});


//! here is the stand button
const stand = document.getElementById("stand");


stand.addEventListener("click", async function () {
  console.log("stand function started");

  while (totalDealer <= total && totalDealer <= 21) {
    await dealerCards();
  }

  // Evaluar el resultado del juego para el stand
  if (total > 21) {
    messageDisplay.textContent = "You Busted! Dealer Wins!";
    messageDisplay.className = "busted-message"; // Clase para jugador que pierde por pasarse
    showMessageTemporary();
    console.log("perdiste === coming from the STAND BTN");
  } else if (totalDealer > 21) {
    messageDisplay.textContent = "Dealer Busted! You Win!";
    messageDisplay.className = "win-message"; // Clase para victoria del jugador
    showMessageTemporary();
    increaseProgress();
    console.log("ganaste porque el dealer se pasó");
    resetTotal();
  } else if (total > totalDealer) {
    messageDisplay.textContent = "You Win! Better Luck Next Time Dealer!";
    messageDisplay.className = "win-message"; // Clase para victoria del jugador
    showMessageTemporary();
    console.log('you win calling from stand "You Win!"');
    win();
    increaseProgress();
  } else if (total < totalDealer) {
    messageDisplay.textContent = "Dealer Wins! Better Luck Next Time!";
    messageDisplay.className = "lose-message"; // Clase para victoria del dealer
    showMessageTemporary();
    console.log('dealer win "Dealer Wins!"');
    resetTotal();
  } else {
    messageDisplay.textContent = "It's a Tie!";
    messageDisplay.className = "tie-message"; // Clase para empate
    showMessageTemporary();
  }

  console.log(`Resultado final: ${messageDisplay.textContent}`);
  resetGameAfterDelay();
  total = 0;
  totalDealer = 0;
});

// Función para mostrar el mensaje temporalmente
function showMessageTemporary() {
  messageDisplay.style.display = "block"; // Mostrar el mensaje
  setTimeout(() => {
    messageDisplay.style.display = "none"; // Ocultar el mensaje después de 4 segundos
    messageDisplay.className = ""; // Eliminar clases para que no se acumulen
  }, 4000); // Tiempo en milisegundos
}


