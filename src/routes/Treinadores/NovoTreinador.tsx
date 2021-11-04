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

    return (
        <div className="novo-treinador">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header
                    title="Novo treinador"
                    message="Preencha as dados do novo treinador"
                />
            </ContentHeader>

            <div className="teste">
                <ContentBody>
                    <div className="form-treinadores">
                        <TreinadoresForm />
                    </div>
                </ContentBody>
            </div>
        </div>
    );
}

export default NovoTreinador;
