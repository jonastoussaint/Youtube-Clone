import React from 'react';
import './SideBarRow.css';


//Past the Icons and titles as props
function SideBarRow({ Icon, title }) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow__icons"/> 
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow
