export class Treinador {
    readonly id?: number;
    readonly name: string;
    readonly birthdate: Date;

    constructor(name: string, birthdate: Date, id?: number) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
    }

    verifyDate(): boolean {
        let now = new Date(Date.now());

        return now.getFullYear() - this.birthdate.getFullYear() > 10
            ? true
            : false;
    }
}
