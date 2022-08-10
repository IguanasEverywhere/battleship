import { playerGameboard, computerGameboard } from "./gameboard";
import { renderBoard } from ".";
import { battleShip, cruiser } from "./shipFactory";

const placeShips = () => {
    playerGameboard.placeShipVertically(battleShip, 0, 0);
    playerGameboard.placeShipVertically(cruiser, 0, 2);
    playerGameboard.placedShipArray.forEach(spot => {
        let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
        if (occupiedSpace) {
            occupiedSpace.spaceOccupied = true;
            
        }
    });

    let boardsContainer = document.getElementsByClassName('boards-container')[0];
    boardsContainer.remove();

    renderBoard();
}

export { placeShips }
