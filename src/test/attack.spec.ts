import {Attack} from "../main/Attack";
import {Pokemon} from "../main/pokemon";

describe('Test attack.ts', () => {
    let attack = new Attack('Vibraqua', 'eau', 60, 100);

    test('Attack damages should be 60', () => {
        expect(attack.getDamage()).toBe(60);
    })
});