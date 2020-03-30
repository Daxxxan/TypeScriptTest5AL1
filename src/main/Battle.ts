import {Pokemon} from "./pokemon";
import {turnOrder} from "./turnOrder";

export class Battle {
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    play(firstPokemon: Pokemon, secondPokemon: Pokemon) : Pokemon{
        let pokemonFighters = [firstPokemon, secondPokemon];
        return this.fight(pokemonFighters);
    }

    fight(pokemonFighters: Pokemon[]) : Pokemon {
        let firstPlayer = turnOrder(pokemonFighters[0], pokemonFighters[1]);
        let secondPlayer = pokemonFighters.filter(pokemon => pokemon.name !== firstPlayer.name)[0];
        let attackName = 'Vibraqua';

        //async don't work
        //setInterval(this.round, 500, firstPlayer, secondPlayer, attackName);

        while(firstPlayer.getHp > 0 && secondPlayer.getHp > 0) {
            this.round(firstPlayer, secondPlayer, attackName);
        }

        if(firstPlayer.getHp > secondPlayer.getHp) {
            return firstPlayer;
        }
        return secondPlayer;
    }
    round(firstPlayer: Pokemon, secondPlayer: Pokemon, attackName: string) {
        firstPlayer.attack(attackName, secondPlayer);
        if(secondPlayer.isAlive()) {
            secondPlayer.attack(attackName, firstPlayer);
        }
    }
    //async don't work
    /*round(firstPlayer: Pokemon, secondPlayer: Pokemon, attackName: string) {
        this.roundAttack(firstPlayer, attackName, secondPlayer);
        this.roundAttack(secondPlayer, attackName, firstPlayer);
    }*/

    //async don't work
    /*roundAttack(firstPlayer: Pokemon, attackName: string, secondPlayer: Pokemon) {
        firstPlayer.attack(attackName, secondPlayer);
        if(!secondPlayer.isAlive()) {
            clearInterval();
        }
    }*/
}