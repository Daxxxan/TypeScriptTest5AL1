export class Attack {
    name: string;
    type: string;
    power: number;
    accuray: number;

    constructor(name: string, type: string, power: number, accuracy: number) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.accuray = accuracy;
    }

    getDamage() {
        return this.power;
    }
}