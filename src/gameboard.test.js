import { playerGameboard } from './gameboard';

test('playerGameBoard obj has 100 pairs of coords', () => {
    expect(playerGameboard.getCoordinatesArr().length).toBe(100);
});

test('expect ship of length 3 starting at 00 to cover thru 02', () => {
    expect(playerGameboard.placeShipHorizontally(3, 0, 0)).toEqual([{xCoord: 0,yCoord:0},{xCoord:0,yCoord:1},{xCoord:0,yCoord:2}]);
});
