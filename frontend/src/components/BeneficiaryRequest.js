import React from 'react';
import './BeneficiaryRequest.css'
import smallLogo from '../images/logo.png'

function BeneficiaryRequest() {
    return(
    <div>
        <nav class='navbar'>
                <div class='full-logo'> 
                    <img src={smallLogo} class='logo'/> 
                    <h3 class='logo-txt'><span class='red'>Food</span><span class='purple'>&Flow</span></h3>
                </div>
                <ul class='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
        </nav>
        <div class="gap"></div>
        <div class="welcomeBox">
                <h2 class="welcomeMessage">Welcome, Brampton Manor Academy</h2>
                <p class="welcomeSubText">Tell us a bit more so that we can connect you with someone that can help.</p>
        </div>
        <div class="gap"></div>
        <div>
            <h2 class="requestHelp">Request help</h2>
            <p class="requestHelpSubText">Fill out this form so that we can connect you with someone that can help.</p>
        </div>
        <div class="gap"></div>
        <form class="form" method="POST" action="/request-form">
            <div>
                <label class="label" for="requestedFoodBank">Select a food bank in your area</label>
                <br></br>
                <input class="inputBox" type="text" id="requestedFoodBank" name="requestedFoodBank" placeholder="Liverpool Street Food Bank"></input>
            </div>

            <br></br>

            <div class="separationLine"></div>
            
            <br></br>

            <div class="leftTrippleInputBoxContainer">
                <div class="inputBoxContainer">
                    <label class="label" for="requestingOrganization">Name of your group or community</label>
                    <br></br>
                    <input class="inputBox" type="text" id="requestingOrganization" name="requestingOrganization" placeholder="Brampton Manor Academy"></input>
                </div>
                <br></br>
                <div class="inputBoxContainer">
                    <label class="label" for="needQuantity">How many people are in need?</label>
                    <br></br>
                    <input class="inputBox" type="text" id="needQuantity" name="needQuantity" placeholder="e.g. 50 people"></input>
                </div>
                <br></br>
                <div class="inputBoxContainer">
                    <label class="label" for="requestingOrganizationType">What best describes who you are?</label>
                    <br></br>
                    <input class="inputBox" type="text" id="requestingOrganizationType" name="requestingOrganizationType" placeholder="a Scool"></input>
                </div>
            </div>

            <div class="rightTrippleInputBoxContainer">
                <div class="inputBoxContainer">
                    <label class="label" for="email">Email</label>
                    <br></br>
                    <input class="inputBox" type="text" id="email" name="email" placeholder="Placeholder"></input>
                </div>
                <br></br>
                <div class="inputBoxContainer">
                    <label class="label" for="helpType">What best describes the kind of help you need?</label>
                    <br></br>
                    <input class="inputBox" type="text" id="helpType" name="helpType" placeholder="Food"></input>
                </div>
                <br></br>
                <div class="inputBoxContainer">
                    <label class="label" for="label">Label</label>
                    <br></br>
                    <input class="inputBox" type="text" id="label" name="label" placeholder="Placeholder"></input>
                </div>
            </div>

            <br></br>
            
            <button class="sendRequest" type="submit">+ Send request</button>
        </form>
    </div>
    );
}

export default BeneficiaryRequest;