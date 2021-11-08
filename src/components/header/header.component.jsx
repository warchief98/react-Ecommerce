import React from 'react';

import './header.style.scss';

import { ReactComponent as Logo } from '../../asset/crown.svg';

import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to="/sign-in-sign-up" className="option">
                    Sign in / sign up
                </Link>

                <Link to="/shop" className="option">
                    Shop
                </Link>

                <Link to="/contact" className="option">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Header;