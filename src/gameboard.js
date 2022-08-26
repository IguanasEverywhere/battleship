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
                spaceOccupied: false,
                
            };
            coordinatesArr.push(coordObj);
        }
    }

    const getCoordinatesArr = () => {
        return coordinatesArr;
    }

    const placeShipVertically = (ship, startingXCoord, startingYCoord) => {

        if (startingXCoord > (9 - ship.shipLength + 1)) {
            console.log('too big')
            return "outOfBounds"
        }

        let noMatch = 0;
        for (let i = 0; i < ship.shipLength; i++) {
            if (placedShipArray.find(spot => spot.xCoord === Number(startingXCoord) + i && spot.yCoord === Number(startingYCoord))) {
                console.log('found');
                return "duplicate";
            } else {
                noMatch++;
            }
        }

        if (noMatch === ship.shipLength) {
            for (let i = 0; i < ship.shipLength; i++) {
                placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord) + i, yCoord: Number(startingYCoord) });
            }
            return placedShipArray;
        }

    }

    const placeShipHorizontally = (ship, startingXCoord, startingYCoord) => {

        if (startingYCoord > (9 - ship.shipLength + 1)) {
            console.log('too big')
            return "outOfBounds"
        }

        let noMatch = 0;
        for (let i = 0; i < ship.shipLength; i++) {
            if (placedShipArray.find(spot => spot.xCoord === Number(startingXCoord) && spot.yCoord === Number(startingYCoord) + i)) {
                console.log('found');
                return "duplicate";
            } else {
                noMatch++;
            }
        }

        if (noMatch === ship.shipLength) {
            for (let i = 0; i < ship.shipLength; i++) {
                placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord), yCoord: Number(startingYCoord) + i });
            }
            return placedShipArray;
        }

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