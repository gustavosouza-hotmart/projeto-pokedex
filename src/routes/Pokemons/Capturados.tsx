import React from "react";
import { useLocation } from "react-router";
import Breadcrumb from "./../../components/Breadcrumb/breadcrumb";
import ContentHeader from "../../components/ContentHeader/content-header";
import Header from "../../components/Header/header";
import { usePath } from "../../hooks/usePath";
import ContentBody from "../../components/ContentBody/content-body";
import PokemonList from "../../components/Grid/pokemonList";

function Capturados() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return (
        <div className="capturados">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header
                    title="Pokémons Capturados"
                    message="Lista com todos os pokémons que você já capturou"
                />
            </ContentHeader>

            <ContentBody class="capturados">
                <PokemonList />
            </ContentBody>
        </div>
    );
}

export default Capturados;
