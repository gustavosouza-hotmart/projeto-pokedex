export class Treinador {
    readonly id: number;
    readonly name: string;
    readonly age: number;
    readonly seen: number[];
    readonly captured: number[];
    readonly birthdate: Date;

    constructor(name: string, date: Date) {
        const data = new Date(Date.now());
        this.birthdate = date;
        this.name = name;
        this.age = data.getFullYear() - date.getFullYear();
        this.seen = [];
        this.captured = [];
    }
}
