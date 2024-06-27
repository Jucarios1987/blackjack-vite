/**
 * This function allows you to take a card.
 * @param {Array<String>} deck Example: [] It is a character array.
 * @returns {String} This function returns a card.
 */
const askCard = ( deck ) => {

    if (!deck || deck.length === 0) {
        throw 'No cards in the deck'; 
    };
    const last = deck.pop();

    return last;
};

export { askCard };