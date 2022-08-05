import { playerGameboard } from './gameboard';
import { cruiser, battleShip } from './shipFactory';

describe('testing board setup including ship placement', () => {
    test('playerGameBoard obj has 100 pairs of coords', () => {
        expect(playerGameboard.getCoordinatesArr().length).toBe(100);
    });

    test('expect cruiser starting at 00 to cover thru 20', () => {
        expect(playerGameboard.placeShipHorizontally(cruiser, 0, 0)).toEqual([{ shipObj: cruiser, xCoord: 0, yCoord: 0 }, { shipObj: cruiser, xCoord: 1, yCoord: 0 }, { shipObj: cruiser, xCoord: 2, yCoord: 0 }]);
    });

    test('expect resetPieces to return empty array', () => {
        expect(playerGameboard.resetPieces()).toEqual([]);
    });

    test('expect battleShip to starting at 01 to cover thru 31', () => {
        expect(playerGameboard.placeShipHorizontally(battleShip, 0, 1)).toEqual([{ shipObj: battleShip, xCoord: 0, yCoord: 1 }, { shipObj: battleShip, xCoord: 1, yCoord: 1 }, { shipObj: battleShip, xCoord: 2, yCoord: 1 }, { shipObj: battleShip, xCoord: 3, yCoord: 1 }]);
    });


    test('expect resetPieces to return empty array', () => {
        expect(playerGameboard.resetPieces()).toEqual([]);
    });

    // explore emptying array before each test, or else testing the ship array has all of the ships simultaneously

});

describe('testing receiveAttack hits and misses', () => {
    test('attack received at space covered by cruiser records hit to cruiser', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        expect(playerGameboard.receiveAttack(1, 0)).toBe(cruiser);
    });

    test('cruiser hitCount to be 2 after second attack lands', () => {
        playerGameboard.receiveAttack(0, 0);
        expect(cruiser.getHitCount()).toBe(2);
    })

    test('cruiser isSunk returns false after only 2 previous attacks', () => {
        expect(cruiser.isSunk()).toBe(false);
    });

    test('cruiser isSunk returns true after a third attack', () => {
        playerGameboard.receiveAttack(2, 0);
        expect(cruiser.isSunk()).toBe(true);
    });

    test('attack received at unoccupied space records miss to gameboard', () => {
        expect(playerGameboard.receiveAttack(5, 5)).toBe("miss");
    });

    test('attack received at 01 records hit to battleship', () => {
        playerGameboard.placeShipHorizontally(battleShip, 0, 1);
        expect(playerGameboard.receiveAttack(0, 1)).toBe(battleShip);
    });
});




