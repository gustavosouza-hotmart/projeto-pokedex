import React from "react";

import ContentHeader from "../../components/ContentHeader/content-header";
import Header from "../../components/Header/header";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import { useLocation } from "react-router";
import { usePath } from "./../../hooks/usePath";
import TreinadoresForm from "./../../components/Form/treinadores-form";
import ContentBody from "./../../components/ContentBody/content-body";

function NovoTreinador() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);
    const id = new URLSearchParams(path.search).get("id");
    const name = new URLSearchParams(path.search).get("name");

    return (
        <div className="novo-treinador">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                {name ? (
                    <Header
                        title="Editar treinador"
                        message="Edite os dados do treinador"
                    />
                ) : (
                    <Header
                        title="Novo treinador"
                        message="Preencha as dados do novo treinador"
                    />
                )}
            </ContentHeader>

            <div className="teste">
                <ContentBody>
                    <div className="form-treinadores">
                        {name && id ? (
                            <TreinadoresForm id={parseInt(id)} name={name} />
                        ) : (
                            <TreinadoresForm />
                        )}
                    </div>
                </ContentBody>
            </div>
        </div>
    );
}

export default NovoTreinador;
