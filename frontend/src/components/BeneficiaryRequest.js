import React from 'react';
import './BeneficiaryRequest.css'

function BeneficiaryRequest() {
    return(
    <div>
        <nav className='navbar'>
                <div className='full-logo'> 
                    <img src={require("../images/logo.png")} className='logo'/> 
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>
                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
        </nav>
        <div className="gap"></div>
        <div className="welcomeBox">
                <h2 className="welcomeMessage">Welcome, Brampton Manor Academy</h2>
                <p className="welcomeSubText">Tell us a bit more so that we can connect you with someone that can help.</p>
        </div>
        <div className="gap"></div>
        <div>
            <h2 className="requestHelp">Request help</h2>
            <p className="requestHelpSubText">Fill out this form so that we can connect you with someone that can help.</p>
        </div>
        <div className="gap"></div>
        <form className="form" method="POST" action="/request-form">
            <div>
                <label className="label" for="requestedFoodBank">Select a food bank in your area</label>
                <br></br>
                <input className="inputBox" type="text" id="requestedFoodBank" name="requestedFoodBank" placeholder="Liverpool Street Food Bank"></input>
            </div>

            <br></br>

            <div className="separationLine"></div>
            
            <br></br>

            <div className="leftTrippleInputBoxContainer">
                <div className="inputBoxContainer">
                    <label className="label" for="requestingOrganization">Name of your group or community</label>
                    <br></br>
                    <input className="inputBox" type="text" id="requestingOrganization" name="requestingOrganization" placeholder="Brampton Manor Academy"></input>
                </div>
                <br></br>
                <div className="inputBoxContainer">
                    <label className="label" for="needQuantity">How many people are in need?</label>
                    <br></br>
                    <input className="inputBox" type="text" id="needQuantity" name="needQuantity" placeholder="e.g. 50 people"></input>
                </div>
                <br></br>
                <div className="inputBoxContainer">
                    <label className="label" for="requestingOrganizationType">What best describes who you are?</label>
                    <br></br>
                    <input className="inputBox" type="text" id="requestingOrganizationType" name="requestingOrganizationType" placeholder="a Scool"></input>
                </div>
            </div>

            <div className="rightTrippleInputBoxContainer">
                <div className="inputBoxContainer">
                    <label className="label" for="email">Email</label>
                    <br></br>
                    <input className="inputBox" type="text" id="email" name="email" placeholder="Placeholder"></input>
                </div>
                <br></br>
                <div className="inputBoxContainer">
                    <label className="label" for="helpType">What best describes the kind of help you need?</label>
                    <br></br>
                    <input className="inputBox" type="text" id="helpType" name="helpType" placeholder="Food"></input>
                </div>
                <br></br>
                <div className="inputBoxContainer">
                    <label className="label" for="label">Label</label>
                    <br></br>
                    <input className="inputBox" type="text" id="label" name="label" placeholder="Placeholder"></input>
                </div>
            </div>

            <br></br>
            
            <button className="sendRequest" type="submit">+ Send request</button>
        </form>
    </div>
    );
}

export default BeneficiaryRequest;