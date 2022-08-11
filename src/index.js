import './style.css';
import { playerGameboard, computerGameboard } from './gameboard';
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import { controlGame } from './gameLoop';

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
    placeShipsPlayer();
    placeShipsComputer();
  });
}

renderBoard();

const placeShipsPlayer = () => {
  playerGameboard.placeShipVertically(battleShip, 0, 0);
  playerGameboard.placeShipVertically(cruiser, 0, 2);
  playerGameboard.placeShipHorizontally(destroyer, 5, 0);
  playerGameboard.placeShipHorizontally(carrier, 1, 5);
  playerGameboard.placeShipHorizontally(submarine, 7, 3);
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
  controlGame();
}


export { renderBoard }

