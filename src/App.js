import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {

  return (
    <div class="container">
      <div class="navbar">
        {/* <h2>John Gibbons</h2> */}
        <NavLink className="navbutton" activeClassName="clickedbutton" exact to="/">Home</NavLink>
        <NavLink className="navbutton" activeClassName="clickedbutton" to="/about">About</NavLink>
        <NavLink className="navbutton" activeClassName="clickedbutton" to="/projects">Projects</NavLink>
        <NavLink className="navbutton" activeClassName="clickedbutton" to="/skills">Skills</NavLink>
        <NavLink className="navbutton" activeClassName="clickedbutton" to="/contact">Contact</NavLink>


      </div>

      <Route exact path='/' component={Intro} /> 
      <Route path='/about' component={About} /> 
      <Route path='/contact' component={Contact} /> 
      <Route path='/projects' component={Projects} /> 
      <Route path='/skills' component={Skills} />
    </div>
  );
}


export default withRouter(App);
