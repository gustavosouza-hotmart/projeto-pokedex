import React from 'react';
import { useLocation } from 'react-router';
import { usePath } from './../../hooks/usePath';

function Todos() {
    const path = useLocation();

    return(
        <h1>Teste</h1>
        // <Breadcrumb items={breadcrumbItems} />
    );
    
    /* 
    return(
        <>
            <h1>Olá mundo! (Todos)</h1>
        </>
        
    ); */
}

export default Todos;