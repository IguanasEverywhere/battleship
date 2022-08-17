import './style.css';
import { playerGameboard, computerGameboard } from './gameboard';
import { placeShipsPlayer, placeShipsComputer, setUpBoard } from './gameLoop';
import { controlGame } from './gameLoop';
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";



const renderBoard = () => {

  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("boards-container");
  document.body.appendChild(boardsContainer);

  const playerBoard = document.createElement("div");
  playerBoard.classList.add("player-board");
  boardsContainer.appendChild(playerBoard);

  const computerBoard = document.createElement("div");
  computerBoard.classList.add("player-board");
  boardsContainer.appendChild(computerBoard);

  playerGameboard.coordinatesArr.forEach(coordObj => {
    let space = document.createElement("div");
    space.setAttribute('xCoord', coordObj.xCoord);
    space.setAttribute('yCoord', coordObj.yCoord);
    space.setAttribute('isOccupied', coordObj.spaceOccupied);
    space.classList.add("board-space");
    if (space.getAttribute("isOccupied") === 'true') {
      space.style.backgroundColor = "gray"
    }
    playerBoard.appendChild(space);
  });

  computerGameboard.coordinatesArr.forEach(coordObj => {
    let space = document.createElement("div");
    space.setAttribute('xCoord', coordObj.xCoord);
    space.setAttribute('yCoord', coordObj.yCoord);
    space.setAttribute('isOccupied', coordObj.spaceOccupied);
    space.classList.add("computer-board-space");
    if (space.getAttribute("isOccupied") === 'true') {
      space.style.backgroundColor = "gray"
    }
    computerBoard.appendChild(space);
  });

  const placeShipsBtn = document.createElement("button");
  placeShipsBtn.textContent = "Place Ships";
  boardsContainer.appendChild(placeShipsBtn);

  placeShipsBtn.addEventListener('click', () => {
    // placeShipsComputer();
    // placeShipsPlayer(carrier);
    setUpBoard();
    controlGame("playerTurn");
  });

}

renderBoard();

export { renderBoard }