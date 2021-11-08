import React from "react";

import { Treinador } from "./../../modules/Treinador/models/treinador";
import NovoTreinador from "./NovoTreinador";

function EditarTreinador(trainer: Treinador) {
    return <NovoTreinador trainer={trainer} />;
}

export default EditarTreinador;
