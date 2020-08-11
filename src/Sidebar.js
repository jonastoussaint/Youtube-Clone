import React from 'react';
import SidebarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            {/*Turn the icons into props to must be capitalize */}
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionIcon} title="Subscriptions"/>   
            <hr />
                <SidebarRow Icon={VideoLibraryIcon} title="Library"/>   
                <SidebarRow Icon={HistoryIcon} title="History"/>   
                <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>   
                <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>   
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>   
                <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>   
            <hr />
        </div>
    )
}

export default Sidebar
