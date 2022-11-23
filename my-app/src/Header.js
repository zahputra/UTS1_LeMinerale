import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {

    const navStyle = {
        color: 'white'
    };

    return (
        
        <nav>
            <h3>Kelompok Le Minerale PABW</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/xml'>
                    <li>XML</li>
                </Link>
                <Link style={navStyle} to='/csvp'>
                    <li>CSV</li>
                </Link>
                <Link style={navStyle} to='/json'>
                    <li>Json</li>
                </Link>


            </ul>
        </nav>
    );
}

export default Header;