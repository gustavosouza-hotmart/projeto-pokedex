import React, { useEffect, useState } from "react";

import "@cosmos/list-group/list-group.css";
import ListGroupItem from "../Listgroup-item/listgroup-item";
import { get } from "../../api/trainerapi";
import { deletar } from "../../api/trainerapi";
import { Treinador } from "src/modules/Treinador/models/treinador";
import { useHistory } from "react-router";

function ListGroup() {
    const [trainers, setTrainers] = useState([]);
    const [deletou, setDeletou] = useState(0);
    const [obj, setObj] = useState("");
    const [confirmOption, setConfirmOption] = useState(false);
    const history = useHistory();

    useEffect(() => {
        get("/trainers", setTrainers);
    }, []);

    useEffect(() => {
        get("/trainers", setTrainers);
        if (obj) localStorage.setItem("@projeto/active/", obj);
    }, [deletou, obj, confirmOption]);

    function handleSelection(trainer: Treinador) {
        const local = localStorage.getItem("@projeto/active/");
        let ativo;
        if (local) ativo = JSON.parse(local);

        if (ativo.active[0] === trainer.id) {
            setObj(JSON.stringify({ active: [] }));
        } else {
            setObj(JSON.stringify({ active: [trainer.id] }));
        }
    }

    function handleEdit(trainer: Treinador) {
        history.push(
            `treinadores/novo-treinador/?id=${trainer.id}&name=${trainer.name}`
        );
    }

    function handleDelete(trainer: Treinador) {
        let option = confirm(
            `Tem certeza que deseja apagar o treinador ${trainer.name}?`
        );
        setConfirmOption(option);
        if (option === true) {
            deletar(`/trainers/${trainer.id}`);
            const local = localStorage.getItem("@projeto/active/");
            let ativo;
            if (local) ativo = JSON.parse(local);

            if (ativo.active[0] === trainer.id)
                setObj(JSON.stringify({ active: [] }));
        }
        setDeletou(trainer.id);
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
