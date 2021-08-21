import React, {useState} from 'react';
import './navbar.css';
import logo from '../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import men from '../images/men.jpg';

import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/PeopleOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

import AppsIcon from '@material-ui/icons/Apps';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import AddIcon from '@material-ui/icons/Add';


const Navbar = () => {

    const [styles, setStyles] = useState({left:'0', homeColor: '#1877F2', friendColor: '#777' });

    return (
        <nav>
            <div className='form-box'>
                <img src={logo} alt='facebook' />
                <form onSubmit={(e)=> e.preventDefault()}>
                    <SearchIcon className='search'/>
                    <input type='text' placeholder='Search Facebook'/>
                </form>
            </div>
            <div className='nav-links'>
                <ul>{ window.innerWidth > 700 ? <>
                    <Link to='/'>
                    <li onClick={() => {
                        setStyles({left:'0', homeColor: '#1877F2', friendColor: '#777' })
                    }}>
                        <a> <HomeIcon style={{color: styles.homeColor}} /> </a>
                    </li>
                    </Link>
                    <Link to='/friends'>
                    <li onClick={() => {
                        setStyles({left:'118px', homeColor: '#777', friendColor: '#1877f2' })
                    }}>
                        <a href='#'><GroupIcon style={{color: styles.friendColor}}/></a>
                    </li>
                    </Link>
                    <li>
                        <a href='#'><LiveTvIcon /></a>
                    </li>
                    <span className='underline' style={{left: styles.left}}></span>
                    <li>
                        <a href='#'><GroupIcon /></a>
                    </li> </> : ''}
                    <Link to='bookmarks'>
                        {window.innerWidth > 1100 ?
                            <li><a href='#'><AspectRatioIcon /></a></li>:
                            <a><MenuIcon className='route'/></a>
                        }
                    </Link>
                </ul>
            </div>
            <div className='nav-info'>
                <div className='prof'>
                    <img src={men} alt='men' />
                    <h5>David</h5>
                </div>
                <ul>
                    <li>{window.innerWidth > 900 ? <AppsIcon /> : <AddIcon /> }</li>
                    <li><OfflineBoltIcon /></li>
                    <li><NotificationsIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
