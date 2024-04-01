import React from 'react';
import './style/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <span className='titel'>
            <Link to={"/"}> <h1 className='h1Ti'>MY BLOG</h1></Link>
            </span>
            <nav className='nav'>
                <ul className="menu">
                    <li className='li'><Link to={"/"}>Home</Link></li>
                    <li className='li'><Link to={"/About"}>About</Link></li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;