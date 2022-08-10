import './style.css';
import { playerGameboard, computerGameboard } from './gameboard';
import { placeShips } from './gameLoop';

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
    space.setAttribute('isOccupied', coordObj.spaceOccupied);
    space.classList.add("board-space");
    if (space.getAttribute("isOccupied") === 'true') {
      space.style.backgroundColor = "gray"
    }
    playerBoard.appendChild(space);
  });

  computerGameboard.coordinatesArr.forEach(coordinatePair => {
    let space = document.createElement("div");
    let spaceCoords = { coordinatePair };
    space.classList.add("board-space");
    computerBoard.appendChild(space);
    space.addEventListener('click', () => {
      space.textContent = "X";
    });
  });

  const placeShipsBtn = document.createElement("button");
  placeShipsBtn.textContent = "Place Ships";
  boardsContainer.appendChild(placeShipsBtn);

  placeShipsBtn.addEventListener('click', () => {
    placeShips();
  });
}

renderBoard();




export { renderBoard }

