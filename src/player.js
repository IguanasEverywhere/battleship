import { playerGameboard, computerGameboard } from "./gameboard"

const humanAttack = (xCoord, yCoord) => {
    let prevShotHit = computerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = computerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    return computerGameboard.receiveAttack(xCoord, yCoord); // probably wont want to return this later, its returning for test
}

const computerAttack = () => {
    let xCoord = randomCoordGenerator();
    let yCoord = randomCoordGenerator();
    let prevShotHit = playerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = playerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    return playerGameboard.receiveAttack(xCoord, yCoord);
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}

export {humanAttack, computerAttack}