import React from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';

import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Education from './Education';
//import Success from './Success';
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

            <br />
            
            <div className="container-fluid">
                <Experience/>
            </div>
            <br />
            
            <div className="container-fluid ">

                <Education/>
            </div>
            <br />
            
        </div>

    );

}

export default UserForm;
