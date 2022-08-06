import { playerGameboard, computerGameboard } from "./gameboard"

const humanAttack = (xCoord, yCoord) => {
    return computerGameboard.receiveAttack(xCoord, yCoord); // probably wont want to return this later, its returning for test
}

const computerAttack = () => {
    // write a mock, since it will be random?

}

export {humanAttack, computerAttack}