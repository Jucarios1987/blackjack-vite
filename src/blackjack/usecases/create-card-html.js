/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} Returns an image.
 */
const createCardHTML = ( card ) => {

    if ( !card ) throw new Error('The card is a required argument.');
    
        // <img class="card" src="assets/cartas/5C.png">
    const imgCards = document.createElement('img');
    imgCards.src = `assets/cartas/${card}.png`; // Creamos el "src" y agregamos el valor de la carta con ${card}, para esto utilizamos los backtips ``.
    imgCards.classList.add('card');

    return imgCards;

};

export { createCardHTML };