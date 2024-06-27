/**
 * This function obtains the value of a card.
 * @param {String} card 
 * @returns {Number} Value of a card
 */
const cardValue = ( card ) => {
    const value = card.substring(0, card.length-1);
    return (isNaN(value)) ?
          (value === 'A') ? 11 : 10
          : value * 1;
    
};

export { cardValue };