import React from 'react';
import Breadcrumb from './../components/Breadcrumb/breadcrumb';
import { useLocation } from 'react-router';
import { usePath } from './../hooks/usePath';
import ContentHeader from './../components/ContentHeader/content-header';
import Header from '../components/Header/header';

export function Treinadores() {

    const path = useLocation();
    const breadcrumbItems = usePath(path.pathname);

    return(
        <div className="treinadores">
            <Breadcrumb items={breadcrumbItems} />
            
            <ContentHeader>
                <Header />
            </ContentHeader>
            
        </div>
    );
}

export default Treinadores;