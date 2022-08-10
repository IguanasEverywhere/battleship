import { humanAttack, computerAttack } from "./player";
import { cruiserComputer } from "./shipFactory";
import { computerGameboard, playerGameBoard } from "./gameboard";

test('human player attacking 55 returns missed shots array', () => {
    expect(humanAttack(5, 5)).toEqual([{ x: 5, y: 5 }]);
});

test('human player attacking 00 when cruiserComputer is there records hit to cruiserComputer', () => {
    computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
    expect(humanAttack(0, 0)).toEqual(cruiserComputer);
});

test('human player attacking an already attacked spot returns null', () => {
    expect(humanAttack(5, 5)).toEqual(null);
});

test('human player attacking another already attacked spot returns null', () => {
    expect(humanAttack(0, 0)).toEqual(null);
});
