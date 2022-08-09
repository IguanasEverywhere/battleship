import './style.css';
import { playerGameboard, computerGameboard } from './gameboard';
import { startGame } from './gameLoop';

startGame();

const boardsContainer = document.createElement("div");
boardsContainer.classList.add("boards-container");
document.body.appendChild(boardsContainer);


const playerBoard = document.createElement("div");
playerBoard.classList.add("player-board");
boardsContainer.appendChild(playerBoard);

const computerBoard = document.createElement("div");
computerBoard.classList.add("player-board");
boardsContainer.appendChild(computerBoard);

playerGameboard.coordinatesArr.forEach(coordinatePair => {
  let space = document.createElement("div");
  let spaceCoords = { coordinatePair };
  space.classList.add("board-space");
  if (coordinatePair.spaceOccupied) {
    space.style.backgroundColor = "gray";
  }
  playerBoard.appendChild(space);
  space.addEventListener('click', () => {
    console.log(spaceCoords);
  });
});

computerGameboard.coordinatesArr.forEach(coordinatePair => {
  let space = document.createElement("div");
  let spaceCoords = { coordinatePair };
  space.classList.add("board-space");
  computerBoard.appendChild(space);
  space.addEventListener('click', () => {
    console.log(spaceCoords);
  });
});

export { playerBoard }