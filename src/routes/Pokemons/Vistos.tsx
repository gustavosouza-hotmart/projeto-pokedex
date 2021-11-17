import React from "react";
import { useLocation } from "react-router";
import { usePath } from "./../../hooks/usePath";
import Breadcrumb from "./../../components/Breadcrumb/breadcrumb";
import ContentHeader from "../../components/ContentHeader/content-header";
import Header from "../../components/Header/header";
import ContentBody from "../../components/ContentBody/content-body";
import PokemonList from "../../components/Grid/pokemonList";

function Vistos() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return (
        <div className="vistos">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header
                    title="Pokémons Vistos"
                    message="Lista com todos os pokémos que você já viu"
                />
            </ContentHeader>

            <ContentBody>
                <PokemonList />
            </ContentBody>
        </div>
    );
}

export default Vistos;
