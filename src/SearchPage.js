import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2020/06/shutterstock_1704790183.jpg"
                channel="SpaceX"
                verified
                subs="25M"
                noOfVideos={345}
                description="You Belong Here!!!"
            />
            <hr/>
            <VideoRow />
        </div>
    ); 
}

export default SearchPage
