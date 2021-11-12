export default class Pokemon {
    readonly id: number;
    readonly name: string;
    readonly image: string;
    readonly types: string[];

    constructor(id: number, name: string, image: string, types: string[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.types = types;
    }
}
