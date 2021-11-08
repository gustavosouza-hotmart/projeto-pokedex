import React, { useEffect, useState } from "react";

import "@cosmos/card/card.css";
import "@cosmos/card/card-header.css";
import "@cosmos/card/card-body.css";

import "./pokemon-card.style.scss";
import { get } from "../../api/pokeapi";

function PokemonCard() {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        get(25, setPokemons);
    }, []);

    console.log(pokemons);

    return (
        <hot-card class="hot-card--bordered card">
            <hot-card-header>#001 - Bulbasaur</hot-card-header>
            <hot-card-body>Pokemon</hot-card-body>
            <hot-card-footer>Tipo 1 - Tipo 2</hot-card-footer>
        </hot-card>
    );
}

export default PokemonCard;
