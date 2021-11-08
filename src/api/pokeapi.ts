import axios from "axios";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export const get = async (id: number, setDados: any) => {
    const resp = await api.get(id.toString());
    setDados(resp.data);
};
