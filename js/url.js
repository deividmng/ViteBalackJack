const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2";
export let deckId; 

// Función asincrónica para obtener el deckId
export async function getDeck() {
  const response = await fetch(deckUrl);
  const deckDetails = await response.json();
  deckId = deckDetails.deck_id; // Asignamos el valor a la variable deckId
  console.log(deckId);
  return deckId; // También podemos retornar el deckId si es necesario
}