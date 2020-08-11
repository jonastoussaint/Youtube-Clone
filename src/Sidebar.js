import React from 'react';
import SidebarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            {/*Turn the icons into props to must be capitalize */}
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionIcon} title="Subscriptions"/>          
        </div>
    )
}

export default Sidebar
