const gameboard = () => {
    let coordinatesArr = [];
    let placedShipArray = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let coordObj = {
                xCoord: i,
                yCoord: j
            };
            coordinatesArr.push(coordObj);
        }
    }

    const getCoordinatesArr = () => {
        return coordinatesArr;
    }

    const placeShipHorizontally = (ship, startingXCoord, startingYCoord) => {
        for (let i = 0; i < ship.shipLength; i++) {
            placedShipArray.push({shipObj: ship, xCoord:startingXCoord + i, yCoord: startingYCoord});
        }
        return placedShipArray;
    }

    const resetPieces = () => {
        placedShipArray = [];
        return placedShipArray;
    }

    const receiveAttack = (x, y) => {
        let foundShip = placedShipArray.find(ship => ship.xCoord === x && ship.yCoord === y);
        if (foundShip) {
            foundShip.shipObj.hit();
            return foundShip.shipObj;
        } else  {
            return "miss";
        }
    }

    return { getCoordinatesArr, placeShipHorizontally, resetPieces, receiveAttack };
}

const playerGameboard = gameboard();

export { playerGameboard }