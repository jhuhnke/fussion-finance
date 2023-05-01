import React from 'react'; 
import { Link } from 'react-router-dom'; 
// import logo from './logo.svg'; 
import './Header.css'; 

const Header: React.FC = () => {
    return (
        <header>
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    ); 
}; 

export default Header;