import { playerGameboard, computerGameboard } from "./gameboard";
import { controlGame } from "./gameLoop";
import splash from '/src/splash.wav';
import explosion from '/src/explosion.wav';
import { renderBoard } from ".";

const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            let occupied = (space.getAttribute("isoccupied"));
            if (occupied === "true") {
                let explosionSound = new Audio(explosion);
                explosionSound.play();
                space.style.backgroundColor = "#921414";
            } else {
                let splashSound = new Audio(splash);
                splashSound.play();
                space.style.backgroundColor = "#40a1ef";
            }
            let hitShip = (humanAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord"))));

            if (hitShip.shipName && hitShip.isSunk()) {
                alert(hitShip.shipName + " is sunk");
                let sunkShipSpots = (computerGameboard.placedShipArray.filter(spot => spot.shipObj.shipName === hitShip.shipName));
                console.log(sunkShipSpots);

                sunkShipSpots.forEach(square => {
                    markSunkShips(square.xCoord, square.yCoord);
                });
            }
        });
    });
}

const markSunkShips = (x, y) => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        if (space.getAttribute("xcoord") === String(x) && space.getAttribute("ycoord") === String(y)) {
            console.log(space);
            space.style.backgroundColor = "yellow";
            space.textContent = "X";
        }
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
        alert(hitShip.shipName + " is sunk");
    }
    playerBoardSpaces.forEach(space => {
        let spaceXCoord = Number(space.getAttribute("xCoord"));
        let spaceYCoord = Number(space.getAttribute("yCoord"));
        if (spaceXCoord === xCoord && spaceYCoord === yCoord) {
            if (space.getAttribute("isOccupied") === "true") {
                let explosionSound = new Audio(explosion);
                explosionSound.play();
                space.style.backgroundColor = "#921414";
            } else {
                let splashSound = new Audio(splash);
                splashSound.play();
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