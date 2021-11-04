import React from 'react';
import { useLocation } from 'react-router';
import { usePath } from './../../hooks/usePath';
import Breadcrumb from './../../components/Breadcrumb/breadcrumb';
import ContentHeader from '../../components/ContentHeader/content-header';
import Header from '../../components/Header/header';

function Vistos() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);
    

    return (
        <div className="vistos">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header title="Pokémons Vistos" message="Lista com todos os pokémos que você já viu"/>
            </ContentHeader>
        </div>
    );
}

export default Vistos;