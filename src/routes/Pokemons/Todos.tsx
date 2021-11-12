import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ContentHeader from "../../components/ContentHeader/content-header";
import Breadcrumb from "./../../components/Breadcrumb/breadcrumb";
import Header from "../../components/Header/header";
import { usePath } from "./../../hooks/usePath";
import ContentBody from "../../components/ContentBody/content-body";
import PokemonGrid from "./../../components/Grid/pokemonGrid";

function Todos() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return (
        <div className="todos">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header
                    title="Todos Pokémons"
                    message="Lista com todos os pokémos existentes"
                />
            </ContentHeader>

            <ContentBody>
                <PokemonGrid />
            </ContentBody>
        </div>
    );
}

export default Todos;
