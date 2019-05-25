 
 import React from 'react'
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 export default class Header extends React.Component {

    

  
    
        forceUpdateHandler(){
         
        this.forceUpdate();
      }

    render(){

    return    <header className="header-area" >
        {/* <!-- Navbar Area --> */}
        <div className="oneMusic-main-menu" >
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    {/* <!-- Menu --> */}
                    <nav className="classy-navbar justify-content-between" id="oneMusicNav">
    
                        {/* <!-- Nav brand --> */}
                        <a href="" className="nav-brand"><img src="img/core-img/logobaronpetit.png" alt="" /></a>
    
                        {/* <!-- Navbar Toggler --> */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>
    
                        {/* <!-- Menu --> */}
                        <div className="classy-menu">
    
                            {/* <!-- Close Button --> */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
    
                            {/* <!-- Nav Start --> */}
                            <div className="classynav">
                                <ul>
                                    <li><Link onClick={this.forceUpdateHandler} exact to="/react-baron">Home</Link></li>
                                    <li><Link to="/Mp3">Mp3</Link></li>
                                    
                                    <li><Link  to="/GalleryPhoto" >GalleryPhoto</Link></li>
                                    <li><Link  to="/Events" >Events</Link></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Albums</a></li>
                                            <li><a href="#">Events</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Elements</a></li>
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="">Events</a></li>
                                    
                                    </ul>
    
                                {/* <!-- Login/Register & Cart Button --> */}
                                <div className="login-register-cart-button d-flex align-items-center">
                                    {/* <!-- Login/Register --> */}
                                    <div className="login-register-btn mr-50">
                                        <a href="" id="loginBtn">Login / Register</a>
                                    </div>
    
                                    {/* <!-- Cart Button --> */}
                                    <div className="cart-btn">
                                        <p><span className="icon-shopping-cart"></span> <span className="quantity">1</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Nav End --> */}
    
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    }
}
 

  