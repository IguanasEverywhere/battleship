import { playerBoard, playerGameboard, computerGameboard } from "./gameboard";
import { battleShip, cruiser } from "./shipFactory";

const startGame = () => {
    playerGameboard.placeShipVertically(battleShip, 0, 0);
    playerGameboard.placeShipVertically(cruiser, 0, 2);
    playerGameboard.placedShipArray.forEach(spot => {
        let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
        if (occupiedSpace) {
            occupiedSpace.spaceOccupied = true;
        }
    });


}

export { startGame }