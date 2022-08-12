import { playerGameboard, computerGameboard } from "./gameboard";
import { battleShip, cruiser, destroyer, submarine, carrier, battleShipComputer, cruiserComputer, destroyerComputer, carrierComputer, submarineComputer } from "./shipFactory";
import { renderBoard } from ".";

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
  }

const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            let occupied = (space.getAttribute("isoccupied"));
            if (occupied === "true") {
                space.style.backgroundColor = "red";
            } else {
                space.style.backgroundColor = "green"
            }
            humanAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord")));
            if (computerGameboard.allShipsSunk()) {
                alert("GAME OVER! Player Wins");
            }
            setTimeout(() => {
                computerTurn();
            }, 1000);
        });
    });
}

const humanAttack = (xCoord, yCoord) => {
    let prevShotHit = computerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = computerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    return computerGameboard.receiveAttack(xCoord, yCoord);
}


const computerTurn = () => {
    let playerBoardSpaces = document.querySelectorAll(".board-space");
    let xCoord = randomCoordGenerator();
    let yCoord = randomCoordGenerator();
    console.log(computerAttack(xCoord, yCoord));
    playerBoardSpaces.forEach(space => {
        let spaceXCoord = Number(space.getAttribute("xCoord"));
        let spaceYCoord = Number(space.getAttribute("yCoord"));
        if (spaceXCoord === xCoord && spaceYCoord === yCoord) {
            if (space.getAttribute("isOccupied") === "true") {
                space.style.backgroundColor = "red";
            } else {
                space.style.backgroundColor = "green";
            }

        }
    });

}

const computerAttack = (xCoord, yCoord) => {
    let prevShotHit = playerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = playerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    return playerGameboard.receiveAttack(xCoord, yCoord);
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}

export { humanAttack, computerAttack, randomCoordGenerator, playerTurn, computerTurn, placeShipsPlayer, placeShipsComputer }