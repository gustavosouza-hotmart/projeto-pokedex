import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import "@cosmos/card/card.css";
import "@cosmos/card/card-header.css";
import "@cosmos/card/card-body.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/pro-light-svg-icons/faBullseye";
import { faEye } from "@fortawesome/pro-light-svg-icons/faEye";

import "./pokemon-card.style.scss";
import PokemonType from "./pokemon-type";
import "./pokemon-type.style.scss";

interface PokemonCardProps {
    id: number;
    name: string;
    image: string;
    types: string[];
    seen: boolean;
    captured: boolean;
    handleSeen: any;
    handleCaptured: any;
}

function PokemonCard({
    id,
    name,
    image,
    types,
    seen,
    captured,
    handleSeen,
    handleCaptured,
}: PokemonCardProps) {
    const location = useLocation();

    return (
        <hot-card class="hot-card--bordered card">
            <hot-card-header class="pokename _m-0 _p-2">{`#${id} - ${name}`}</hot-card-header>
            <hot-card-body class="pokeimage">
                <img src={image} />
            </hot-card-body>
            <hot-card-footer class="_m-3 pokedetails">
                <span className="tipos">
                    {types.map((type: string, indice: number) => (
                        <PokemonType key={indice} type={type} />
                    ))}
                </span>
                <div
                    className="icon-details"
                    {...(location.pathname === "/pokemons/capturados" && {
                        className: "details",
                    })}
                >
                    {location.pathname != "/pokemons/capturados" && (
                        <span className="icons">
                            {location.pathname === "/pokemons" && (
                                <span
                                    className="seen-button"
                                    onClick={() => handleSeen(id)}
                                >
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        {...(!seen && {
                                            className: "icon-disabled",
                                        })}
                                    />
                                </span>
                            )}
                            <span
                                className="captured-button"
                                onClick={() => handleCaptured(id)}
                            >
                                <FontAwesomeIcon
                                    icon={faBullseye}
                                    {...(!captured && {
                                        className: "icon-disabled",
                                    })}
                                />
                            </span>
                        </span>
                    )}
                    <Link to={location.pathname}>Ver detalhes</Link>
                </div>
            </hot-card-footer>
        </hot-card>
    );
}

export default PokemonCard;
