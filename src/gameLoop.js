import { computerTurn, playerTurn } from "./player";
import { playerGameboard, computerGameboard } from "./gameboard";
import { renderBoard } from ".";
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import { random } from "lodash";


const placeShipsPlayer = (currentShip) => {
    // playerGameboard.placeShipHorizontally(battleShip, 0, 0);
    // playerGameboard.placeShipHorizontally(destroyer, 0, 4);
    // playerGameboard.placeShipVertically(cruiser, 0, 2);
    // playerGameboard.placeShipHorizontally(destroyer, 5, 0);
    // playerGameboard.placeShipHorizontally(carrier, 1, 5);
    // playerGameboard.placeShipHorizontally(submarine, 7, 3);

    let playerBoardSpaces = document.querySelectorAll(".board-space");
    playerBoardSpaces.forEach(space => {
        space.addEventListener("mouseover", () => {
            previewPlacement(space, currentShip);
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
            let returnFromClick = playerGameboard.placeShipHorizontally(currentShip, space.getAttribute('xCoord'), space.getAttribute('yCoord'));
            if (returnFromClick !=="outOfBounds" && returnFromClick!=="duplicate") {
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
 
        });

    });

    const previewPlacement = (space, ship) => {
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





    // playerGameboard.placedShipArray.forEach(spot => {
    //     let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
    //     if (occupiedSpace) {
    //         occupiedSpace.spaceOccupied = true;
    //     }
    // });

    // let boardsContainer = document.getElementsByClassName('boards-container')[0];
    // boardsContainer.remove();

    // renderBoard();
}

const placeShipsComputer = () => {

    let arrayOfComputerShips = [battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer];

    // const determineCoords = (ship) => {
    //     let randomX = randomCoordGenerator();
    //     let randomY = randomCoordGenerator();

    //     if (randomY <= (9 - ship.shipLength + 1)) {
    //         if (!computerGameboard.placedShipArray.find(place => place.xCoord === randomX && (place.yCoord >= randomY) && (place.yCoord < randomY + (ship.shipLength - 1)))) {
    //             console.log('placing ' + ship.shipName);
    //             computerGameboard.placeShipHorizontally(ship, randomX, randomY);
    //         }

    //     } else {
    //         console.log('called here with ' + ship.shipName);
    //         determineCoords(ship);
    //     }
    // }

    arrayOfComputerShips.forEach(ship => {
        determineCoords(ship);
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

