import React from 'react';
//import ReactDOM from 'react-dom';

const Education = () => {

    return (

      <div className="container-fluid">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <div className="row align-items-start">
        <div className="row">
            <div className="col">
            <h3 className="header">Education</h3>
            <h6><i class="bi bi-book-fill"></i>Lagos State Univerisity</h6>
              <p><i class="bi bi-calendar2-event-fill"></i><i>Sept 2019 - May 2022</i></p>
              <p><i class="bi bi-mortarboard-fill"></i>PGD Economics</p>
            </div>
            </div>
        </div>
        <br />
        <div className="row align-items-start">
        <div className="row">
            <div className="col">
              
            <h6><i class="bi bi-book-fill"></i>Federal University of Technology Akure</h6>
              <p><i class="bi bi-calendar2-event-fill"></i><i>Dec 2009-Dec 2014</i></p>
              <p><i class="bi bi-mortarboard-fill"></i>B.Tech Physics</p>
            </div>
            </div>
        </div>
      </div>
        
        //<div className="container">
          //  <div className="row">
            //    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
              //  <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                //{/* Force next columns to break to new line at md breakpoint and up */}
        //        <div className="w-100 d-none d-md-block" />
          //      <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
            //    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
          //  </div>
       // </div>
            
    )
}

export default Education;