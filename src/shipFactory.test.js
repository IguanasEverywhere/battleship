import {battleShip, carrier, cruiser, submarine, destroyer } from './shipFactory';

describe('test the battleship', () => {
  beforeEach(() => {
    battleShip.clearHitCount();
  });
  
  test('battleship length is 4', () => {
    expect(battleShip.shipLength).toBe(4);
  });
  
  test('battleship hitCount is 1 after 1 hit', () => {
    battleShip.hit();
    expect(battleShip.getHitCount()).toBe(1);
  });
  
  test('battleship hitCount is 2 after 2 hits', () => {
    battleShip.hit();
    battleShip.hit();
    expect(battleShip.getHitCount()).toBe(2);
  });
  
  test('battleship getSunk returns true after 4 hits', () => {
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    battleShip.hit();
    expect(battleShip.isSunk()).toBe(true);
  });
});

describe ('test the carrier', () => {
  beforeEach(() => {
    carrier.clearHitCount();
  });

  test('carrier length is 5', () => {
    expect(carrier.shipLength).toBe(5);
  });
  
  test('carrier hitCount is 1 after 1 hit', () => {
    carrier.hit();
    expect(carrier.getHitCount()).toBe(1);
  });
  
  test('carrier hitCount is 2 after 2 hits', () => {
    carrier.hit();
    carrier.hit();
    expect(carrier.getHitCount()).toBe(2);
  });
  
  test('carrier getSunk returns true after 5 hits', () => {
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.isSunk()).toBe(true);
  });
});

describe ('test the cruiser', () => {
  beforeEach(() => {
    cruiser.clearHitCount();
  });

  test('cruiser length is 3', () => {
    expect(cruiser.shipLength).toBe(3);
  });
  
  test('cruiser hitCount is 1 after 1 hit', () => {
    cruiser.hit();
    expect(cruiser.getHitCount()).toBe(1);
  });
  
  test('cruiser hitCount is 2 after 2 hits', () => {
    cruiser.hit();
    cruiser.hit();
    expect(cruiser.getHitCount()).toBe(2);
  });
  
  test('cruiser getSunk returns true after 3 hits', () => {
    cruiser.hit();
    cruiser.hit();
    cruiser.hit();
    expect(cruiser.isSunk()).toBe(true);
  });
});

describe ('test the submarine', () => {
  beforeEach(() => {
    submarine.clearHitCount();
  });

  test('submarine length is 3', () => {
    expect(submarine.shipLength).toBe(3);
  });
  
  test('submarine hitCount is 1 after 1 hit', () => {
    submarine.hit();
    expect(submarine.getHitCount()).toBe(1);
  });
  
  test('submarine hitCount is 2 after 2 hits', () => {
    submarine.hit();
    submarine.hit();
    expect(submarine.getHitCount()).toBe(2);
  });
  
  test('cruiser getSunk returns true after 3 hits', () => {
    submarine.hit();
    submarine.hit();
    submarine.hit();
    expect(submarine.isSunk()).toBe(true);
  });
});

describe ('test the destroyer', () => {
  beforeEach(() => {
    destroyer.clearHitCount();
  });

  test('destroyer length is 2', () => {
    expect(destroyer.shipLength).toBe(2);
  });
  
  test('destroyer hitCount is 1 after 1 hit', () => {
    destroyer.hit();
    expect(destroyer.getHitCount()).toBe(1);
  });
  
  test('destroyer hitCount is 2 after 2 hits', () => {
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.getHitCount()).toBe(2);
  });
  
  test('destroyer getSunk returns true after 2 hits', () => {
    destroyer.hit();
    destroyer.hit();
    expect(cruiser.isSunk()).toBe(true);
  });
});
