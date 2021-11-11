import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const get = async (url: string, setDados: any) => {
    const resp = await api.get(url);

    setDados(resp.data);
};

export const post = async (url: string, dado: any) => {
    await api.post(url, dado);
};

export const deletar = async (url: string) => {
    await api.delete(url);
};

export const atualizar = async (url: string, dado: any) => {
    await api.patch(url, dado);
};
