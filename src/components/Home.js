import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Email, MailOutline } from '@material-ui/icons';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline,Tween } from 'react-gsap'

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
  <Helmet>
    <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
    
  </Helmet>
          <Grid container spacing={3} style={{background:'url(/images/background.jpg)',height:'450px', marginTop:'-12px', backgroundSize:'cover'}}>
            <Grid item xs={12} lg={6} md={6}>
              <img alt="Smriti" src="/images/me.png" id="me" style={{marginLeft:'40%', marginTop:'10%', borderRadius:'120px'}} />
              <div style={{color:'white', textAlign:'center'}}>
                <h1>Smriti Prasad</h1>
                 <h2>UI/UX Developer and Designer</h2>
                </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
                   <p style={{textAlign:'left',color:'white', padding:'10%', lineHeight:'2',fontSize:'1.5em'}}><i>"Multi-faceted UI developer with 5+ years of experience in software development for large-scale firms. Motivated and hardworking, with an ability to meet deadlines and quickly resolve issues. Skilled at team collaboration while working independently in remote environments."</i></p>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{height:'100px'}}>
            <Grid item xs={12} lg={12} md={12}>
                   <h1 style={{textAlign:'center',fontSize:'2.5em', color:'#003366'}}>Why Should you hire me ??</h1>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{wdith:'100%', height:'490px', marginTop:'5%'}} class="sticky">
          <Controller>
      <Scene duration={1000} pin>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-400px'}}          
            to={{
              left: '0',
              opacity: 1
            }}   
            duration = {1500}    
            ease="Strong.easeOut"
            totalProgress={progress}
          >
            <Grid item xs={12} lg={12} md={12} style={{position:"relative"}} id="bubbles">
                  <img src="/images/bubbles.jpg"></img>
            </Grid>
          </Tween>   
        )}
            </Scene>
             <Scene duration={1500} pin>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , right:'-400px'}}          
            to={{
              right: '0',
              opacity: 1
            }}   
            duration = {500}    
            ease="Strong.easeOut"
            totalProgress={progress}
          >
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="blossom">
                  <img src="/images/blossom.jpg" style={{marginLeft:'53%', marginTop:'-55%'}}></img>
            </Grid>
          </Tween>   
           
        )}
            </Scene>
             <Scene duration={1800} pin>
      {(progress) => (
          <Tween  
          from={{ opacity: 0.5, top:'300px' }}          
            to={{
              opacity: 1, top:'0'
            }}   
            duration = {9500}    
            ease="Strong.easeOut"
            totalProgress={progress}
          >
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="buttercup">
                  <img src="/images/buttercup.png" style={{marginLeft:'20%', marginTop:'-16%'}}></img>
            </Grid>
          </Tween>    
        )}
            </Scene>
            </Controller>
            
          </Grid>
          <Grid container spacing={3} style={{background:'url(/images/background.jpg)',height:'200px', position:'relative'}}>
            <Grid item xs={12} lg={12} md={12} style={{textAlign:'center', color:'white'}}>
                  <MailOutline style={{fontSize:'xxx-large',transform: 'translateY(10px)'}}/> <span style={{textAlign:'center',fontSize:'2em', color:'white', marginTop:'-2px'}}>Contact</span>
                  <p style={{textAlign:'center',fontSize:'1.5em', color:'white'}}><a href = "mailto: smritip29@gmail.com" style={{color:'white'}}> smritip29@gmail.com</a></p>
                  <p style={{textAlign:'center',fontSize:'1.5em', color:'white'}}><a href="https://www.linkedin.com/in/smriti-prasad-2941677b/"  style={{color:'white'}}>LinkedIn</a><span> | </span><a href="https://github.com/smriti29" style={{color:'white'}}>Github</a> | Contact no. : +91-8088101366</p>
            </Grid>
            </Grid>
        </div>
      )
    }
  }
  
  export default Home;
  