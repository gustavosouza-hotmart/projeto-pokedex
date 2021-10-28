import React from 'react';
import { useLocation } from 'react-router';
import { usePath } from './../../hooks/usePath';
import Breadcrumb from './../../components/Breadcrumb/breadcrumb';

function Vistos() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    console.log(breadcrumbItems);
    

    return (
        <Breadcrumb items={breadcrumbItems} />
    );
}

export default Vistos;