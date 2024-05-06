import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = ({ authenticated, onLogout }) => {
    const [state, setState] = useState() 

    useEffect(() => {
        setState()
    }, [])
    
    return (
        <header className="app-header">
            <div className="container">
                <div className="app-branding">
                    <Link to="/" className="app-title">Fitness App</Link>
                </div>
                <div className="app-options">
                    <nav className="app-nav">
                        {authenticated ? (
                            <ul>
                                <li>
                                    <a className='logout' onClick={onLogout}>Logout</a>
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
            </div>
        </header>
    );
};

export default AppHeader;
