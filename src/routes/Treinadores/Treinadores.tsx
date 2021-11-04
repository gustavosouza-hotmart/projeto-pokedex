import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

import "@cosmos/button/button.css";
import "@cosmos/button/variations/primary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";

import { usePath } from "../../hooks/usePath";
import ListGroup from "../../components/ListGroup/listgroup";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import ContentHeader from "../../components/ContentHeader/content-header";
import Header from "../../components/Header/header";
import ContentBody from "./../../components/ContentBody/content-body";
import "./treinadores.style.scss";

export function Treinadores() {
    const history = useHistory();
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return (
        <div className="treinadores">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header
                    title={"Treinadores"}
                    message={
                        "Selecione, edite, remova ou adicione novos treinadores aqui"
                    }
                />
            </ContentHeader>

            <ContentBody>
                <div className="button-align _mb-2">
                    <button
                        slot="button"
                        className="hot-button hot-button--primary button"
                        onClick={() => {
                            history.push("/treinadores/novo-treinador");
                        }}
                    >
                        <div>
                            <FontAwesomeIcon icon={faPlus} />
                            <span className="_mx-2">Novo treinador</span>
                        </div>
                    </button>
                </div>

                <div className="align">
                    <ListGroup />
                </div>
            </ContentBody>
        </div>
    );
}

export default Treinadores;
