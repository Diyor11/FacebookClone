import React from 'react';
import Navbar from '../Navbar/Navbar';
import './friends.css';
import { friends } from '../data';

import SettingsIcon from '@material-ui/icons/Settings';

const Friends = () => {
    return (
        <section className='friends'>
            <Navbar />
            <div className='sideTable'>
                <header>
                    <div className='grid'>
                        <span className='request'>
                            <h3>Friends</h3>
                            <h5>Friends request</h5>
                        </span>
                        <span>
                            <SettingsIcon />
                            <a href='#'>See all</a>
                        </span>
                    </div>
                    <p>Not new request</p>
                </header>
                <main>
                    <h3 id='fri-title'>People you may know</h3>
                    <div className='friends-row'>
                        {friends.map((friend, index) => {
                            return(
                                <div className='friend-box' key={index}>
                                    <img src={friend.img} alt='img' />
                                    <div className='contents'>
                                        <p>{friend.name}</p>
                                        <div className='buttons'>
                                            <div className='add'>Add Friend</div>
                                            <div className='remove'>Remove</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </main>
            </div>
            <div className='edit'>
                <i class="fas fa-edit"></i>
            </div>
            <h2 id='center-text'>Select people's names to preview their profile</h2>
        </section>
    )
}

export default Friends
