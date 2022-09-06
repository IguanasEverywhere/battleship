import _, { last } from "lodash";
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

    let xCoord;
    let yCoord;

    let prevAttackedSpaces = [];
    let anchor = playerGameboard.underAttackSpaces[playerGameboard.underAttackSpaces.length - 1];

    playerGameboard.landedShots.forEach(shot => prevAttackedSpaces.push(shot));
    playerGameboard.missedShots.forEach(shot => prevAttackedSpaces.push(shot));

    const attackDown = (anchor) => {
        if (prevAttackedSpaces.find(space => space.x === anchor.x+1 && space.y === anchor.y)) {
            anchor = playerGameboard.underAttackSpaces[0];
        }
        if (!prevAttackedSpaces.find( space => space.x === anchor.x+1 && space.y === anchor.y)&&anchor.x+1 <10) {
            xCoord = anchor.x + 1;
            yCoord = anchor.y;
        } else { // in case ships are bunched together and it has nowhere to go
            xCoord = randomCoordGenerator();
            yCoord = randomCoordGenerator();
        }
      

    }

    const attackUp = () => {
        anchor = playerGameboard.underAttackSpaces[playerGameboard.underAttackSpaces.length - 1];
        if (!prevAttackedSpaces.find(space => space.x === anchor.x - 1 && space.y == anchor.y) && anchor.x - 1 >= 0) {
            xCoord = anchor.x - 1;
            yCoord = anchor.y;
        } else {
            attackDown(anchor);
        }
    }

    const attackRight = (anchor) => {
        xCoord = anchor.x;
        yCoord = anchor.y + 1;
    }

    const attackLeft = (anchor) => {
        if (!prevAttackedSpaces.find(space => space.x === anchor.x && space.y === anchor.y - 1) && anchor.y - 1 >= 0) {
            xCoord = anchor.x;
            yCoord = anchor.y - 1;
        } else {
            attackUp();
        }

    }

    if (playerGameboard.underAttackSpaces.length > 0) {
        if (!prevAttackedSpaces.find(space => space.x === anchor.x && space.y === anchor.y + 1) && anchor.y + 1 < 10) {

            attackRight(anchor);

        } else {
            if (prevAttackedSpaces.find(space => space.x === anchor.x && space.y === anchor.y - 1)) {
                anchor = playerGameboard.underAttackSpaces[0];
            }
            attackLeft(anchor);

        }



    } else {
        xCoord = randomCoordGenerator();
        yCoord = randomCoordGenerator();
    }


    let hitShip = computerAttack(xCoord, yCoord);

    if (hitShip !== null && hitShip.shipName && !hitShip.isSunk()) {

        playerGameboard.mostRecentHit = ({ x: xCoord, y: yCoord });
        playerGameboard.underAttackSpaces.push(playerGameboard.mostRecentHit);
    }

    if (hitShip !== null && hitShip.shipName && hitShip.isSunk()) {
        let playerInstructionsContent = "The enemy sunk your " + hitShip.shipName.toUpperCase();
        playerGameboard.mostRecentHit = null;
        playerGameboard.underAttackSpaces = [];
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

