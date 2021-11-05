import React, { useEffect, useState } from "react";

import "@cosmos/list-group/list-group.css";
import ListGroupItem from "../Listgroup-item/listgroup-item";
import { get } from "./../../api/api";
import { atualizar } from "./../../api/api";
import { deletar } from "./../../api/api";
import { Treinador } from "src/modules/Treinador/models/treinador";

function ListGroup() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        get("/trainers", setTrainers);
        localStorage.setItem(
            `@projeto/active/`,
            JSON.stringify({ active: false })
        );
    }, []);

    function handleSelection(trainer: Treinador, setActive: any) {
        let isActive = localStorage.getItem("@projeto/active/");
        let local = localStorage.getItem(`@projeto/active/${trainer.id}`);

        let algumAtivo = { active: false };
        let ativo = { active: false };
        if (local) ativo = JSON.parse(local);
        if (isActive) algumAtivo = JSON.parse(isActive);

        if (ativo.active === false && algumAtivo.active === false) {
            localStorage.setItem(
                `@projeto/active/`,
                JSON.stringify({ active: true })
            );
            localStorage.setItem(
                `@projeto/active/${trainer.id}`,
                JSON.stringify({ active: true })
            );
            setActive(true);
        } else if (ativo.active === true && algumAtivo.active === true) {
            localStorage.setItem(
                `@projeto/active/`,
                JSON.stringify({ active: false })
            );
            localStorage.setItem(
                `@projeto/active/${trainer.id}`,
                JSON.stringify({ active: false })
            );
            setActive(false);
        }
    }

    function handleEdit(trainer: Treinador) {}

    function handleDelete(trainer: Treinador) {
        //deletar(`/trainers/${trainer.id}`);
    }

    return (
        <hot-list-group>
            {trainers.map((trainer: any) => (
                <ListGroupItem
                    key={trainer.id}
                    trainer={trainer}
                    handleSelection={handleSelection}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </hot-list-group>
    );
}

export default ListGroup;
