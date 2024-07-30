import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return(
        <div className = "container-navbar">
            <nav className="nav-header">
                <Link className="nav_item1" to="/">
                    <p className="nav_item_text1">Home</p>
                </Link>
                <Link className="nav_item2" to="/tree">
                    <p className="nav_item_text2">Tree</p>
                </Link>
                <Link className="nav_item3" to="/list">
                    <p className="nav_item_text3">List</p>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar;