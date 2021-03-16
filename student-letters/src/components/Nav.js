import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className ="Navbar-container">
            <div className="Navbar">,
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/letters"><h3>Letters</h3></Link>
            </div>
            
        </div>
    );
}

export default Nav;