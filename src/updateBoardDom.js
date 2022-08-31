import splash from '/src/splash.wav';
import explosion from '/src/explosion.wav';
import crash from '/src/crash.wav';
import { computerGameboard, playerGameboard } from './gameboard';

const updateComputerBoardDom = (space) => {
    // checking if space has already been clicked
    if (space.style.backgroundColor !== "rgb(146, 20, 20)" && space.style.backgroundColor !== "rgb(64, 161, 239)" && space.style.backgroundColor !== "rgba(255, 255, 0, 0.89)") {
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
    }
}

const updateBoardDomAfterSink = (playerInstructionsContent, hitShip) => {
    let playerInstructions = document.getElementById("player-instructions");
    playerInstructions.textContent = playerInstructionsContent;
    let sinkSound = new Audio(crash);
    sinkSound.play();

    let sunkShipSpots = (computerGameboard.placedShipArray.filter(spot => spot.shipObj.shipName === hitShip.shipName));

    sunkShipSpots.forEach(square => {
        markSunkShips(square.xCoord, square.yCoord);
    });
}

const markSunkShips = (x, y) => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        if (space.getAttribute("xcoord") === String(x) && space.getAttribute("ycoord") === String(y)) {
            space.classList.add("sunk-ship");
            space.style.backgroundColor = "#ffff00e3";
            space.textContent = "*";
        }
    });
}

const markSunkShipsPlayerBoard = (x, y) => {
    let playerBoardSpaces = document.querySelectorAll(".board-space");
    playerBoardSpaces.forEach(space => {
        if (space.getAttribute("xcoord") === String(x) && space.getAttribute("ycoord") === String(y)) {
            space.classList.add("sunk-ship");
            space.style.backgroundColor = "#ffff00e3";
            space.textContent = "*";
        }
    });
}

const updatePlayerBoardDomAfterSink = (playerInstructionsContent, hitShip) => {
    let playerInstructions = document.getElementById("player-instructions");
    playerInstructions.textContent = playerInstructionsContent;
    let sinkSound = new Audio(crash);
    sinkSound.play();

    let sunkShipSpots = (playerGameboard.placedShipArray.filter(spot => spot.shipObj.shipName === hitShip.shipName));

    sunkShipSpots.forEach(square => {
        markSunkShipsPlayerBoard(square.xCoord, square.yCoord);
    });
}

const updatePlayerBoardDom = (playerBoardSpaces, xCoord, yCoord) => {
    playerBoardSpaces.forEach(space => {
        if (space.style.backgroundColor !== "rgb(146, 20, 20)" && space.style.backgroundColor !== "rgb(64, 161, 239)" && space.style.backgroundColor !== "rgba(255, 255, 0, 0.89)") {
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
        }
    });
}

export { updateComputerBoardDom, updateBoardDomAfterSink, updatePlayerBoardDomAfterSink, updatePlayerBoardDom }