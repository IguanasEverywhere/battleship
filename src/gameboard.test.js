import { playerGameboard, computerGameboard } from './gameboard';
import { carrier, cruiser, battleShip, submarine, destroyer, carrierComputer, cruiserComputer, battleShipComputer, submarineComputer, destroyerComputer } from './shipFactory';

beforeEach(() => {
    playerGameboard.resetPieces();
    playerGameboard.clearMissedShots();
    computerGameboard.resetPieces();
    computerGameboard.clearMissedShots();
});

describe('testing board setup including ship placement', () => {
    test('playerGameBoard obj has 100 pairs of coords', () => {
        expect(playerGameboard.getCoordinatesArr().length).toBe(100);
    });

    test('expect battleship to cover 01 thru 31 and cruiser starting at 00 to cover thru 20', () => {
        playerGameboard.placeShipVertically(battleShip, 0, 1);
        expect(playerGameboard.placeShipVertically(cruiser, 0, 0)).toEqual([{ shipObj: battleShip, xCoord: 0, yCoord: 1 }, { shipObj: battleShip, xCoord: 1, yCoord: 1 }, { shipObj: battleShip, xCoord: 2, yCoord: 1 }, { shipObj: battleShip, xCoord: 3, yCoord: 1 }, { shipObj: cruiser, xCoord: 0, yCoord: 0 }, { shipObj: cruiser, xCoord: 1, yCoord: 0 }, { shipObj: cruiser, xCoord: 2, yCoord: 0 }]);
    });

    test('expect submarine placed horizontally at 40 to cover thru 42 and to be added to battleship and cruiser in array', () => {
        playerGameboard.placeShipVertically(battleShip, 0, 1);
        playerGameboard.placeShipVertically(cruiser, 0, 0);
        expect(playerGameboard.placeShipHorizontally(submarine, 4, 0)).toEqual([{ shipObj: battleShip, xCoord: 0, yCoord: 1 }, { shipObj: battleShip, xCoord: 1, yCoord: 1 }, { shipObj: battleShip, xCoord: 2, yCoord: 1 }, { shipObj: battleShip, xCoord: 3, yCoord: 1 }, { shipObj: cruiser, xCoord: 0, yCoord: 0 }, { shipObj: cruiser, xCoord: 1, yCoord: 0 }, { shipObj: cruiser, xCoord: 2, yCoord: 0 }, { shipObj: submarine, xCoord: 4, yCoord: 0 }, { shipObj: submarine, xCoord: 4, yCoord: 1 }, { shipObj: submarine, xCoord: 4, yCoord: 2 }]);
    });
});

describe('testing receiveAttack hits and misses', () => {

    beforeEach(() => {
        cruiser.clearHitCount();
        battleShip.clearHitCount();
        submarine.clearHitCount();
        carrier.clearHitCount();
        destroyer.clearHitCount();

        cruiserComputer.clearHitCount();
        battleShipComputer.clearHitCount();
        submarineComputer.clearHitCount();
        carrierComputer.clearHitCount();
        destroyerComputer.clearHitCount();
    });

    test('attack received at space covered by cruiser records hit to cruiser', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        expect(playerGameboard.receiveAttack(0, 0)).toBe(cruiser);
    });

    test('cruiser hitCount to be 2 after second attack lands', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        playerGameboard.receiveAttack(0, 0);
        playerGameboard.receiveAttack(0, 1);
        expect(cruiser.getHitCount()).toBe(2);
    })

    test('cruiser isSunk returns false after only 2 previous attacks', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        playerGameboard.receiveAttack(0, 0);
        playerGameboard.receiveAttack(0, 1);
        expect(cruiser.isSunk()).toBe(false);
    });

    test('cruiser isSunk returns true after a third attack', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        playerGameboard.receiveAttack(0, 0);
        playerGameboard.receiveAttack(0, 1);
        playerGameboard.receiveAttack(0, 2);
        expect(cruiser.isSunk()).toBe(true);
    });

    test('attack received at unoccupied space records miss to gameboard', () => {
        playerGameboard.placeShipHorizontally(cruiser, 0, 0);
        expect(playerGameboard.receiveAttack(5, 5)).toEqual([{ x: 5, y: 5 }]);
    });

    test('attack received at 01 records hit to battleship', () => {
        playerGameboard.placeShipHorizontally(battleShip, 0, 1);
        expect(playerGameboard.receiveAttack(0, 1)).toBe(battleShip);
    });

    test('two missed shots records correct spaces to missedShots array', () => {
        playerGameboard.receiveAttack(5, 5);
        playerGameboard.receiveAttack(5, 6);
        expect(playerGameboard.receiveAttack(5, 7)).toEqual([{ x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }]);
    });

    test('all spots hit from all ships returns true from allShipsSunk fn', () => {
        playerGameboard.resetPieces();
        playerGameboard.placeShipHorizontally(carrier, 0, 0);
        playerGameboard.placeShipHorizontally(cruiser, 1, 0);
        playerGameboard.placeShipHorizontally(battleShip, 2, 0);
        playerGameboard.placeShipHorizontally(submarine, 3, 0);
        playerGameboard.placeShipHorizontally(destroyer, 4, 0);

        playerGameboard.receiveAttack(0, 0);
        playerGameboard.receiveAttack(0, 1);
        playerGameboard.receiveAttack(0, 2);
        playerGameboard.receiveAttack(0, 3);
        playerGameboard.receiveAttack(0, 4);

        playerGameboard.receiveAttack(1, 0);
        playerGameboard.receiveAttack(1, 1);
        playerGameboard.receiveAttack(1, 2);

        playerGameboard.receiveAttack(2, 0);
        playerGameboard.receiveAttack(2, 1);
        playerGameboard.receiveAttack(2, 2);
        playerGameboard.receiveAttack(2, 3);

        playerGameboard.receiveAttack(3, 0);
        playerGameboard.receiveAttack(3, 1);
        playerGameboard.receiveAttack(3, 2);

        playerGameboard.receiveAttack(4, 0);
        playerGameboard.receiveAttack(4, 1);

        expect(playerGameboard.allShipsSunk()).toBe(true);
    });
});

describe('testing board setup including ship placement COMPUTER gameboard', () => {
    test('computerGameboard obj has 100 pairs of coords', () => {
        expect(computerGameboard.getCoordinatesArr().length).toBe(100);
    });

    test('expect cruiserComputer starting at 33 to cover thru 53', () => {
        expect(computerGameboard.placeShipVertically(cruiserComputer, 3, 3)).toEqual([{ shipObj: cruiserComputer, xCoord: 3, yCoord: 3 }, { shipObj: cruiserComputer, xCoord: 4, yCoord: 3 }, { shipObj: cruiserComputer, xCoord: 5, yCoord: 3 }]);
    });

    test('expect battleShipComputer to starting at 01 to cover thru 31', () => {
        expect(computerGameboard.placeShipVertically(battleShipComputer, 0, 1)).toEqual([{ shipObj: battleShipComputer, xCoord: 0, yCoord: 1 }, { shipObj: battleShipComputer, xCoord: 1, yCoord: 1 }, { shipObj: battleShipComputer, xCoord: 2, yCoord: 1 }, { shipObj: battleShipComputer, xCoord: 3, yCoord: 1 }]);
    });

    test('expect submarineComputer placed horizontally at 40 to cover thru 42', () => {
        expect(computerGameboard.placeShipHorizontally(submarineComputer, 4, 0)).toEqual([{ shipObj: submarineComputer, xCoord: 4, yCoord: 0 }, { shipObj: submarineComputer, xCoord: 4, yCoord: 1 }, { shipObj: submarineComputer, xCoord: 4, yCoord: 2 }]);
    });
});

describe('testing receiveAttack hits and misses on COMPUTER gameboard', () => {

    beforeEach(() => {
        cruiserComputer.clearHitCount();
        battleShipComputer.clearHitCount();
        submarineComputer.clearHitCount();
        carrierComputer.clearHitCount();
        destroyerComputer.clearHitCount();

        cruiser.clearHitCount();
        battleShip.clearHitCount();
        submarine.clearHitCount();
        carrier.clearHitCount();
        destroyer.clearHitCount();
    });

    test('attack received at space covered by cruiser records hit to cruiser', () => {
        computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
        expect(computerGameboard.receiveAttack(0, 1)).toBe(cruiserComputer);
    });

    test('cruiser hitCount to be 2 after second attack lands', () => {
        computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
        computerGameboard.receiveAttack(0, 0);
        computerGameboard.receiveAttack(0, 1);
        expect(cruiserComputer.getHitCount()).toBe(2);
    });

    test('cruiser isSunk returns false after only 2 previous attacks', () => {
        computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
        computerGameboard.receiveAttack(0, 0);
        computerGameboard.receiveAttack(0, 1);
        expect(cruiserComputer.isSunk()).toBe(false);
    });

    test('cruiser isSunk returns true after a third attack', () => {
        computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
        computerGameboard.receiveAttack(0, 0);
        computerGameboard.receiveAttack(0, 1);
        computerGameboard.receiveAttack(0, 2);
        expect(cruiserComputer.isSunk()).toBe(true);
    });

    test('attack received at unoccupied space records miss to gameboard', () => {
        computerGameboard.placeShipHorizontally(cruiserComputer, 0, 0);
        expect(computerGameboard.receiveAttack(5, 5)).toEqual([{ x: 5, y: 5 }]);
    });

    test('attack received at 01 records hit to battleship', () => {
        computerGameboard.placeShipHorizontally(battleShipComputer, 0, 1);
        expect(computerGameboard.receiveAttack(0, 2)).toBe(battleShipComputer);
    });

    test('two missed shots records correct spaces to missedShots array', () => {
        computerGameboard.receiveAttack(5, 5);
        computerGameboard.receiveAttack(5, 6);
        expect(computerGameboard.receiveAttack(5, 7)).toEqual([{ x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }]);
    });

    test('all spots hit from all ships returns true from allShipsSunk fn', () => {
        computerGameboard.resetPieces();
        computerGameboard.placeShipHorizontally(carrierComputer, 0, 0);
        computerGameboard.placeShipHorizontally(cruiserComputer, 1, 0);
        computerGameboard.placeShipHorizontally(battleShipComputer, 2, 0);
        computerGameboard.placeShipHorizontally(submarineComputer, 3, 0);
        computerGameboard.placeShipHorizontally(destroyerComputer, 4, 0);

        computerGameboard.receiveAttack(0, 0);
        computerGameboard.receiveAttack(0, 1);
        computerGameboard.receiveAttack(0, 2);
        computerGameboard.receiveAttack(0, 3);
        computerGameboard.receiveAttack(0, 4);

        computerGameboard.receiveAttack(1, 0);
        computerGameboard.receiveAttack(1, 1);
        computerGameboard.receiveAttack(1, 2);

        computerGameboard.receiveAttack(2, 0);
        computerGameboard.receiveAttack(2, 1);
        computerGameboard.receiveAttack(2, 2);
        computerGameboard.receiveAttack(2, 3);

        computerGameboard.receiveAttack(3, 0);
        computerGameboard.receiveAttack(3, 1);
        computerGameboard.receiveAttack(3, 2);

        computerGameboard.receiveAttack(4, 0);
        computerGameboard.receiveAttack(4, 1);

        expect(computerGameboard.allShipsSunk()).toBe(true);
    });
});




