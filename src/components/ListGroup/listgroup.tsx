import React, { useEffect, useState } from "react";

import "@cosmos/list-group/list-group.css";
import ListGroupItem from "../Listgroup-item/listgroup-item";
import { get } from "../../api/trainerapi";
import { deletar } from "../../api/trainerapi";
import { Treinador } from "src/modules/Treinador/models/treinador";
import { useHistory } from "react-router";
import Modal from "./../Modal/modal";

function ListGroup() {
    const [trainers, setTrainers] = useState([]);
    const [deletingTrainer, setdeletingTrainer] = useState<any>();
    const [obj, setObj] = useState("");
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    useEffect(() => {
        get("/trainers", setTrainers);
    }, []);

    useEffect(() => {
        get("/trainers", setTrainers);
        if (obj) localStorage.setItem("@projeto/active/", obj);
    }, [trainers]);

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
        setdeletingTrainer(trainer);
        setShowModal(true);
    }

    function onSubmitModal(trainer: Treinador) {
        deletar(`/trainers/${trainer.id}`);
        const local = localStorage.getItem("@projeto/active/");
        let ativo;
        if (local) ativo = JSON.parse(local);

        if (ativo.active[0] === trainer.id)
            setObj(JSON.stringify({ active: [] }));
    }

    return (
        <>
            <Modal
                show={showModal}
                onSubmitModal={() => {
                    onSubmitModal(deletingTrainer);
                }}
                onClose={() => setShowModal(false)}
            />
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
        </>
    );
}

export default ListGroup;
