import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Email, MailOutline } from '@material-ui/icons';

class Skills extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
  <Helmet>
    <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
    
  </Helmet>
         <Grid container spacing={3} style={{height:'350px',background:'url(/images/background.jpg)'}}>
            <Grid item xs={12} lg={12} md={12} style={{}}>
                <Carousel>
               <Grid item xs={12} lg={12} md={12} style={{}} id="react">
                  <img src="/images/react.png" style={{width:'50%', height:'300px', transform:'translateX(50%)'}}></img>
            </Grid>
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="angular">
                  <img src="/images/angular.png" style={{width:'50%', height:'300px',transform:'translateX(50%)'}}></img>
            </Grid>
            <Grid item xs={12} lg={12} md={12} style={{position:'relative'}} id="htmlcssjs">
                  <img src="/images/htmlcssjs.png" style={{width:'50%', height:'300px',transform:'translateX(50%)'}}></img>
            </Grid>
            <Grid item xs={12} lg={12} md={12} style={{}} id="jquery">
                  <img src="/images/jquery.png" style={{width:'50%', height:'300px',transform:'translateX(50%)'}}></img>
            </Grid>
        </Carousel>
            </Grid>
            </Grid>
            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'14%', paddingTop:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%',border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>HTML</Typography>
        <Rating
          name="simple-controlled"
          value={3.5}
          size='large'
        />
            </Grid>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%', border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>CSS</Typography>
        <Rating
          name="simple-controlled"
          value={3.5}
          size='large'
        />
            </Grid>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%', border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>JavaScript</Typography>
        <Rating
          name="simple-controlled"
          value={3}
          size='large'
        />
            </Grid>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%', border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>ReactJs</Typography>
        <Rating
          name="simple-controlled"
          value={3}
          size='large'
        />
            </Grid>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%', border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>AngularJs</Typography>
        <Rating
          name="simple-controlled"
          value={2.5}
          size='large'
        />
            </Grid>
            <Grid container item xs={12} lg={3} md={3} spacing={2} style={{width:'90%', height:'50%',margin:'5px', padding:'5%', border:'10px solid lightgrey'}}>
                <Typography component="legend" style={{textAlign:'center',fontSize:'1.5em', color:'#003366'}}>Jquery</Typography>
        <Rating
          name="simple-controlled"
          value={2.5}
          size='large'
        />
            </Grid>
            </Grid>
             <Grid container spacing={3} style={{height:'450px'}}>
            <Grid item xs={12} lg={12} md={12} style={{textAlign:'center'}}>
                  <h1 style={{textAlign:'center',fontSize:'2.5em', color:'#003366', marginBottom:'5%'}}>Other Skills and Tools</h1>
                  <span class="skill" style={{fontSize:'2.5em', color:'orange', fontWeight:'bold'}}>C++</span>
                  <span class="skill" style={{fontSize:'4.5em', color:'#18B1CC', fontWeight:'bold'}}>C</span>
                  <span class="skill" style={{fontSize:'3em', color:'gold', fontWeight:'bold'}}>Java</span>
                  <span class="skill" style={{fontSize:'4em', color:'green', fontWeight:'bold'}}>SQL</span>
                  <span class="skill" style={{fontSize:'4.5em', color:'coral', fontWeight:'bold'}}>Bootstrap</span>
                  <span class="skill" style={{fontSize:'4em', color:'crimson', fontWeight:'bold',display:'inline-block',transform:' rotate(90deg)'}}>JIRA</span><br/>
                  <span class="skill" style={{fontSize:'2.5em', color:'purple', fontWeight:'bold',display:'inline-block',transform:' rotate(90deg)', marginTop:'2%'}}>Jenkins</span>
                   <span class="skill" style={{fontSize:'3em', color:'teal', fontWeight:'bold'}}>Sketch</span>
                    <span class="skill" style={{fontSize:'1.5em', color:'brown', fontWeight:'bold'}}>Gulp</span>
                  <span class="skill" style={{fontSize:'2em', color:'turquoise', fontWeight:'bold'}}>SASS</span>
                  <span class="skill" style={{fontSize:'3em', color:'magenta', fontWeight:'bold'}}>GIT</span>
                  <span class="skill" style={{fontSize:'2.5em', color:'lime', fontWeight:'bold'}}>Jasper BI</span>
                  <span class="skill" style={{fontSize:'1.5em', color:'maroon', fontWeight:'bold'}}>Tableau</span><br/>
                  <span class="skill" style={{fontSize:'2em', color:'hotpink', fontWeight:'bold'}}>Django Rest Framework</span>
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
  
  export default Skills;
  