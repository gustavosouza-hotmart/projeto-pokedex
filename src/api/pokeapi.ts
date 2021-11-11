import axios from "axios";
import Pokemon from "../modules/Pokemon/models/pokemon";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export const getAll = async (setDados: any, page: number) => {
    const resp = await api.get(`?limit=50&offset=${50 * (page - 1)}`);
    getPokemonsDetails(resp.data.results, setDados);
};

export const filterPokemons = async (
    arraySeenOrCapturedPokemonsId: any,
    setDados: any,
    firstPokemonOfCurrentPage: number
) => {
    let pokemonsUrls = <any>[];
    let tamanho = arraySeenOrCapturedPokemonsId.length;

    for (
        let i = firstPokemonOfCurrentPage;
        tamanho - firstPokemonOfCurrentPage > 50 ? i < 50 : i < tamanho;
        i++
    ) {
        const resp = await api.get(
            `?limit=1&offset=${arraySeenOrCapturedPokemonsId[i] - 1}`
        );
        pokemonsUrls.push(resp.data.results[0]);
        if (i === 49 || i === arraySeenOrCapturedPokemonsId.length - 1) {
            getPokemonsDetails(pokemonsUrls, setDados);
        }
    }
};

async function getPokemonsDetails(pokemons: any, setDados: any) {
    let pokemonsArray = <any>[];

    await pokemons.forEach(async (pokemon: any) => {
        const resp = await api.get(pokemon.url);
        const id = resp.data.id;
        const name = resp.data.name;

        const image =
            resp.data.sprites["other"]["official-artwork"]["front_default"];

        const types = <any>[];

        resp.data.types.forEach((type: any) => {
            types.push(type["type"]["name"]);
        });

        const pokemonObj = new Pokemon(id, name, image, types);
        pokemonsArray.push(pokemonObj);
        setDados([...pokemonsArray]);
    });
}
