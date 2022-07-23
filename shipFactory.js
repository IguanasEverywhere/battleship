const Ship = (shipLength) => {
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

  return {shipLength, getHitCount, hit, isSunk, clearHitCount}
}

const carrier = Ship(5);
const battleShip = Ship(4);
const cruiser = Ship(3);
const submarine = Ship(3);
const destroyer = Ship(2);

export { battleShip, carrier, cruiser, submarine, destroyer }