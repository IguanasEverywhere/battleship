import { computerTurn, playerTurn } from "./player";
import { playerGameboard, computerGameboard } from "./gameboard";
import { renderBoard } from ".";
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import { random } from "lodash";


const placeShipsPlayer = (currentShip, currentAxis) => {

    console.log(currentAxis);
    console.log(currentShip)

    let axisBtn = document.getElementById("axis-btn");
    axisBtn.addEventListener('click', () => {
        if (currentAxis === "vertical") {
            currentAxis = "horizontal";

        } else if (currentAxis = "horizontal") {
            currentAxis = "vertical";
        }
    });

    let playerBoardSpaces = document.querySelectorAll(".board-space");
    playerBoardSpaces.forEach(space => {
        space.addEventListener("mouseover", () => {
            if (currentAxis === "horizontal") {
                previewPlacementHorizontal(space, currentShip);
            } else if (currentAxis === "vertical") {
                previewPlacementVertical(space, currentShip);
            }

        });
        space.addEventListener("mouseout", () => {
            playerBoardSpaces.forEach(spot => {
                if (spot.getAttribute("isoccupied") === "true") {
                    spot.style.backgroundColor = "gray";
                } else {
                    spot.style.backgroundColor = "white";
                }

            });
        });
        space.addEventListener('click', () => {
            if (currentAxis === "horizontal") {
                let returnFromClick = playerGameboard.placeShipHorizontally(currentShip, space.getAttribute('xCoord'), space.getAttribute('yCoord'));
                if (returnFromClick !== "outOfBounds" && returnFromClick !== "duplicate") {
                    playerGameboard.placedShipArray.forEach(spot => {
                        let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
                        if (occupiedSpace) {
                            occupiedSpace.spaceOccupied = true;
                        }
                    });
    
                    let boardsContainer = document.getElementsByClassName('boards-container')[0];
                    boardsContainer.remove();
                    renderBoard();
                }
            }
            if (currentAxis === "vertical") {
                let returnFromClick = playerGameboard.placeShipVertically(currentShip, space.getAttribute('xCoord'), space.getAttribute('yCoord'));
                if (returnFromClick !== "outOfBounds" && returnFromClick !== "duplicate") {
                    playerGameboard.placedShipArray.forEach(spot => {
                        let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
                        if (occupiedSpace) {
                            occupiedSpace.spaceOccupied = true;
                        }
                    });
    
                    let boardsContainer = document.getElementsByClassName('boards-container')[0];
                    boardsContainer.remove();
                    renderBoard();
                }
            }


        });

    });

    const previewPlacementHorizontal = (space, ship) => {
        let currentSpaceX = Number((space.getAttribute('xcoord')));
        let currentSpaceY = Number((space.getAttribute('ycoord')));
        if (currentSpaceY <= (9 - ship.shipLength + 1)) {
            playerBoardSpaces.forEach(otherSpace => {
                let otherSpaceX = Number(otherSpace.getAttribute("xCoord"));
                let otherSpaceY = Number(otherSpace.getAttribute("yCoord"));
                if (otherSpaceX === currentSpaceX && otherSpaceY <= currentSpaceY + (ship.shipLength - 1) && (otherSpaceY) >= currentSpaceY) {
                    otherSpace.style.backgroundColor = "gray";
                } // somehow put this with the event listener for click, too
            });
        }

    }


    const previewPlacementVertical = (space, ship) => {
        let currentSpaceX = Number((space.getAttribute('xcoord')));
        let currentSpaceY = Number((space.getAttribute('ycoord')));
        if (currentSpaceX <= (9 - ship.shipLength + 1)) {
            playerBoardSpaces.forEach(otherSpace => {
                let otherSpaceX = Number(otherSpace.getAttribute("xCoord"));
                let otherSpaceY = Number(otherSpace.getAttribute("yCoord"));
                if (otherSpaceY === currentSpaceY && otherSpaceX <= currentSpaceX + (ship.shipLength - 1) && (otherSpaceX) >= currentSpaceX) {
                    otherSpace.style.backgroundColor = "gray";
                } // somehow put this with the event listener for click, too
            });
        }

    }
}

const placeShipsComputer = () => {

    let arrayOfComputerShips = [battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer];

    const placeShip = (ship) => {
        let randomX = randomCoordGenerator();
        let randomY = randomCoordGenerator();

        let returnFromPlacement = computerGameboard.placeShipHorizontally(ship, randomX, randomY);
        if (returnFromPlacement === "outOfBounds" || returnFromPlacement === "duplicate") {
            placeShip(ship);
        }
    }

    arrayOfComputerShips.forEach(ship => {
        setTimeout(placeShip(ship), 1000); // settimeout isn't fully working yet, return to this
    });

    computerGameboard.placedShipArray.forEach(spot => {
        let occupiedSpace = computerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
        if (occupiedSpace) {
            occupiedSpace.spaceOccupied = true;
        }
    });

    console.log(computerGameboard.placedShipArray);

    let boardsContainer = document.getElementsByClassName('boards-container')[0];
    boardsContainer.remove();

    renderBoard();
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}

const controlGame = (turn) => {

    if (turn === "gameOver") {
        const gameOverModal = document.createElement("div");
        gameOverModal.classList.add("game-over");
        gameOverModal.textContent = "Game Over!!";
        const boardsContainer = document.getElementsByClassName("boards-container")[0];
        boardsContainer.appendChild(gameOverModal);

    }
    if (turn === "playerTurn") {
        playerTurn();
    }
    if (turn === "computerTurn") {
        let computerBoard = document.getElementsByClassName('player-board')[1];
        let newBoard = computerBoard.cloneNode(true);
        computerBoard.replaceWith(newBoard);
        setTimeout(() => {
            computerTurn();
        }, 1500)
    }
}

export { controlGame, placeShipsComputer, placeShipsPlayer }

