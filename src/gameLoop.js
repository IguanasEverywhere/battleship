import { computerTurn, playerTurn } from "./player";
import { playerGameboard, computerGameboard } from "./gameboard";
import { placeShipsComputer, placeShipsPlayer } from "./placeShips";
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";


const controlGame = (turn) => {

    if (turn === "beginSetup") {
        const shipsArea = document.createElement("div");
        shipsArea.classList.add("ships-area");
        const placementArea = document.getElementById("ships-area");
        placementArea.appendChild(shipsArea);

        const topArea = document.getElementById("top-area");

        const axisBtn = document.createElement("button");
        axisBtn.setAttribute("id", "axis-btn");
        axisBtn.textContent = "Rotate Ship Axis";
        topArea.appendChild(axisBtn);
        axisBtn.style.visibility = "hidden";

        let playerShipsArray = [carrier, destroyer, submarine, cruiser, battleShip];

        playerShipsArray.forEach(ship => {
            let shipBtn = document.createElement("button");
            shipBtn.classList.add("ship-button");
            shipBtn.textContent = (ship.shipName + " (" + ship.shipLength + ")").toUpperCase();
            shipsArea.appendChild(shipBtn);
            shipBtn.addEventListener('click', () => {
                shipsArea.style.visibility = "hidden";
                placeShipsPlayer(ship, "horizontal");
                shipsArea.removeChild(shipBtn);
                axisBtn.style.visibility = "visible";
            });
        });
    }

    if (turn === "finishSetup") {
            const topArea = document.getElementById("top-area");
            let axisBtn = document.getElementById("axis-btn");
            topArea.removeChild(axisBtn);
            const beginGameBtn = document.createElement("button");
            beginGameBtn.setAttribute("id", "begin-game-btn");
            beginGameBtn.textContent = "Begin Game";
            topArea.appendChild(beginGameBtn);

            beginGameBtn.addEventListener('click', () => {
                topArea.style.visibility = "hidden";
                placeShipsComputer();
                controlGame("playerTurn");
            });

        }

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
            let playerInstructions = document.getElementById("player-instructions");
            playerInstructions.textContent = "Your Turn! Fire At Enemy Gameboard By Clicking On A Space!";
            playerTurn();
        }

        if (turn === "computerTurn") {
            let computerBoard = document.getElementsByClassName('player-board')[1];
            let newBoard = computerBoard.cloneNode(true);
            computerBoard.replaceWith(newBoard);
            let playerInstructions = document.getElementById("player-instructions");
            playerInstructions.textContent = "Enemy Firing...";
            setTimeout(() => {
                computerTurn();
            }, 2000)
        }
    }

    export { controlGame }

