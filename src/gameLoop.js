import { computerTurn, playerTurn } from "./player";
import { playerGameboard, computerGameboard } from "./gameboard";
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import { renderBoard } from ".";

const placeShipsPlayer = () => {
    // playerGameboard.placeShipVertically(battleShip, 0, 0);
    // playerGameboard.placeShipVertically(cruiser, 0, 2);
    // playerGameboard.placeShipHorizontally(destroyer, 5, 0);
    // playerGameboard.placeShipHorizontally(carrier, 1, 5);
    // playerGameboard.placeShipHorizontally(submarine, 7, 3);
   
    let playerBoardSpaces = document.querySelectorAll(".board-space");
    playerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            console.log('test');
        });
    })

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

const placeShipsComputer = () => {
    computerGameboard.placeShipVertically(battleShipComputer, 3, 0);
    computerGameboard.placeShipVertically(cruiserComputer, 4, 8);
    computerGameboard.placeShipHorizontally(destroyerComputer, 9, 0);
    computerGameboard.placeShipHorizontally(carrierComputer, 0, 5);
    computerGameboard.placeShipHorizontally(submarineComputer, 5, 4);
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

