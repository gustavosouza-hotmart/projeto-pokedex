import React from 'react';
import Breadcrumb from './../components/Breadcrumb/breadcrumb';
import { useLocation } from 'react-router';
import { usePath } from './../hooks/usePath';

export function Treinadores() {

    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return(
        <Breadcrumb items={breadcrumbItems} />
    );
}

export default Treinadores;