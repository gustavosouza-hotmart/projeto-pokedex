import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/pokemon-card";
import "./pokemonsList.style.scss";
import { filterPokemons, getAll } from "../../api/pokeapi";
import Pokemon from "../../modules/Pokemon/models/pokemon";
import { get } from "../../api/trainerapi";
import { atualizar } from "../../api/trainerapi";
import { useLocation } from "react-router";
import Pagination from "../Pagination/pagination";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [trainer, setTrainer] = useState<any>();
    const [id, setId] = useState(0);
    const [changeInPokemonState, setChangeInPokemonState] = useState(false);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("@projeto/page/", JSON.stringify({ page: 1 }));
    }, []);

    useEffect(() => {
        getTrainer();
        if (location.pathname === "/pokemons") {
            const local = localStorage.getItem("@projeto/page/");
            let localstorage;
            if (local) localstorage = JSON.parse(local);

            getAll(setPokemons, localstorage.page);
            localStorage.setItem(
                "@projeto/numberOfPages/",
                JSON.stringify({ numberOfPages: 23 })
            );
            setLastPage(23);
        }
    }, [page]);

    useEffect(() => {
        getTrainer();

        if (location.pathname === "/pokemons/vistos" && trainer) {
            let qtdPages = Math.ceil(trainer.seen.length / 50);
            localStorage.setItem(
                "@projeto/numberOfPages/",
                JSON.stringify({ numberOfPages: qtdPages })
            );
            setLastPage(qtdPages);

            filterPokemons(trainer.seen, setPokemons, (page - 1) * 50);
        }

        if (location.pathname.includes("/pokemons/capturados") && trainer) {
            let qtdPages = Math.ceil(trainer.captured.length / 50);
            localStorage.setItem(
                "@projeto/numberOfPages/",
                JSON.stringify({ numberOfPages: qtdPages })
            );
            setLastPage(qtdPages);

            filterPokemons(trainer.captured, setPokemons, (page - 1) * 50);
        }
    }, [trainer, changeInPokemonState, page]);

    function onClickPrevious(setPageFromPagination: any) {
        if (page > 1) {
            localStorage.setItem(
                "@projeto/page/",
                JSON.stringify({ page: page - 1 })
            );
            setPageFromPagination(page - 1);
            setPage(page - 1);
        }
    }

    function onClickNext(setPageFromPagination: any) {
        if (page < lastPage) {
            localStorage.setItem(
                "@projeto/page/",
                JSON.stringify({ page: page + 1 })
            );
            setPageFromPagination(page + 1);
            setPage(page + 1);
        }
    }

    function getTrainer() {
        const local = localStorage.getItem("@projeto/active/");

        let treinadorSelecionado;
        if (local) treinadorSelecionado = JSON.parse(local);

        const currentTrainerId = treinadorSelecionado.active[0];

        if (currentTrainerId != id && currentTrainerId) {
            get(`/trainers/${currentTrainerId}`, setTrainer);
            setId(currentTrainerId);
        }
    }

    function sortById(poke1: Pokemon, poke2: Pokemon) {
        if (poke1.id < poke2.id) return -1;
        if (poke1.id > poke2.id) return 1;
        return 0;
    }

    function handleSeen(pokemonId: number) {
        if (trainer) {
            if (!trainer.seen.includes(pokemonId)) trainer.seen.push(pokemonId);

            atualizar(`/trainers/${id}`, trainer);
            setChangeInPokemonState(!changeInPokemonState);
        }
    }

    function handleCaptured(pokemonId: number) {
        if (trainer) {
            if (!trainer.captured.includes(pokemonId)) {
                if (!trainer.seen.includes(pokemonId))
                    trainer.seen.push(pokemonId);

                trainer.captured.push(pokemonId);
            }

            atualizar(`/trainers/${id}`, trainer);
            setChangeInPokemonState(!changeInPokemonState);
        }
    }

    return id || location.pathname === "/pokemons" ? (
        <div className="container">
            <div className="pokemon-list">
                {pokemons.sort(sortById).map((pokemon: any) => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={
                            pokemon.name.at(0)?.toUpperCase() +
                            pokemon.name.slice(1)
                        }
                        image={pokemon.image}
                        types={pokemon.types}
                        seen={
                            trainer ? trainer.seen.includes(pokemon.id) : false
                        }
                        captured={
                            trainer
                                ? trainer.captured.includes(pokemon.id)
                                : false
                        }
                        handleSeen={handleSeen}
                        handleCaptured={handleCaptured}
                    />
                ))}
            </div>
            {lastPage > 1 ? (
                <div className="pagination">
                    <Pagination
                        onClickPrevious={onClickPrevious}
                        onClickNext={onClickNext}
                        numberOfPages={lastPage}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    ) : (
        <h3>Nenhum treinador selecionado</h3>
    );
}

export default PokemonList;
