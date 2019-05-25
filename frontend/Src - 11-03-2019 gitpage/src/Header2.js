 
 import React from 'react'
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 export default class Header2 extends React.Component {

    
    
  
    
     
    render(){

    return   <header class="header-fixed">
    
        <div className="header-limiter">
    
            <h1><a href="#">Company<span>logo</span></a></h1>
    
            <nav>
            <li><Link onClick={this.forceUpdateHandler} exact to="/react-baron">Home</Link></li>
            <li><Link to="/Mp3">Mp3</Link></li>
            <li><Link  to="/GalleryPhoto" >GalleryPhoto</Link></li>
            <li><Link  to="/Events" >Events</Link></li>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
            </nav>
    
        </div>
    
    </header>
    
    
    }
}
 

  