import { playerGameboard } from './gameboard';

describe('testing board setup including ship placement', () => {
    test('playerGameBoard obj has 100 pairs of coords', () => {
        expect(playerGameboard.getCoordinatesArr().length).toBe(100);
    });

    test('expect ship of length 3 starting at 00 to cover thru 20', () => {
        expect(playerGameboard.placeShipHorizontally(3, 0, 0)).toEqual([{ xCoord: 0, yCoord: 0 }, { xCoord: 1, yCoord: 0 }, { xCoord: 2, yCoord: 0 }]);
    });

    test('expect resetPieces to return empty array', () => {
        expect(playerGameboard.resetPieces()).toEqual([]);
    });

    test('expect ship of length 4 to starting at 01 to cover thru 31', () => {
        expect(playerGameboard.placeShipHorizontally(4, 0, 1)).toEqual([{ xCoord: 0, yCoord: 1 }, { xCoord: 1, yCoord: 1 }, { xCoord: 2, yCoord: 1 }, { xCoord: 3, yCoord: 1 }]);
    });
});

describe('testing receiveAttack hits and misses', () => {
    test('attack received at space covered by cruiser records hit to gameboard', () => {
        playerGameboard.placeShipHorizontally(3, 0, 0);
        expect(playerGameboard.receiveAttack(1, 0)).toBe("hit");
    });

    test('attack received at unoccupied space records miss to gameboard', () => {
        expect(playerGameboard.receiveAttack(5, 5)).toBe("miss");
    });
});




