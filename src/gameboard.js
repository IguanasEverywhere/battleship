import { carrier, cruiser, battleShip, submarine, destroyer, carrierComputer, cruiserComputer, battleShipComputer, submarineComputer, destroyerComputer } from './shipFactory';

const gameboard = () => {
    let coordinatesArr = [];
    let placedShipArray = [];
    let missedShots = [];
    let landedShots = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let coordObj = {
                xCoord: i,
                yCoord: j,
                spaceOccupied: false
            };
            coordinatesArr.push(coordObj);
        }
    }

    const getCoordinatesArr = () => {
        return coordinatesArr;
    }

    const placeShipVertically = (ship, startingXCoord, startingYCoord) => {
        for (let i = 0; i < ship.shipLength; i++) {
            placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord + i), yCoord: Number(startingYCoord) });
        }
        return placedShipArray;
    }

    const placeShipHorizontally = (ship, startingXCoord, startingYCoord) => {
        for (let i = 0; i < ship.shipLength; i++) {
            placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord), yCoord: Number(startingYCoord) + i });
        }
        return placedShipArray;
    }

    const resetPieces = () => {
        placedShipArray = [];
        return placedShipArray;
    }

    const clearMissedShots = () => {
        missedShots = [];
    }

    const receiveAttack = (x, y) => {
        let foundShip = placedShipArray.find(ship => ship.xCoord === x && ship.yCoord === y);
        if (foundShip) {
            landedShots.push({ x: x, y: y });
            foundShip.shipObj.hit();
            return foundShip.shipObj;
        } else {
            missedShots.push({ x: x, y: y });
            return missedShots;
        }
    }

    const allShipsSunk = () => {
        if (carrier.isSunk() && cruiser.isSunk() && battleShip.isSunk() && submarine.isSunk() && destroyer.isSunk()) {
            return true;
        } else if (carrierComputer.isSunk() && cruiserComputer.isSunk() && battleShipComputer.isSunk() && submarineComputer.isSunk() && destroyerComputer.isSunk()) {
            return true;
        } else {
            return false;
        }
    }

    return { coordinatesArr, placedShipArray, getCoordinatesArr, placeShipHorizontally, placeShipVertically, resetPieces, receiveAttack, clearMissedShots, allShipsSunk, missedShots, landedShots };
}

const playerGameboard = gameboard();
const computerGameboard = gameboard();

export { playerGameboard, computerGameboard }