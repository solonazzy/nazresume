import React from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';
import './UserForm.css';

import PersonalDetails from '../PersnoalDetails/PersonalDetails';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
//import Success from './Success';
import Objectives from '../Objectives/Objectives';

const UserForm = () => {

    return (
        <div className="col">

            <div className="container-fluid">
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
