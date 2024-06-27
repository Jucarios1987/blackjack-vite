import _ from 'underscore';
// Importar independiente
import { askCard, cardValue, computerShift, createDeck, createCardHTML  } from './usecases'
// Importar por defecto e individual
// import createDeck, { myName } from './usecases/create-deck.js';
// console.log({myName});
// Importar por defecto
// import createDeck from './usecases/create-deck.js';
// Tambien podemor dar alias a nuestras importaciones.
// import { createDeck as createNewDeck} from './usecases/create-deck.js';

let deck            = [];
const types         = ['C','D','H','S'];
const specialCards  = ['A','J','Q','K'];
let playerPoints = 0;

const btnNew = document.querySelector('#btnNew');
const btnAsk = document.querySelector('#btnAsk');
const btnStop = document.querySelector('#btnStop');
const pointsHTML = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');

// Hacemos el llamado a la funcion "createDeck" del archivo "create-deck.js"
// Asignamis lo que retorna la funcion "" a la variable "deck".
// deck = createDeck( types, specialCards );
// Importacoin con alias.
// deck = createNewDeck( types, specialCards );
// Impotacion por defecto.
deck = createDeck( types, specialCards );
// deck = createDeck(  );

btnAsk.addEventListener('click', () => {
    
    const card = askCard(deck);
    
    playerPoints = playerPoints + cardValue( card );
    pointsHTML[0].innerText = playerPoints;
    
    const imgCards = createCardHTML( card );
    divPlayerCards.append( imgCards );

    if ( playerPoints > 21 ) {
        console.warn('Sorry, you lost the game.');
        btnAsk.disabled = true;
        btnStop.disabled = true;
        computerShift( playerPoints,pointsHTML[1],divComputerCards,deck );

    }else if ( playerPoints === 21 ) {
        console.warn('21, congratulations!!!');
        btnAsk.disabled = true;
        btnStop.disabled = true;
        computerShift( playerPoints,pointsHTML[1],divComputerCards,deck );
    };
});

btnStop.addEventListener ('click', () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    computerShift( playerPoints,pointsHTML[1],divComputerCards,deck );
});

btnNew.addEventListener ('click', () => {
    
    console.clear();
    deck = [];
    deck = createDeck( types, specialCards );
    
    playerPoints = 0;
    
    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;
    
    divComputerCards.innerHTML = '';
    divPlayerCards.innerHTML = '';

    btnAsk.disabled = false;
    btnStop.disabled = false;
});