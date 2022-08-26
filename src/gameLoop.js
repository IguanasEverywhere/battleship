import { computerTurn, playerTurn } from "./player";
import { playerGameboard, computerGameboard } from "./gameboard";
import { renderBoard } from ".";
import { battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import beep from "/src/beep.wav";
import clang from "/src/clang.mp3";

const placeShipsPlayer = (currentShip, currentAxis) => {
    let axisBtn = document.getElementById("axis-btn");
    let shipsArea = document.getElementsByClassName("ships-area")[0];
    axisBtn.addEventListener('click', () => {
        let beepSound = new Audio(beep);
        beepSound.play();
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
                    spot.style.backgroundColor = "silver";
                } else {
                    spot.style.backgroundColor = "#0001ff00";
                }

            });
        });
        space.addEventListener('click', () => {
            let clangSound = new Audio(clang);
            clangSound.play();
            if (currentAxis === "horizontal") {
                let returnFromClick = playerGameboard.placeShipHorizontally(currentShip, space.getAttribute('xCoord'), space.getAttribute('yCoord'));
                if (returnFromClick !== "outOfBounds" && returnFromClick !== "duplicate") {
                    axisBtn.style.visibility = "hidden";
                    shipsArea.style.visibility = "visible";
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
                    axisBtn.style.visibility = "hidden";
                    shipsArea.style.visibility = "visible";
                    playerGameboard.placedShipArray.forEach(spot => {
                        let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
                        if (occupiedSpace) {
                            occupiedSpace.spaceOccupied = true;
                        }
                    });  // can you condense these? repeated code

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
                    otherSpace.style.backgroundColor = "#808080ad";
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
                    otherSpace.style.backgroundColor = "#808080ad";
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
        let shipDirection = randomDirectionGenerator();

        if (shipDirection === 0) {
            let returnFromPlacement = computerGameboard.placeShipHorizontally(ship, randomX, randomY);
            if (returnFromPlacement === "outOfBounds" || returnFromPlacement === "duplicate") {
                placeShip(ship);
            }
        } else if (shipDirection === 1) {
            let returnFromPlacement = computerGameboard.placeShipVertically(ship, randomX, randomY);
            if (returnFromPlacement === "outOfBounds" || returnFromPlacement === "duplicate") {
                placeShip(ship);
            }
        }

    }

    arrayOfComputerShips.forEach(ship => {
        placeShip(ship);
    });

    computerGameboard.placedShipArray.forEach(spot => {
        let occupiedSpace = computerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
        if (occupiedSpace) {
            occupiedSpace.spaceOccupied = true;
        }
    });

    let boardsContainer = document.getElementsByClassName('boards-container')[0];
    boardsContainer.remove();

    renderBoard();
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}

const randomDirectionGenerator = () => {
    let directionNum = Math.floor(Math.random() * 2);
    return directionNum;
}

const controlGame = (turn) => {

    if (turn === "gameOver") {
        const gameOverModal = document.createElement("div");
        gameOverModal.classList.add("game-over");
        if (computerGameboard.allShipsSunk()) {
            gameOverModal.textContent = "YOU HAVE BEEN VICTORIOUS";
        } else if (playerGameboard.allShipsSunk()) {
            gameOverModal.textContent = "YOU HAVE BEEN DEFEATED";
        }
        
        const boardsContainer = document.getElementsByClassName("boards-container")[0];
        boardsContainer.appendChild(gameOverModal);

        const playAgainBtn = document.createElement("button");
        playAgainBtn.setAttribute("id", "play-again-btn");
        playAgainBtn.textContent = "Play Again?";
        gameOverModal.appendChild(playAgainBtn);

        playAgainBtn.addEventListener('click', () => {
            location.reload(); // temporary solution, there are probably better ways to do this
        });



    }
    if (turn === "playerTurn") {
        let playerInstructions=document.getElementById("player-instructions");
        playerInstructions.textContent="Your Turn! Fire At Enemy Gameboard By Clicking On A Space!";
        playerTurn();
    }
    if (turn === "computerTurn") {
        let computerBoard = document.getElementsByClassName('player-board')[1];
        let newBoard = computerBoard.cloneNode(true);
        computerBoard.replaceWith(newBoard);
        let playerInstructions=document.getElementById("player-instructions");
        playerInstructions.textContent="Enemy Firing...";
        setTimeout(() => {
            computerTurn();
        }, 2000)
    }
}

export { controlGame, placeShipsComputer, placeShipsPlayer }

