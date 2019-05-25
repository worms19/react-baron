import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import GalleryPhoto from './GalleryPhoto'
import Contact from './Contact'
import Mp3 from './Mp3'
import AfficheCd from './AfficheCd'
import EncartBlanc from './EncartBlanc';
import Events from './Events';
import PreLoader from './PreLoader';
import PageAccueil from './PageAccueil';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends Component {



  render() {

    const divStyle={
        backgroundImage: 'url(img/bg-img/a13.jpg)',
			 };
			 const divStyle2={
        backgroundImage: 'url(img/bg-img/a14.jpg)',
			 };
			 

    return (
<Router >

	<div className="baron" className="slide-img bg-img"   style={divStyle} >


		
		<PreLoader />
		<Header/>
		<br />    
		<Route exact path="/react-baron"   component={PageAccueil} />
		<Route path="/Mp3" component={Mp3} />
		<Route   path="/GalleryPhoto" component={GalleryPhoto} />	
		<Route   path="/Events" component={Events} />	
		
{/* <PageAccueil /> */}

		<Contact 
		image = {divStyle2}/>


	</div>	
	</Router>
     );
  }
}

export default App;
