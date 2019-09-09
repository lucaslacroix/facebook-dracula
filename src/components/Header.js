import React from 'react';

import './Header.css'

import logo from '../assets/logo.png';

function Header () {
    return (
        <header>
            <div className="content">
                <img src={logo}/>
            </div>
        </header>
    ) 
}

export default Header;