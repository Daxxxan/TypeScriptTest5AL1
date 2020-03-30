import {Pokemon} from "../main/pokemon";

describe('Test pokemon.ts', () => {
    test('Pokemon name should be equal to constructor argument', () => {
        let name = 'Bulbizarre';
        let pokemon = new Pokemon(name, 45, 'graine');
        expect(pokemon.name).toBe(name);
    })
});