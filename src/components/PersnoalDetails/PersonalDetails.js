import React from 'react';
//import ReactDOM from 'react-dom';
import muyiwa from '../img/muyiwa.jpg';

const PersonalDetails =() => {

    return (

      <div className="container">
        <div className="row align-items-start">
          <div className="col-3">
            <div className="img-fluid">
              <img src={muyiwa} className="img-thumbnail" alt="muyiwa" style={{ width: 150 }} />
            </div>
          </div>
          <div className="col-9">
          <div className="basic-info">
            <br />
             <h6 className="img-heading"><i class="bi bi-person-fill"></i>Solomon Nazzy</h6>
              <p className="card-text"><i><i class="bi bi-briefcase-fill"></i>Freelance sofware developer</i></p>
            <p><i class="bi bi-house-fill"></i>Lagos Nigeria</p>
            <p><i class="bi bi-envelope-fill"></i>sakinkuotu@yahoo.com</p>
            <p><i class="bi bi-phone-fill"></i>+2349062152056</p>
                <a href="https://twitter.com/p_nazzy">
                <i class="bi bi-twitter"></i>
                </a>&nbsp;&nbsp;
                <a href="https://github.com/solonazzy">
                <i class="bi bi-github"></i>
                </a>&nbsp;&nbsp;
                <a href="http://www.linkedin.com/in/muyiwa-akinkuotu-6a1300a6">
                <i class="bi bi-linkedin"></i>
                </a>
            <hr/>
        </div>
        </div>
        </div>
        
      </div>

      //<div className="container-fluid">
 //       <div className="row">
 //         <div className="col-4">

//            <div className="img">
              
//              <img src={muyiwa} className="img-thumbnail" alt="muyiwa" style={{ width: 150 }} />
          
//          <div className="col-8">
 //           <div className="media-body">
 //             <h6 className="media-heading">Akinkuotu Muyiwa</h6>
 //             <p className="card-text"><i>Freelance sofware developer</i></p>
 //           </div>
 //         </div>
 //       </div>
 //       </div>
 //     </div>
 //   </div>

//</div> <div className="media">
 //           <img
 //               className="align-self-center mr-0" src={muyiwa} alt={muyiwa} />
 //           <div className="media-body">
 //               <h5 className="mt-0">Center-aligned media</h5>
 //               <p>
 //               Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
 //               ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
 //               viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
 //               lacinia congue felis in faucibus.
 //               </p>
 //               <p className="mb-0">
 //               Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
 //               Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
  //              ridiculus mus.
  //              </p>
  //          </div>
  //  </div>*/


//        <div className="container">
//            <div className="row">
//                <div className="col">
//                    
//                    
//                    <h5 className="card-title">Akinkuotu Muyiwa Solomon</h5>
//                    <p className="card-text"><i>Banker/Freelance sofware developer</i></p>
//                    
//                </div>
//                    
//             </div>
 //                 
//
         
  //      </div>
        
//            
 //       
                //<div className="col-8"><p>I am a banker and freelance software developer with years of experience developing and working with React and Node. I have a demonstrated history of working in an agile
//team both remotely and on-site. I have 4 years of frontend programming expertise, including more than 2 years with React and React Native. I work with Redux, React Hooks, CSS, SASS, HTML5, Javascript, and Jest for testing. I have worked as an individual contributor on enterprise apps and three startups, as well as serving as the team lead on several projects.</p>
  //              </div>
    //        </div>
      //  </div>       
    )
}

export default PersonalDetails;