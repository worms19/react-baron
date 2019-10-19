import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props =>(
    <AuthContext.Consumer>
        {(context) => {
            return (
                <header className="main-navigation">
                    <div className="main_navigation__logo">
                        <h1> The Navbar</h1>
                    </div>
                    <nav className="main-navigation__items">
                        <ul>
                            {!context.token &&(<li><NavLink to="/auth">Authentificate</NavLink></li> )}
                            <li><NavLink to="/eventpage">Events</NavLink></li>
                            {context.token && (
                                <React.Fragment>

                            <li><NavLink to="/contactPage">Bookings</NavLink></li>
                            <li>
                                <button onClick={context.logout}>Logout</button>
                            </li>
                                </React.Fragment>
                                    )}
                        </ul>
                    </nav>
                </header>
            );
        }}
    </AuthContext.Consumer>

);

export default mainNavigation;