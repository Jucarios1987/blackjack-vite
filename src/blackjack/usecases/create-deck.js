import _ from 'underscore';

// export const myName = 'Juan C Rios';

/**
 * This function creates a new deck.
 * @param {Array<String>} types Example: ['C','D','H','S']
 * @param {Array<String>} specialCards Example: ['A','J','Q','K']
 * @returns {Array<String>} This function returns a new deck of cards.
 */
// export const createDeck = ( types,specialCards ) => {
const createDeck = ( types,specialCards ) => {
    
    if ( !types || types.length === 0 )
        throw new Error(`'type' is required as an array of string.`);

    if ( !specialCards || specialCards.length === 0 )
        throw new Error(`'specialCards' is required as an array of string.`);

    // Definimos la variable "deck"
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        
        for (let type of types) {
            deck.push( i + type );
        };
    };

    for (let type of types) {
        for (let special of specialCards) {
            deck.push( special + type );                                
        };
    };

    deck = _.shuffle( deck );
    //console.log(deck);
    return deck;
};

// Exportacion independiente
export {createDeck};
// Exportacion por defecto.
// export default createDeck;