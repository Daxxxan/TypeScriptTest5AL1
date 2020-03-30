import { Pokemon } from "./pokemon";
import {Attack} from "./Attack";
import {Battle} from "./Battle";

let attacks = new Array<Attack>(new Attack('Vive-attaque', 'normal', 40, 100),
                                new Attack('Vibraqua', 'eau', 60, 100));

let poussifeu = new Pokemon("Poussifeu", 45, 'poussin', 100, attacks);
let gloupti = new Pokemon("Gloupti", 40, 'estomac', 100, attacks);
let battle: Battle = new Battle(poussifeu, gloupti);