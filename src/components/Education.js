import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Email, MailOutline, School } from '@material-ui/icons';

class Education extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
  <Helmet>
    <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
    
  </Helmet>
         <Grid container spacing={3} style={{height:'50px', marginBottom:'20px'}}>
            <Grid item xs={12} lg={12} md={12} style={{textAlign:'center'}}>
                <School style={{color:'#003366', fontSize:'xxx-large', transform:'translateY(10px)'}}/><h1 style={{textAlign:'center',fontSize:'2.5em', color:'#003366', marginBottom:'5%', display:'inline'}}>Education</h1>
            </Grid>
            </Grid>
            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', background:'linear-gradient(rgba(256,255,255,0.7), rgba(255,255,255,0.9)),url(/images/nitk.png)', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/nitk_logo.png" />National Institute of Technology Karnataka, Surathkal</li>
                   <p style={{fontSize:'1.5em', color:'#003366', marginLeft:'95px'}}>Bachelor of Technology</p>
                   <p style={{fontSize:'1.2em', color:'#003366', marginLeft:'95px', marginTop:'-15px'}}><i>(in Information Technology)</i></p>
                   <p style={{fontSize:'1.2em', color:'#003366', marginLeft:'95px'}}>Class of 2014</p>
                   <p style={{fontSize:'1.2em', color:'#003366', marginLeft:'95px', fontWeight:'bold'}}>CGPA : 7.72</p>
                   <ol style={{marginTop:'20px', marginLeft:'50px'}}>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}> Subjects :</span></li>                  
                       <div>
                         <p>Data Structure and Algorithm</p>
                         <p>Database System</p>
                         <p>Operating System</p>
                         <p>Internet Technologies and Application</p>
                         <p>Information Security</p>
                         <p>Artificial Intelligence</p>
                         <p>Web Services</p>
                         <p>Computer Networks</p>
                       </div>
                   </ol>
                </ul>
               </div>
            </Grid>
            </Grid>
            
            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', background:'linear-gradient(rgba(256,255,255,0.7), rgba(255,255,255,0.9)),url(/images/kv.png)', backgroundSize:'cover', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/kv_logo.png" />KV AFS, Mumbai, India</li>
                   <p style={{fontSize:'1.5em', color:'#003366', marginLeft:'95px'}}>Std. XII (CBSE)</p>
                   <p style={{fontSize:'1.2em', color:'#003366', marginLeft:'95px',fontWeight:'bold'}}>93.4%</p>
                   <p style={{fontSize:'1.5em', color:'#003366', marginLeft:'95px'}}>Std. X (CBSE)</p>
                   <p style={{fontSize:'1.2em', color:'#003366', marginLeft:'95px', fontWeight:'bold'}}>95.6%</p>
                </ul>
               </div>
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
  
  export default Education;
  