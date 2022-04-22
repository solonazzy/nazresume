import React from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';

import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Education from './Education';
import Success from './Success';
import Objectives from './Objectives';

const UserForm = () => {

    return (
        <div className="col">

            <div className="container">
                <PersonalDetails/>
            </div>
            <br />

            <div className="container-fluid">
                <Objectives/>

            </div>
        
            
            <div className="container-fluid">
                <Experience/>
            </div>
            <br />
            
            <div className="container-fluid col-lg-8 mx-auto text-center">

                <Education/>
            </div>
            <br />
            

            <div className="container-fluid col-lg-8 mx-auto text-center">

                <Success />
            </div>
            
        </div>

    );

}

export default UserForm;
