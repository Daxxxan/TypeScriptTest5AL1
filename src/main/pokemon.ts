import {Attack} from "./Attack";

export class Pokemon {
    private hp: number;
    name: string;
    speed: number;
    category: string;
    attacks: Array<Attack>;

    constructor(name: string, speed: number, category: string, hp: number, attacks: Array<Attack>) {
        this.name = name;
        this.speed = speed;
        this.category = category;
        this.hp = hp;
        this.attacks = attacks;
    }

    attack(name: string, pokemon: Pokemon) {
        let attack = this.attacks.find(attack => attack.name === name);

        if(attack !== undefined) {
            if(attack.getDamage() > pokemon.hp) {
                pokemon.hp = 0;
            } else {
                pokemon.hp -= attack.getDamage();
            }
        }

        return pokemon;
    }

    get getHp(): number {
        return this.hp;
    }

    isAlive(): boolean {
        if(this.hp > 0) {
            return true;
        }
        return false;
    }
}