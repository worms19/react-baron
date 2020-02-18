import React, { Component } from 'react';
import './App.css';
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';
import GalleryPhoto from './pages/GalleryPhoto';
import GalleryPhoto2 from './pages/GalleryPhoto2';
import AuthPage from './pages/Auth';
import Events from './pages/Events';
import EventPage from './pages/Event';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import { BrowserRouter as Router, Route,Redirect,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./pages/Contacts";
import YoutubeLinkPage from "./pages/CreationYoutubeLink";
import DisplayYoutubeLink from "./pages/DisplayYoutubeLink";
import SectionNavbars from "./components/Header/Header2";
import SectionNavbars2 from "./components/Header/Header3";

class App extends Component {

  state = {
    token:null,
    userId:null
  };

  login =(token,userId,tokenExpiration) =>{
    this.setState({
      token: token,
      userId: userId,
      tokenExpiration:tokenExpiration
    });
  };

  logout =() =>{
    this.setState({
      token: null,
      userId: null
    });
  };

  render() {
    return (
      <Router>
        <div className="baron">
          <AuthContext.Provider value={{token: this.state.token,userId: this.state.userId, login: this.login, logout: this.logout}}>
          {this.state.token ? <SectionNavbars2/> : <SectionNavbars />}
          <Switch>
          <Route exact path="/react-baron" component={Accueil} />
          <Route exact path="/" component={Accueil} />
          <Route path="/Mp3" component={DisplayYoutubeLink} />
          <Route path="/GalleryPhoto" component={GalleryPhoto2} />
          <Route path="/Events" component={Events} />
          <Route path="/Contact" component={Contact} />
          {!this.state.token && <Route path="/auth" component={AuthPage} />}
          {this.state.token && <Route path="/eventpage" component={EventPage} />}
          {this.state.token && <Route path="/youtubePage" component={YoutubeLinkPage} />}
          {this.state.token && <Redirect path="/auth"  to="/eventpage" exact />}
          {this.state.token && (<Route path="/contactPage" component={Contacts} />)}
          </Switch>
          </AuthContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
