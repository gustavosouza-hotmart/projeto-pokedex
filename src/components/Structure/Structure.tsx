import React from 'react';
import StructureMenu from './StructureMenu';
import "@cosmos/structure";
import "@cosmos/content";

function Structure(props : any) {
    return(
        <hot-structure>
            <StructureMenu />

            <hot-content slot="content">
                {props.children}
            </hot-content>
        </hot-structure>
    );
}

export default Structure;