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
            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="We are Software Engineers"
            timestamp="59 seconds ago"
            channel="SpaceX"
            title="Starship 150M Hop Test"
            image="https://scx2.b-cdn.net/gfx/news/hires/2020/oncestarship.jpg"
            />

        </div>
    ); 
}

export default SearchPage
