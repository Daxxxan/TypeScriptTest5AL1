// @ts-ignore
import {Pokemon} from "../main/pokemon";
import {getRandomInt, turnOrder, pokemonIsNorman} from "../main/turnOrder";

describe('Test turnOrder.ts', () => {
    test('Poussifeu should start', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin');
        let gloupti = new Pokemon("Gloupti", 40, 'estomac');
        expect(turnOrder(poussifeu, gloupti)).toBe(poussifeu);
    }),

    test('Jungko should start', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin');
        let jungko = new Pokemon("Jungko", 120, 'foret');
        expect(turnOrder(poussifeu, jungko)).toBe(jungko);
    }),

    test('Alexifeu should start', () => {
        let alexifeu = new Pokemon("Alexifeu", 20, 'normand');
        let jungko = new Pokemon("Jungko", 120, 'foret');
        expect(turnOrder(alexifeu, jungko)).toBe(alexifeu);
    }),

    test('value should be greater than or equal 0', () => {
        expect(getRandomInt(1)).toBeGreaterThanOrEqual(0);
    }),

    test('value should be lower than or equal 1', () => {
        expect(getRandomInt(1)).toBeLessThanOrEqual(1);
    }),

    test('Pokemon should be norman', () => {
        let alexifeu = new Pokemon("Alexifeu", 20, 'normand');
        expect(pokemonIsNorman(alexifeu)).toBe(true);
    })
});