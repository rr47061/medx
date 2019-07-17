import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ContactUS from './ContactUS';
import Intro from './Intro';
import Symptoms from './Symptoms';
import Appointment from './Appointment';
import Doctor from './Doctor';

import DResult from "./DResult";

class FrontMain extends React.Component{
    render(){
        return(<div><Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/Symptoms" component={Symptoms} />
            <Route exact path="/Appointment" component={Appointment} />
            <Route exact path="/ContactUS" component={ContactUS} />
            <Route exact path="/Doctor" component={Doctor} />

            {/*added here*/}
            <Route exact path="/DResult" component={DResult} />

            
           

            </Switch>
            
            </div>);
    }
};

export default FrontMain;