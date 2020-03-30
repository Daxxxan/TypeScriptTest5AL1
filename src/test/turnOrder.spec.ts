// @ts-ignore
import {Pokemon} from "../main/pokemon";
import {getRandomInt, turnOrder, pokemonIsNorman} from "../main/turnOrder";
import {Attack} from "../main/Attack";

describe('Test turnOrder.ts', () => {
    let attacks = new Array<Attack>(new Attack('Vive-attaque', 'normal', 40, 100),
                                    new Attack('Vibraqua', 'eau', 60, 100));

    test('Poussifeu should start', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
        let gloupti = new Pokemon("Gloupti", 40, 'estomac', 100, attacks);
        expect(turnOrder(poussifeu, gloupti)).toBe(poussifeu);
    }),

    test('Jungko should start', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
        let jungko = new Pokemon("Jungko", 120, 'foret', 100, attacks);
        expect(turnOrder(poussifeu, jungko)).toBe(jungko);
    }),

    test('Alexifeu should start', () => {
        let alexifeu = new Pokemon("Alexifeu", 20, 'normand', 100, attacks);
        let jungko = new Pokemon("Jungko", 120, 'foret', 100, attacks);
        expect(turnOrder(alexifeu, jungko)).toBe(alexifeu);
    }),

    test('value should be greater than or equal 0', () => {
        expect(getRandomInt(2)).toBeGreaterThanOrEqual(0);
    }),

    test('value should be lower than or equal 1', () => {
        expect(getRandomInt(2)).toBeLessThanOrEqual(1);
    }),

    test('Pokemon should be norman', () => {
        let alexifeu = new Pokemon("Alexifeu", 20, 'normand', 100, attacks);
        expect(pokemonIsNorman(alexifeu)).toBe(true);
    })
});