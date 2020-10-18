import React from "react";
import "./style.css";
import ContactImg from "./aboutMe.jpg";


function ContactInfo(){
    return(
        // <!--contact me-->
        <div className="container-md mt-4 p-2 pb-5 mb-5">
            <div className="row m-4">
                <div className="col-md-12 text-center">
                    <h1 className="text-light">Contact Information</h1>    
                    <img src={ContactImg} className="img-fluid justify-content-center p-4" alt="Me and my family" style="height: 400px; width: 500px;" />
                    <h5>Looking to build a new Website or update your current one? </h5>
                    <h5>I am currently open to help as a full stack developer, freelance or as part of a team. </h5> 
                    <h5>Feel free to reach out to me directly. I will respond to you as soon as possible.</h5>
                </div> 
            </div>
            <div className="row ml-4 mr-4 text-center">
                <div className="col-md-12 contactInfo">
                    <a href="tel:417-830-8491">Call: 417-830-8491</a>
                </div>
            </div>
            <div className="row ml-4 mr-4 mb-2 text-center">
                <div className="col-md-12 contactInfo">
                    <a href = "mailto: corey.post0120@gmail.com">Email: corey.post0120@gmail.com</a>
                </div>
            </div>
            <div className="row ml-4 mr-4 text-center">
                <div className="col-md-12 contactInfo">
                    <a href="https://github.com/Eelektrick">Visit my Github Profile</a>
                </div>     
            </div>
            <div className="row ml-4 mr-4 mb-2 text-center">
                <div className="col-md-12 contactInfo">
                    <a href="https://www.linkedin.com/in/corey-post-2360731a6/">Visit my Linkedin Profile</a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;