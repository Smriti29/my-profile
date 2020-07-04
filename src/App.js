import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js"
import Skills from "./components/Skills.js"
import Awards from "./components/Awards.js"
import Education from "./components/Education.js"
import Experience from "./components/Experience.js"
import Helmet from 'react-helmet';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline,Tween } from 'react-gsap'
import { Build, School, EmojiEvents, CardTravel, GetApp } from '@material-ui/icons';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
<Helmet>
  <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
</Helmet>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppBar position="static">
        <Tabs aria-label="simple tabs example">
        <Link to="/"><img src="/images/logo.png" style={{ height:'min-content', marginLeft:'20px', marginTop:'10px', boxShadow:'3px 3px 10px darkgrey'}} /></Link>
          <Link to="/Skills" style={{color:'white', textDecoration:'none', marginLeft:'20%'}}><Tab label="Skills" icon={<Build/>} className="nav-item" /></Link>
          <Link to="/Work" style={{color:'white', textDecoration:'none'}}><Tab label="Work Experience" icon={<CardTravel/>} className="nav-item" /></Link>
          <Link to="/Education" style={{color:'white', textDecoration:'none'}}><Tab label="Education" icon={<School/>} className="nav-item" /></Link>
          <Link to="/Awards" style={{color:'white', textDecoration:'none'}}><Tab label="Awards" icon={<EmojiEvents/>} className="nav-item"/></Link>
           <a href="Smriti_resume.pdf" style={{color:'white', textDecoration:'none'}} download><Tab label="Download Resume" icon={<GetApp/>} className="nav-item" /></a>
        </Tabs>
      </AppBar>
          </Grid>
        </Grid>
        <Route exact path="/" component={Home} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Awards" component={Awards} />
        <Route path="/Education" component={Education} />
         <Route path="/Work" component={Experience} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
