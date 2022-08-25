import { playerGameboard, computerGameboard } from "./gameboard";
import { controlGame } from "./gameLoop";

const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            let occupied = (space.getAttribute("isoccupied"));
            if (occupied === "true") {
                space.style.backgroundColor = "#921414";
            } else {
                space.style.backgroundColor = "#40a1ef";
            }
            humanAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord")));
        });
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
    console.log(computerAttack(xCoord, yCoord));
    playerBoardSpaces.forEach(space => {
        let spaceXCoord = Number(space.getAttribute("xCoord"));
        let spaceYCoord = Number(space.getAttribute("yCoord"));
        if (spaceXCoord === xCoord && spaceYCoord === yCoord) {
            if (space.getAttribute("isOccupied") === "true") {
                space.style.backgroundColor = "#921414";
            } else {
                space.style.backgroundColor = "#40a1ef";
                
                
            }
        }
    });
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