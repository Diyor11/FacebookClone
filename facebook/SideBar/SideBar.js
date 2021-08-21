import React from 'react'
import './sidebar.css'
import men from '../images/men.jpg';
import english from '../images/english.jpg';

import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='side-row'>
                <div className='profil side-box'>
                    <img src={men} alt='men' />
                    <h4>David Jordan</h4>
                </div>
                <div className='side-box'>
                    <GroupIcon />
                    <h4>Find Friends</h4>
                </div>
                <div className='side-box'>
                    <GroupAddIcon />
                    <h4>Groups</h4>
                </div>
                <div className='side-box'>
                    <LiveTvIcon />
                    <h4>Wath</h4>
                </div>
                <div className='side-box'>
                    <RestoreIcon />
                    <h4>Memories</h4>
                </div>
                <div className='side-box'>
                    <BookmarkIcon />
                    <h4>Saved</h4>
                </div>
                <div className='side-box'>
                    <FlagIcon />
                    <h4>Pages</h4>
                </div>
                <div className='side-box'>
                    <LocalActivityIcon />
                    <h4>Events</h4>
                </div>
                <div className='side-box'>
                    <LocalMallIcon />
                    <h4>Jobs</h4>
                </div>
                <div className='side-box see-more'>
                    <ExpandMoreIcon />
                    <h4>see more</h4>
                </div>
            </div>
            <div className='short-cuts'>
                <div className='title'>
                    <h3>Your shortcuts</h3>
                    <h5>Edit</h5>
                </div>
                <div className='side-box english'>
                    <img src={english} alt='eng' />
                    <h4>English learning group</h4>
                </div>
            </div>

        </div>
    )
}

export default SideBar;
