import React from 'react';

import "@cosmos/list-group/list-group.css";
import ListGroupItem from '../Listgroup-item/listgroup-item';

function ListGroup() {
    return (
        <hot-list-group>
            <ListGroupItem name="Gustavo" age={20} />
            <ListGroupItem name="Cleiton" age={28} active= {true}/>
            <ListGroupItem name="Breno" age={36} />
        </hot-list-group>
    );
}

export default ListGroup;