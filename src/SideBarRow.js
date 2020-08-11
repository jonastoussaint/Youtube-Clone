import React from 'react';
import './SidebarRow.css';


//Past the Icons and titles as props
function SideBarRow({ selected, Icon, title }) {
    return (
        /*Backticks allow you to inject javascript here*/
        /*If selected add the following class */
        <div className={`sidebarRow ${selected && 'selected'}`}>
           
            <Icon className="sidebarRow__icon" /> 
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow
