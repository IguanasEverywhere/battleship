import { playerGameboard, computerGameboard } from "./gameboard";
import { controlGame } from "./gameLoop";
import { updateComputerBoardDom, updateBoardDomAfterSink, updatePlayerBoardDomAfterSink, updatePlayerBoardDom } from "./updateBoardDom";

const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");

    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            updateComputerBoardDom(space);
            let hitShip = (humanAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord"))));

            if (hitShip !== null && hitShip.shipName && hitShip.isSunk()) {
                let playerInstructionsContent = "You sunk the enemy's " + hitShip.shipName.toUpperCase();
                updateBoardDomAfterSink(playerInstructionsContent, hitShip);
            }
        }, { once: true });

    });
}

const humanAttack = (xCoord, yCoord) => {
    let prevShotHit = computerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = computerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    let receivedPlayerAttack = computerGameboard.receiveAttack(xCoord, yCoord);

    if (computerGameboard.allShipsSunk()) {
        controlGame("gameOver");
    } else {
        controlGame("computerTurn");
    }

    return receivedPlayerAttack;
}


const computerTurn = () => {
    let playerBoardSpaces = document.querySelectorAll(".board-space");
    let xCoord = randomCoordGenerator();
    let yCoord = randomCoordGenerator();
    let hitShip = computerAttack(xCoord, yCoord);
    if (hitShip !== null && hitShip.shipName && hitShip.isSunk()) {

        let playerInstructionsContent = "The enemy sunk your " + hitShip.shipName.toUpperCase();
        updatePlayerBoardDomAfterSink(playerInstructionsContent, hitShip);

    }

    updatePlayerBoardDom(playerBoardSpaces, xCoord, yCoord);
}


const computerAttack = (xCoord, yCoord) => {
    let prevShotHit = playerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = playerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        computerTurn();
        return null;
    }
    let receivedComputerAttack = playerGameboard.receiveAttack(xCoord, yCoord);
    if (playerGameboard.allShipsSunk()) {
        controlGame("gameOver");
    } else {
        controlGame("playerTurn");
    }

    return receivedComputerAttack;
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}

export { humanAttack, computerAttack, randomCoordGenerator, playerTurn, computerTurn }

