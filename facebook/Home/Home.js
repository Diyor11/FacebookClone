import React from 'react';
import Navbar from '../Navbar/Navbar';
import RightSide from '../RightSide/RightSide';
import SideBar from '../SideBar/SideBar';
import Feed from './Feed';

const Profil = () => {

    return (
        <section className='home'>
            <Navbar />
            {window.innerWidth > 1100 ? <SideBar /> : ''}
            {window.innerWidth > 900 ? <RightSide /> : ''}
            <Feed />
        </section>
    )
}

export default Profil
