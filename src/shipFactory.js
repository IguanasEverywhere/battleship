const Ship = (shipName, shipLength) => {
  let hitCount = 0;

  const hit = () => {
    hitCount++;
  }

  const getHitCount = () => {
    return hitCount;
  }

  const isSunk = () => {
    if (hitCount === shipLength) {
      return true;
    } else {
      return false;
    }
  }

  const clearHitCount = () => {
    hitCount = 0;
  }

  return { shipName, shipLength, getHitCount, hit, isSunk, clearHitCount }
}

const carrier = Ship("carrier", 5);
const battleShip = Ship("battleship", 4);
const cruiser = Ship("cruiser", 3);
const submarine = Ship("submarine", 3);
const destroyer = Ship("destroyer", 2);

const carrierComputer = Ship("carrier", 5);
const battleShipComputer = Ship("battleship", 4);
const cruiserComputer = Ship("cruiser", 3);
const submarineComputer = Ship("submarine", 3);
const destroyerComputer = Ship("destroyer", 2);

export { battleShip, carrier, cruiser, submarine, destroyer, carrierComputer, battleShipComputer, cruiserComputer, submarineComputer, destroyerComputer }