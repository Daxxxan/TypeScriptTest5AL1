import {Pokemon} from "../main/pokemon";
import {Attack} from "../main/Attack";

describe('Test pokemon.ts', () => {
    let attacks = new Array<Attack>(new Attack('Vive-attaque', 'normal', 40, 100),
                                    new Attack('Vibraqua', 'eau', 60, 100));

    test('Pokemon name should be equal to constructor argument', () => {
        let name = 'Bulbizarre';
        let pokemon = new Pokemon(name, 45, 'graine', 100, attacks);
        expect(pokemon.name).toBe(name);
    }),

    test('After the attack, poussifeu should have 40hp', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
        let gloupti = new Pokemon("Gloupti", 40, 'estomac', 100, attacks);
        poussifeu = gloupti.attack('Vibraqua', poussifeu);
        expect(poussifeu.getHp).toBe(40);
    }),

    test('After the attack, poussifeu should have 0hp', () => {
        let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 10, attacks);
        let gloupti = new Pokemon("Gloupti", 40, 'estomac', 100, attacks);
        poussifeu = gloupti.attack('Vibraqua', poussifeu);
        expect(poussifeu.getHp).toBe(0);
    })
});