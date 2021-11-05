export class Treinador {
    readonly id: number;
    readonly name: string;
    readonly age: number;
    readonly seen: number[];
    readonly captured: number[];

    constructor(name: string, date: Date) {
        const data = new Date(Date.now());
        this.name = name;
        this.age = data.getFullYear() - date.getFullYear();
        this.seen = [];
        this.captured = [];
    }
}
