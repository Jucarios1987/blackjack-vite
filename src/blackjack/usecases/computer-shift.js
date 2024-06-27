import { askCard, cardValue, createCardHTML } from './'

/**
 * Computer shift.
 * @param {Number} playerPoints Points obtained by the player.
 * @param {HTMLElement} pointsHTML HTML to show points
 * @param {HTMLElement} divComputerCards HTML element to display the cards.
 * @param {Array<String>} deck  
 */
const computerShift = ( playerPoints, pointsHTML, divComputerCards, deck = [] ) => {

    if ( !playerPoints ) throw new Error(`The player's points are necessary.`);
    if ( !pointsHTML ) throw new Error(`The "pointsHTML" argument is required.`);

    let computerPoints = 0;

    do {
        const card = askCard(deck);
    
        computerPoints = computerPoints + cardValue( card );
        pointsHTML.innerText = computerPoints;
        
        const imgCards = createCardHTML( card );
        divComputerCards.append( imgCards );

        if ( playerPoints > 21 ) {
            break;
        };

    } while ( (computerPoints < playerPoints) && (playerPoints <= 21));
    
    setTimeout(() => {

        if ( computerPoints === playerPoints ) {
            alert('Game tied  :(');
        }else if ( playerPoints > 21 ) {
            alert('The computer won the game  :(');
        }else if ( computerPoints > 21 ) {
            alert('The player won the game  :)');
        }else if ( computerPoints > playerPoints ) {
            alert('The computer won the game  :(');
        }

    }, 100 );
};

export { computerShift };