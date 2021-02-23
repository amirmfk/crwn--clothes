import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link claasName="logo-container" to="/">
            <Logo className="Logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>

        </div>
    </div>
)
export default Header ;