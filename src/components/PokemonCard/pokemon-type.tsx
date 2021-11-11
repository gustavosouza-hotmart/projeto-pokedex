import React from "react";

import "@cosmos/card/card.css";
import "@cosmos/card/card-header.css";
import "@cosmos/card/card-body.css";

import "./pokemon-type.style.scss";

interface PokemonTypeProps {
    type: string;
}

function PokemonType({ type }: PokemonTypeProps) {
    const tipo = type.at(0)?.toUpperCase().concat(type.substring(1));

    return <div className={`tipo ${type} _mb-4 _ml-1 _mr-1`}>{tipo}</div>;
}

export default PokemonType;
