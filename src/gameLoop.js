import { computerTurn, playerTurn } from "./player";

const controlGame = (turn) => {

    if (turn ==="gameOver") {
        alert("over, man");
    }
    if (turn === "playerTurn") {
        playerTurn();
    }
    if (turn === "computerTurn") {
        let computerBoard = document.getElementsByClassName('player-board')[1];
        let newBoard = computerBoard.cloneNode(true);
        computerBoard.replaceWith(newBoard);
        setTimeout(() => {
            computerTurn();
        }, 1500)
    }
}

export { controlGame }

