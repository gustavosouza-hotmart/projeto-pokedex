import React, { useEffect, useRef, useState } from "react";
import { Portuguese } from "flatpickr/dist/l10n/pt";
import "@cosmos/date-picker";
import "@cosmos/form/form.css";
import "@cosmos/form/input-default.css";
import "@cosmos/form/input-validate.css";
import "@cosmos/button-group/button-group.css";
import "./treinadores-form.style.scss";
import { Treinador } from "./../../modules/Treinador/models/treinador";
import { useHistory } from "react-router";
import { post } from "./../../api/api";

function TreinadoresForm() {
    const [nome, setNome] = useState("");
    const dataNascimentoRef = useRef<any>(null);
    const [dataNascimento, setDataNascimento] = useState("");
    const history = useHistory();

    useEffect(effectMount, []);

    function effectMount() {
        dataNascimentoRef.current?.setLocale(Portuguese);
        dataNascimentoRef.current?.addEventListener(
            "change",
            handleBirthdateChange
        );
        return () =>
            dataNascimentoRef.current?.removeEventListener(
                "change",
                handleBirthdateChange
            );
    }

    function handleNameChange(e: any) {
        setNome(e.target.value);
    }

    function handleBirthdateChange(e: any) {
        setDataNascimento(e.detail.dateFormatted);
    }

    function onSubmit() {
        let data = dataNascimento.split("/").reverse().join("/");
        const dateToTrainer = new Date(data);
        const trainer = new Treinador(nome, dateToTrainer);
        trainer.age >= 10
            ? post("/trainers", trainer)
            : alert("Idade inválida.");
    }

    return (
        <div className="form-treinadores">
            <div className="hot-form-group hot-form-group--inline input-size">
                <div className="hot-form hot-form--custom name _mr-6">
                    <label className="hot-form__label">Nome</label>
                    <input
                        type="text"
                        className="hot-form__input"
                        value={nome}
                        id="name"
                        onChange={handleNameChange}
                        placeholder="Nome do treinador"
                    />
                </div>

                <div className="hot-form hot-form--custom date _mt-5">
                    <label className="hot-form__label">
                        Data de nascimento
                    </label>
                    <hot-date-picker
                        placeholder="Selecionar data..."
                        ref={dataNascimentoRef}
                        locale="pt-BR"
                    />
                    <span>Idade mínima 10 anos</span>
                </div>
            </div>

            <div className="form-buttons">
                <button
                    className="hot-button hot-button--tertiary _mr-4"
                    onClick={() => {
                        history.push("/treinadores");
                    }}
                >
                    Voltar
                </button>

                <button
                    type="submit"
                    className="hot-button hot-button--primary _mr-4"
                    onClick={onSubmit}
                >
                    Concluir
                </button>
            </div>
        </div>
    );
}

export default TreinadoresForm;
