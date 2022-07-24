

const gameboard = () => {
    let coordinatesArr = [];

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

    const placeShipHorizontally = (shipLength, startingXCoord, startingYCoord) => {
        let placedShipArray = [];
        for (let i = 0; i < shipLength; i++) {
            placedShipArray.push({xCoord:startingXCoord, yCoord: startingYCoord + i});
        }
        return placedShipArray;
    }

    return { getCoordinatesArr, placeShipHorizontally };
}

const playerGameboard = gameboard();

export { playerGameboard }