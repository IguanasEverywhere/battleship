import { computerGameboard } from "./gameboard";

const controlGame = () => {
    playerTurn();
}

const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            space.style.backgroundColor = "red";
            console.log(computerGameboard.receiveAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord"))));
            if (computerGameboard.allShipsSunk()) {
                alert("GAME OVER! Player Wins");
            }
        });
    });
}



export { controlGame }