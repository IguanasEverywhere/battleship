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


  if (playerGameboard.placedShipArray.length === 17) {
    const beginGameBtn = document.createElement("button");
    beginGameBtn.textContent = "Begin Game";
    boardsContainer.appendChild(beginGameBtn);
  
    beginGameBtn.addEventListener('click', () => {
      document.getElementById("axis-btn").style.visibility="hidden";
      beginGameBtn.style.visibility="hidden";
      placeShipsComputer();
      controlGame("playerTurn");
    });
  }
}

const renderShipsToPlaceBtns = () => {

  const shipsArea = document.createElement("div");
  shipsArea.classList.add("ships-area");
  document.body.appendChild(shipsArea);

  const axisBtn = document.createElement("button");
  axisBtn.setAttribute("id","axis-btn");
  axisBtn.textContent = "Change Axis";
  shipsArea.appendChild(axisBtn);
  axisBtn.style.visibility = "hidden";

  let playerShipsArray = [carrier, destroyer, submarine, cruiser, battleShip];

  playerShipsArray.forEach(ship => {
    let shipBtn = document.createElement("button");
    shipBtn.textContent = ship.shipName;
    shipsArea.appendChild(shipBtn);
    shipBtn.addEventListener('click', () => {
      placeShipsPlayer(ship, "horizontal");
      shipsArea.removeChild(shipBtn);
      axisBtn.style.visibility = "visible";
    });
  });
}

renderShipsToPlaceBtns();
renderBoard();



export { renderBoard }