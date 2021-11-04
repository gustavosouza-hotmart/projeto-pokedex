import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import '@cosmos/menu';
import '@cosmos/header';
import '@cosmos/dropdown';
import '@cosmos/avatar';
import '@cosmos/menu-item';
import '@cosmos/collapse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from "@fortawesome/pro-light-svg-icons/faDragon";
import { faUsers } from "@fortawesome/pro-light-svg-icons/faUsers";

import "./structure.scss";


function StructureMenu() {
    const submenuTodosRef = useRef<any>(null);
    const submenuVistosRef = useRef<any>(null);
    const submenuCapturadosRef = useRef<any>(null);
    const submenuPokemonsRef = useRef<any>(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(effectMount, []);

    function effectMount() {
        submenuTodosRef.current && submenuTodosRef.current.addEventListener('click', onClickTodos);
        submenuVistosRef.current && submenuVistosRef.current.addEventListener('click', onClickVistos);
        submenuCapturadosRef.current && submenuCapturadosRef.current.addEventListener('click', onClickCapturados);
        submenuPokemonsRef.current && submenuPokemonsRef.current.addEventListener('click', onOpenPokemons);
        return () => {
            submenuTodosRef.current && submenuTodosRef.current.removeEventListener('click', onClickTodos)
            submenuVistosRef.current && submenuVistosRef.current.removeEventListener('click', onClickVistos);
            submenuCapturadosRef.current && submenuCapturadosRef.current.removeEventListener('click', onClickCapturados);
            submenuPokemonsRef.current && submenuPokemonsRef.current.removeEventListener('click', onOpenPokemons);
        };
    }

    function onClickTodos() {
        history.push('/pokemons');
    }

    function onClickVistos() {
        history.push('/pokemons/vistos');
    }

    function onClickCapturados() {
        history.push('/pokemons/capturados');
    }

    function onOpenPokemons(){
        if(!history.location.pathname.includes("pokemons"))
            history.push('/pokemons');
    }

    return (
        <hot-menu slot="menu">

            <div slot="product-name" className="productName">Pokémon</div>

            <hot-header slot="header">
                <hot-dropdown slot="header-actions">
                    <hot-menu-item slot="button">
                        <div className="hot-application-menu__icon">
                            <hot-avatar class="hot-avatar--sm hot-avatar--text _rounded-circle">
                                <span>GG</span>
                            </hot-avatar>
                        </div>
                    </hot-menu-item>
                </hot-dropdown>
            </hot-header>

            <hot-menu-item ref={submenuPokemonsRef} {...(history.location.pathname.includes('/pokemons') && { open: 'true' })}>
                <div className="hot-application-menu__icon icon-label--menu-style">
                    <FontAwesomeIcon icon={faDragon} />
                </div>
                <span>Pokémons</span>

                <hot-menu-item ref={submenuTodosRef} class="submenu" slot="collapsed" {...(location.pathname === "/pokemons" && { active: "true" })}>
                    <span>Todos</span>
                </hot-menu-item>

                <hot-menu-item ref={submenuVistosRef} class="submenu" slot="collapsed"  {...(location.pathname === "/pokemons/vistos" && { active: "true" })}>
                    <span>Vistos</span>
                </hot-menu-item>

                <hot-menu-item ref={submenuCapturadosRef} class="submenu" slot="collapsed" {...(location.pathname === "/pokemons/capturados" && { active: "true" })}>
                    <span>Capturados</span>
                </hot-menu-item>

            </hot-menu-item>

            <Link to="/treinadores">
                <hot-menu-item {...(history.location.pathname === "/treinadores" && { active: "true" })}>
                    <div className="hot-application-menu__icon icon-label--menu-style">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <span>Treinadores</span>
                </hot-menu-item>
            </Link>

        </hot-menu>
    );
}

export default StructureMenu;