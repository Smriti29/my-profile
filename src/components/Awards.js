import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Email, MailOutline,EmojiEvents } from '@material-ui/icons';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline,Tween } from 'react-gsap'

class Awards extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
  <Helmet>
    <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
    
  </Helmet>
         <Grid container spacing={3} style={{height:'450px',background:'url(/images/background.jpg)'}}>
            <Grid item xs={12} lg={12} md={12} style={{}}>
                <Carousel>
               <Grid item xs={12} lg={12} md={12} style={{}} id="amex">
                  <img src="/images/amex.png" style={{width:'50%', height:'400px', transform:'translateX(50%)'}}></img>
            </Grid>
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="barclays">
                  <img src="/images/barclays.png" style={{width:'50%', height:'400px',transform:'translateX(50%)'}}></img>
            </Grid>
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="wipro">
                  <img src="/images/wipro.png" style={{width:'50%', height:'400px',transform:'translateX(50%)'}}></img>
            </Grid>
        </Carousel>
            </Grid>
            </Grid>
           <Grid container spacing={3} style={{height:'680px'}}>
            <Grid item xs={12} lg={12} md={12} style={{textAlign:'center'}}>
                  <h1 style={{textAlign:'center',fontSize:'2.5em', color:'#003366', height:'0', marginBottom:'5%'}}>Awards</h1>
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
             <ul style={{width:'80%', height:'400px', margin:'auto', padding:'5%', backgroundColor:'azure', border:'1px solid darkgrey', borderRadius:'10px', position:'relative'}}>
                <Controller>
      <Scene duration={500} pin={true}>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1
            }}   
            duration = {10.0}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Received Blue Award and certificate in recognition of the contribution made to the team in American Express</li><br/> 
          </Tween>   
        )}
            </Scene>
             <Scene duration={600} pin={true}>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
              delay: 60
            }}   
            duration = {9}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Received certificate of appreciation in recognition of outstanding contribution to Digital- Barclays UK</li><br/> 
          </Tween>   
        )}
            </Scene>
            <Scene duration={700} pin>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
            }}   
            duration = {8}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Received Delivery Excellence Award from Wipro for carrying out the seamless deliveries in time</li><br/> 
          </Tween>      
        )}
            </Scene>
            <Scene duration={800} pin>
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
            }}   
            duration = {7}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Secured AIR (All India Rank) 74 in the 10th National Science Olympiad, 2008, organized by Science Olympiad Foundation (S.O.F.), India</li><br/> 
          </Tween>      
        )}
            </Scene>
            <Scene duration={900} >
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
            }}   
            duration = {6}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Awarded gold medal in the 10th National Science Olympiad, 2007</li><br/> 
          </Tween>      
        )}
            </Scene>
            <Scene duration={1000} >
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
            }}   
            duration = {5}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Ranked among top 10% of the students in National Standard Exam in Chemistry, 2008-09, organised by Indian Association of Physics Teachers (IAPT)</li><br/> 
          </Tween>      
        )}
            </Scene>
            <Scene duration={1200} >
      {(progress) => (
          <Tween  
          from={{ opacity: 0 , left:'-2400'}}          
            to={{
              left: '0',
              opacity: 1,
            }}   
            duration = {4}   
            totalProgress={progress}
          >
             <li><EmojiEvents style={{fontSize:'xx-large', color:'gold', display:'inline'}} />Received Proficiency award from CBSE for meritorious performance in Std. X</li><br/> 
          </Tween>      
        )}
            </Scene>
</Controller>
               </ul>    
            </Grid>
            </Grid>
         <Grid container spacing={3} style={{background:'url(/images/background.jpg)',height:'200px', marginTop:'20px'}}>
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
  
  export default Awards;
  