import React from 'react';
import { useLocation } from 'react-router';
import ContentHeader from '../../components/ContentHeader/content-header';
import Breadcrumb from './../../components/Breadcrumb/breadcrumb';
import Header from '../../components/Header/header';
import { usePath } from './../../hooks/usePath';

function Todos() {
    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return(
        <div className="todos">
            <Breadcrumb items={breadcrumbItems} />

            <ContentHeader>
                <Header title="Todos Pokémons" message="Lista com todos os pokémos existentes"/>
            </ContentHeader>
        </div>
    );
}

export default Todos;