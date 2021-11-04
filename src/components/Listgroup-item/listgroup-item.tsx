import React from 'react';

import "@cosmos/list-group/list-group.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/pro-light-svg-icons';

import "./listgroup-item.style.scss";

interface ListGroupItemProps {
    name: string,
    age: number,
    active?: boolean
}

function ListGroupItem({name, age, ...props} : ListGroupItemProps){
    return(
        <hot-list-group-item class="item hot-list-group__item--action _d-flex _px-5 _py-4" {...(props?.active === true && {active: true})}>
            <div className="infos">
                <span>{name}</span>
                <span id="age">Idade: {age}</span>
            </div>
            <hot-dropdown class="dropdown">
                
                <div slot="button" className="hot-button hot-dropdown__toggle hot-button--tertiary">
                    <FontAwesomeIcon icon={faEllipsisV} className="ellipsis-icon"/>
                </div>

                <hot-dropdown-menu-item slot="menu">Selecionar</hot-dropdown-menu-item>
                <hot-dropdown-menu-item slot="menu">Editar</hot-dropdown-menu-item>
                <hot-dropdown-menu-item slot="menu">Excluir</hot-dropdown-menu-item>

            </hot-dropdown>
        </hot-list-group-item>
    );
}

export default ListGroupItem;