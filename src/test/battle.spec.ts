import {Attack} from "../main/Attack";
import {Pokemon} from "../main/pokemon";
import {Battle} from "../main/Battle";

describe('Test battle.ts', () => {
    let attacks = new Array<Attack>(new Attack('Vive-attaque', 'normal', 40, 100),
                                    new Attack('Vibraqua', 'eau', 60, 100));

    test('Poussifeu should win', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
        let gloupti = new Pokemon("Gloupti", 40, 'estomac', 100, attacks);
        let battle: Battle = new Battle(poussifeu, gloupti);
        expect(battle.play(poussifeu, gloupti)).toBe(poussifeu);
    }),

    test('Gloupti should win', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
        let gloupti = new Pokemon("Gloupti", 40, 'normand', 100, attacks);
        let battle: Battle = new Battle(poussifeu, gloupti);
        expect(battle.play(poussifeu, gloupti)).toBe(gloupti);
    })
});