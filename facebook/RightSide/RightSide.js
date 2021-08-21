import React from 'react';
import './rightside.css';
import sponser1 from '../images/sponser1.jpg';
import sponser2 from '../images/sponser2.jpg';
import girl1 from '../images/girl1.jpg';
import girl2 from '../images/girl2.jpg';
import girl3 from '../images/girl3.jpg';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

const RightSide = () => {
    return (
        <div className='right-side'>
            <div className='title'>
                <h3>Sponsored</h3>
            </div>
            <div className='sponsers'>
                <div className='sponser-box'>
                    <img src={sponser2} alt='sponser1'/>
                    <h5>Join now for free<br /> <span>https://marketone.com</span></h5>
                </div>
                <div className='sponser-box'>
                    <img src={sponser1} alt='sponser2'/>
                    <h5>Chocoltella<br /><span>t.me/chocotella.com</span></h5>
                </div>
            </div>
            <div className='contacts'>
                <div className='contact-nav'>
                    <h3>Contacts</h3>
                    <div className='icons'>
                        <VideoCallIcon />
                        <SearchIcon />
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className='suggest'>
                        <div className='suggest-row'>
                            <img src={girl1} alt='girl1' />
                            <h4>Teni Mari</h4>
                        </div>
                        <div className='suggest-row'>
                            <img src={girl2} alt='girl1' />
                            <h4>Salliy Li</h4>
                        </div>
                        <div className='suggest-row'>
                            <img src={girl3} alt='girl1' />
                            <h4>Baby Janie</h4>
                        </div>
                    </div>
            </div>
            <div className='right-footer'>
                <div className='title'>
                    <h2>Group conversation</h2>
                </div>
                <div className='plus'>
                    <AddIcon />
                    <h3>Create new group</h3>
                </div>
            </div>

        </div>
    )
}

export default RightSide
