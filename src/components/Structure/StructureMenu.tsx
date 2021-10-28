import React, { useEffect, useRef } from 'react';
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
    const location = useLocation();
    const history = useHistory();

    useEffect(effectMount, []);

    function effectMount() {
        submenuTodosRef.current && submenuTodosRef.current.addEventListener('click', onClickTodos);
        return () => submenuTodosRef.current && submenuTodosRef.current.removeEventListener('click', onClickTodos);
    }

    function onClickTodos() {
        history.push('/pokemons/todos');
        console.log('Clicked Todos');
    }

    function onClickVistos() {
        console.log('Clicked Vistos');
    }

    function onClickCapturados() {
        console.log('Clicked Capturados');
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

            <hot-menu-item>
                <div className="hot-application-menu__icon icon-label--menu-style">
                    <FontAwesomeIcon icon={faDragon} />
                </div>
                <span>Pokémons</span>

                <hot-menu-item ref={submenuTodosRef} class="submenu" slot="collapsed" {...(location.pathname === "/pokemons/todos" && { active: "true", class: "active-item" })}>
                    <span>Todos</span>
                </hot-menu-item>

                <hot-menu-item class="submenu" slot="collapsed"  {...(location.pathname === "/pokemons/vistos" && { active: "true", class: "active-item" })}>
                    <span>Vistos</span>
                </hot-menu-item>

                <hot-menu-item class="submenu" slot="collapsed" {...(location.pathname === "/pokemons/capturados" && { active: "true", class: "active-item" })}>
                    <span>Capturados</span>
                </hot-menu-item>

            </hot-menu-item>

            <Link to="/treinadores">
                <hot-menu-item {...(location.pathname === "/treinadores" && { active: "true", class: "active-item" })}>
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