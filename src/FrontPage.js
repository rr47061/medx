import React, { Component } from 'react';
import './App.css'
import {Layout,  Content} from "react-mdl";

import FrontMain from './components/FrontMain';
import {Nav,Navbar} from 'react-bootstrap';



class FrontPage extends Component {
    render() {
        return (
            <div >
                {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
                <div className="demo-big-content">

                    <Layout >
                    <Navbar className="header-color" bg="dark" expand="lg">
            <Navbar.Brand >MEDX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="./Doctor">Find a Doctor</Nav.Link>
                <Nav.Link href="./Appointment">Appointment</Nav.Link>


            <Nav.Link href="./Symptoms">Symptoms</Nav.Link>
            <Nav.Link href="./ContactUS">ContactUs</Nav.Link>
            {/*<a href="nodeapp2/public/index.html">ContactuS</a>*/}

            
            </Nav>
        
            </Navbar.Collapse>
            </Navbar>
                        {/*<Header  
                                 className={"header-color"}
                                 title="MEDX" 


                            scroll>

                            <Navigation className="nav-hover">
                               
                           
                               <Link to="/ContactUS">ContactUS</Link>
                               <Link to="/Symptoms">Symptoms</Link>
                              
                              {/* <a href="/OnlineDiagnosis" target="_blank">OnlineDiagnosis</a>*/} 
                               
                               {/* <Link to="src/components/Diagnosis">Diagnosis</Link>*

                            </Navigation>
                        </Header>*/}
                       
                        <Content>
                        <FrontMain />

                               
                                
                        </Content>
                        
                        <footer class="page-footer font-small blue">
                        <div class="footer-copyright text-center py-3">© 2019 Copyright:
                
                        <a href="http://www.mnnit.ac.in/"> Motilal Nehru National Institute of Technology</a>
                        
                        </div>
                        </footer>
     
                    </Layout>


                </div>

            </div>
        )
    }
}

export default FrontPage;

