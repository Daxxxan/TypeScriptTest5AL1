import {Pokemon} from "./pokemon";

function turnOrder(firstPokemon: Pokemon, secondPokemon: Pokemon) : Pokemon {
    if(pokemonIsNorman(firstPokemon) && !pokemonIsNorman(secondPokemon)) {
        return firstPokemon;
    } else if(pokemonIsNorman(secondPokemon) && !pokemonIsNorman(firstPokemon)) {
        return secondPokemon
    } else {
        if(firstPokemon.speed > secondPokemon.speed) {
            return firstPokemon;
        } else if( firstPokemon.speed === secondPokemon.speed) {
            return getRandomInt(2) ? secondPokemon : firstPokemon;
        }
        return secondPokemon;
    }
}

function pokemonIsNorman(pokemon: Pokemon) : boolean{
    return pokemon.category === 'normand';
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export {turnOrder, getRandomInt, pokemonIsNorman};