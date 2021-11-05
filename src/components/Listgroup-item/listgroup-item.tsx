import React, { useState } from "react";

import "@cosmos/list-group/list-group.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/pro-light-svg-icons";

import "./listgroup-item.style.scss";
import { Treinador } from "src/modules/Treinador/models/treinador";

interface ListGroupItemProps {
    trainer: Treinador;
    handleSelection: Function;
    handleEdit: Function;
    handleDelete: Function;
}

function ListGroupItem({
    trainer,
    handleSelection,
    handleEdit,
    handleDelete,
}: ListGroupItemProps) {
    const [active, setActive] = useState(false);
    let local = localStorage.getItem(`@projeto/active/${trainer.id}`);
    let ativo = { active: false };
    if (local) ativo = JSON.parse(local);

    return (
        <hot-list-group-item
            class="item hot-list-group__item--action _d-flex _px-5 _py-4"
            {...(ativo.active && { active: true })}
        >
            <div className="infos">
                <span>{trainer.name}</span>
                <span id="age">Idade: {trainer.age}</span>
            </div>
            <hot-dropdown class="dropdown">
                <div
                    slot="button"
                    className="hot-button hot-dropdown__toggle hot-button--tertiary"
                >
                    <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="ellipsis-icon"
                    />
                </div>

                <hot-dropdown-menu-item
                    slot="menu"
                    onClick={() => handleSelection(trainer, setActive)}
                >
                    Selecionar
                </hot-dropdown-menu-item>
                <hot-dropdown-menu-item
                    slot="menu"
                    onClick={() => handleEdit(trainer)}
                >
                    Editar
                </hot-dropdown-menu-item>
                <hot-dropdown-menu-item
                    slot="menu"
                    onClick={() => handleDelete(trainer)}
                >
                    Excluir
                </hot-dropdown-menu-item>
            </hot-dropdown>
        </hot-list-group-item>
    );
}

export default ListGroupItem;
