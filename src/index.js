import './style.css';
import { playerGameboard, computerGameboard } from './gameboard';
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
      space.style.backgroundColor = "silver"
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
      space.style.backgroundColor = "silver"
    }
    computerBoard.appendChild(space);
  });

  if (playerGameboard.placedShipArray.length === 17 && computerGameboard.placedShipArray.length !== 17) {
    controlGame("finishSetup");
  }
}


renderBoard();
controlGame("beginSetup");



export { renderBoard }