import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <Link className="link" to="/">
                <h1>NoriaTech</h1>
            </Link>
            <ul className="nav-links">
                <Link className="link" to="/recipes">
                    <li className="nav-link">Recipes</li>
                </Link>
                <Link className="link" to="/blog">
                    <li className="nav-link">Blog</li>
                </Link>
                <Link className="link" to="/about">
                    <li className="nav-link">About Us</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;