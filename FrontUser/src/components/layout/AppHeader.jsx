import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = ({ authenticated, onLogout }) => {
    return (
        <header className="app-header">
                <div className="app-branding">
                    <Link to="/" className="app-title">Fitness App</Link>
                </div>
                <div className="app-options">
                    <nav className="app-nav">
                        {authenticated ? (
                            <ul>
                                <li>
                                    <NavLink to="/profile">Profile</NavLink>
                                </li>
                                <li>
                                    <a onClick={onLogout}>Logout</a>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup">Signup</NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
        </header>
    );
};

export default AppHeader;
