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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    ); 
}; 

export default Header;