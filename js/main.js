import "../styles/main.css";
import { getDeck, deckId } from './url.js';  // Importamos la función y la variable
import { initializeBetButtons ,getTotal ,resetTotal} from "./betButtons.js"; // calling the bet 
import{  calculateValue} from "./calculateValue"

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
const main = document.querySelector("main");
const message = document.querySelector(".message");

//* calling the sum for dealer and the player

const sumPlayer = document.getElementById("sum-player");

// Inicializa los botones de betButtons
initializeBetButtons();

getDeck();
//* calling the api to get to card we use the deckId to get thous 2
startGame.onclick = async function () {
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`; // Cambiado a 2 cartas
  const response = await fetch(cardUrl);
  const cardData = await response.json();

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
    main.style.filter = "blue(4px)";
    message.style.display = "block";
    resetTotal(); // Reinicia el total (asegúrate de que esta función esté definida)
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



const newCard = document.getElementById("new-card");
// Añadir un event listener al elemento new-card we are using async 
newCard.addEventListener("click", async function() {
  // Código que quieres ejecutar cuando se haga clic en el botón
  console.log("Se ha hecho clic en 'new-card'");

  // Solicitar una nueva carta para el jugador
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`; // Cambiar para obtener solo 1 carta
  const responseNew = await fetch(cardUrl);  // Espera la respuesta
  const cardDataNew = await responseNew.json();  // Convierte la respuesta a JSON

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
    main.style.filter = "blue(4px)";
    message.style.display = "block";
    resetTotal(); // Reinicia el total (asegúrate de que esta función esté definida)
    calculateValue()
  }

  console.log(`Carta del jugador: ${playerCard.value} of ${playerCard.suit}`);
  console.log(`Total actual del jugador: ${total}`);
  calculateValue()
});



