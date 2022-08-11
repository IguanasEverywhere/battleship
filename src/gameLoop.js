import { computerGameboard } from "./gameboard";
import { humanAttack, computerAttack, randomCoordGenerator } from "./player";

const controlGame = () => {
    playerTurn();
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
            }, 1000); // need a way to prevent the user from still clicking while computer makes its move, remove event handler?
        });
    });
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
            space.style.backgroundColor = "red";
        }
    })

}



export { controlGame }