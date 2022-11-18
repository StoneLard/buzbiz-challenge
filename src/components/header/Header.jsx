import React from 'react';
import logo from './acme-1.svg'



const Header = () => {
    return (
        <header>
            <div className="menu--toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <img src={logo} className="logo" alt="" />
            </div>
            <div className="user--icon">
                <p>?</p>
            </div>
        </header>
    );
};

export default Header;