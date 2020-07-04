import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Email, MailOutline, CardTravel } from '@material-ui/icons';

class Experience extends React.Component {
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
                <CardTravel style={{color:'#003366', fontSize:'xxx-large', transform:'translateY(10px)'}}/><h1 style={{textAlign:'center',fontSize:'2.5em', color:'#003366', marginBottom:'5%', display:'inline'}}>Work Experience</h1>
            </Grid>
            </Grid>
            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/amex_logo.png" />American Express <span style={{fontSize:'0.6em'}}>(September 2019 to  present) : UI/UX developer and designer</span></li>
                  <h3 style={{fontSize:'1.5em', color:'#003366', display:'inline', marginLeft:'85px'}}>Team - AI Labs</h3>
                   <ol style={{marginTop:'20px'}}>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>1. Project - Financial statement analyzer</span><span> - an application that allows the users to upload, search and compare financial statements of client companies.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Reactjs, Javascript,HTML,CSS, Django rest framework</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Requirement Gathering – Meeting with the stakeholders to gather requirements and specifications.</li>
                         <li class="role">•  Designing the application – Used the designing tool Sketch integrated with AmEx design Language components to create designs of all the views.</li>
                         <li class="role">•  Application Development – Using Django rest framework</li>
                       </ul><br/><br/>
                        <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>2. Project - Package tracking portal </span><span> -a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Reactjs, Javascript,HTML,CSS, Django rest framework</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Requirement Gathering – Meeting with the stakeholders to gather requirements and specifications.</li>
                         <li class="role">•  Designing the application – Used the designing tool Sketch integrated with AmEx design Language components to create designs of all the views.</li>
                         <li class="role">•  Application Development – Using Django rest framework</li>
                       </ul><br/><br/>
                          <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>3. Project - Package tracking portal </span><span> - a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Reactjs, Javascript,HTML,CSS, Django rest framework</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Requirement Gathering – Meeting with the stakeholders to gather requirements and specifications.</li>
                         <li class="role">•  Designing the application – Used the designing tool Sketch integrated with AmEx design Language components to create designs of all the views.</li>
                         <li class="role">•  Application Development – Using Django rest framework</li>
                       </ul><br/><br/>

                        <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>4. Project - xLearn </span><span> – a web portal created using django rest framework to help the AmEx employees to find a project they can do in addition to their main project if they have bandwidth. There are three different roles: admin, project submitter, Nominees.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Reactjs, Javascript,HTML,CSS, Django rest framework</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Requirement Gathering – Meeting with the stakeholders to gather requirements and specifications.</li>
                         <li class="role">•  Designing the application – Used the designing tool Sketch integrated with AmEx design Language components to create designs of all the views.</li>
                         <li class="role">•  Application Development – Using Django rest framework</li>
                       </ul><br/>

                        <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>Project - AI Marketplace </span><span> – an application where all the apps created by the AI labs can be found and used by the user. </span></li>
                      <p><b>Skills - </b>Sketch, Javascript,HTML,CSS, AmEx design language framework</p>
                      <p><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Designing the application – Used the designing tool Sketch integrated with AmEx design Language components to create designs of all the views.</li>
                       </ul><br/>
                    
                   </ol>
                </ul>
               </div>
            </Grid>
            </Grid>
            
            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/barclays_logo.png" />Barclays <span style={{fontSize:'0.6em'}}> (December 2017 to August 2019): UI Software Developer</span></li>
                   <ol style={{marginTop:'20px'}}>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>1. Project - Consumer Lending</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>: Javascript, AngularJS, HTML,CSS</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                      <ul>
                         <li class="role">•  Development of web pages that will facilitate the user to :</li>
                         <ul style={{marginLeft:'20px'}}>
                            <li class="role">- Apply for loan</li>
                            <li class="role">- Check whether they are qualified for a loan based on their income verification and additional questionnaire</li>
                            <li class="role">- How much loan they are eligible for </li>
                         </ul>
                         <li class="role">•  Consuming RESTful web service.</li>
                         <li class="role">•  Responsible for Build and deployment using Jenkins.</li>
                         <li class="role">•  Maintenance of the existing application – familiar with JIRA.</li>
                       </ul><br/><br/>
                        <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>2. Project - Digital Mortgages </span><span> -a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>AngularJS, sass, web accessibility</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Mortgage application has different functionalities like Single Overpayment, Direct Debit, Recurring Debit, Online rate switch.</li>
                         <li class="role">•  Created pages to facilitate online rate switch if the customer is eligible for the same.</li>
                         <li class="role">•  Writing unit test cases and carry out unit and functional testing.</li>
                         <li class="role">•  Maintenance of the existing application.</li>
                       </ul><br/><br/>
                          <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>3. Project - Digital shared services (DSS) </span><span> - a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>AngularJS, HTML, CSS, Barclays Design Language (BDL), gulp</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  DSS is a framework owned and created by Barclays with their own components for various types of buttons, accordion, labels, textbox etc. </li>
                         <li class="role">•  Created a showcase page wherein the user can see all those components, its description and how to use them along with the template.</li>
                       </ul><br/><br/>
                   </ol>
                </ul>
               </div>
            </Grid>
            </Grid>

            <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/wipro_logo.png" />Wipro Technologies <span style={{fontSize:'0.6em'}}> (July 2014 to December 2017): Recruited under “Wipro Star”, a highly selective fast track management development program with an intake from India's premier engineering institutes.</span></li>
                   <ol style={{marginTop:'20px'}}>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>1. Client - Bank of New York Mellon Corp. : A2J (Agile)</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>: Javascript, HTML, CSS, Bootstrap, JQuery</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                      <ul>
                         <li class="role">•  Developed dynamic and responsive web pages to be deployed on client’s server.</li>
                         <li class="role">•  Collaborated with the backend developers for ceaseless integration process.</li>
                         <li class="role">•  Carry out unit and functional testing to discover errors and optimize usability.</li>
                         <li class="role">•  Maintenance of the existing application.</li>
                       </ul><br/><br/>
                        <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>2. Client - Alcatel-Lucent : HDA visualization (Agile development) </span><span> -a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Jasper BI, HTML, CSS, Jquery, Oracle</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Developed responsive web pages for displaying information about home device analytics in a user friendly way.</li>
                         <li class="role">•  Created reports and dashboards (representing summarised information) to be integrated with the webpages.</li>
                         <li class="role">•  Attended client calls for weekly status updates and scrum meetings on a daily basis to brainstorm new ideas.</li>
                         <li class="role">•  Carry out unit testing.</li>
                       </ul><br/><br/>
                          <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>3. Wipro Internal Project - Application for tracking win% in a bidding </span><span> - a web portal created using django rest framework to track all the packages available, add a new package and update its status. There are three different roles: admin, package submitter, all users.</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Jasper BI</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                       <ul>
                         <li class="role">•  Designed and developed dashboards displaying various charts and widgets to indicate win % for a particular user in different categories.</li>
                       </ul><br/><br/>
                   </ol>
                </ul>
               </div>
            </Grid>
            </Grid>

             <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
            <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
               <div>
                <ul>
                  <li class="company"><img class="company_logo" src="/images/phimetrics.png" />Summer Intern at Phimetrics Technologies, Mumbai, India <span style={{fontSize:'0.6em'}}> (May 2013-July 2013): UI Software Developer</span></li>
                   <ol style={{marginTop:'20px'}}>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>Project - Mobile Agents for Android</span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>: Android, Java J2ME</p>
                      <p style={{color:'#003366'}}><b>Roles and Responsibilities - </b></p>
                      <ul>
                         <li class="role">•  Development of an android application for capturing Rx level, phone configuration, signal strength, location, neighbouring cell information</li>
                       </ul><br/><br/>
                        </ol>  
                </ul>
               </div>
              </Grid>
              </Grid>
              <Grid container spacing={3} style={{width:'80%', margin:'auto', marginTop:'3%', paddingLeft:'2%', backgroundColor:'azure', borderRadius:'5px', paddingBottom:'2%'}}>
              <Grid container item xs={12} lg={12} md={12} spacing={2} style={{}}>
              <div>
                <ul>
                       <h2 style={{marginTop:'20px', textAlign:'center'}}>Other Projects</h2>
                       <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>A quiz application created using Reactjs at  <a href="https://smriti29.github.io/authorquiz/">https://smriti29.github.io/authorquiz/</a></span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>ReactJs, HTML, CSS</p>
                       <br/><br/>
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>A responsive restaurant website (mobile-friendly) at <a href="https://smriti29.github.io/Angular_apps/restaurant/index.html">https://smriti29.github.io/Angular_apps/restaurant/index.html</a></span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>Bootstrap, HTML, CSS, JQuery</p>
                       <br/><br/> 
                     <li style={{fontSize:'1em'}}><span style={{fontWeight:'bold'}}>Implemented a single page application for online book shopping (BooKart), demonstrating the function of a cart using AngularJs <a href="https://smriti29.github.io/Angular_apps/restaurant/index.html">https://smriti29.github.io/Angular_apps/restaurant/index.html</a></span></li>
                      <p style={{color:'#003366'}}><b>Skills - </b>AngularJs, Bootstrap, HTML, CSS</p>
                       <br/><br/>  
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
  
  export default Experience;
  