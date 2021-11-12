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
import { atualizar, post } from "../../api/trainerapi";

interface TreinadoresFormProps {
    id?: number;
    name?: string;
}

function TreinadoresForm({ id, name }: TreinadoresFormProps) {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [nameMessage, setNameMessage] = useState("Nome do treinador");
    const [dateMessage, setDateMessage] = useState("Idade mínima 10 anos");
    const [nameError, setNameError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const dataNascimentoRef = useRef<any>(null);
    const history = useHistory();

    useEffect(effectMount, []);

    useEffect(() => {}, [nameError, dateError]);

    function effectMount() {
        if (name) {
            setNome(name);
        }
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

        if (trainer.name != "" && trainer.age >= 10) {
            setNameMessage("Nome do treinador");
            setNameError(false);

            setDateMessage("Idade mínima 10 anos");
            setDateError(false);

            if (name) {
                atualizar(`/trainers/${id}`, trainer);
                history.push("/treinadores");
            } else {
                post("/trainers", trainer);
            }

            setNome("");
        } else {
            if (trainer.name === "") {
                setNameMessage("Nome não pode estar vazio");
                setNameError(true);
            } else {
                setNameError(false);
            }

            if (trainer && !trainer.age) {
                setDateMessage("Idade inválida!");
                setDateError(true);
            } else {
                setDateError(false);
            }
        }
    }

    return (
        <div className="form-treinadores">
            <div className="hot-form-group hot-form-group--inline input-size">
                <div className="hot-form hot-form--custom name _mr-6">
                    <label
                        className="hot-form__label"
                        {...(nameError && {
                            className: "hot-form__label erro _mt-5",
                        })}
                    >
                        Nome
                    </label>
                    <input
                        required
                        type="text"
                        className="hot-form__input"
                        {...(nameError && {
                            className: "hot-form__input erro",
                        })}
                        value={nome}
                        id="name"
                        onChange={handleNameChange}
                        placeholder="Nome do treinador"
                    />
                    {nameError ? (
                        <span className="erro _ml-2">
                            Nome não pode estar vazio.
                        </span>
                    ) : (
                        <span></span>
                    )}
                </div>

                <div className="hot-form hot-form--custom date _mt-5">
                    <label
                        className="hot-form__label"
                        {...(dateError && {
                            className: "hot-form__label erro",
                        })}
                    >
                        Data de nascimento
                    </label>
                    <hot-date-picker
                        placeholder="Selecionar data..."
                        ref={dataNascimentoRef}
                        locale="pt-BR"
                    />
                    <span
                        className="_ml-2"
                        {...(dateError && { className: "erro _ml-2" })}
                    >
                        {dateMessage}
                    </span>
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
