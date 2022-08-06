import { humanAttack, computerAttack } from "./player";

test('human player attacking 55 returns missed shots array', () => {
    expect(humanAttack(5, 5)).toEqual([{ x: 5, y: 5 }]);
})