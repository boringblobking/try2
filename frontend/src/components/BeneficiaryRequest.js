import React from 'react';
import './BeneficiaryRequest.css'
import smallLogo from '../images/logo.png'

function BeneficiaryRequest() {
    return(
    <div>
        <nav className='navbar'>
                <div className='full-logo'>
                    <img src={smallLogo} className='logo'/> 
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>
                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
        </nav>
        <div className="topGap"></div>
        <div className="welcomeBox">
                <h2 className="welcomeMessage">Welcome, Liverpool Street Food Bank</h2>
                <p className="welcomeSubText">Use this area to track and receive requests for help.</p>
        </div>
        <h1>BeneficiaryRequest</h1>
        <form method="POST" action="/request-form">
            <label for="requestedFoodBank">Select a food bank in your area</label>
            <input type="text" id="requestedFoodBank" name="requestedFoodBank" placeholder="Liverpool Street Food Bank"></input>
            <label for="requestingOrganization">Name of your group or community</label>
            <input type="text" id="requestingOrganization" name="requestingOrganization" placeholder="Brampton Manor Academy"></input>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Placeholder"></input>
            <label for="needQuantity">How many people are in need?</label>
            <input type="text" id="needQuantity" name="needQuantity" placeholder="e.g. 50 people"></input>
            <label for="helpType">What best describes the kind of help you need?</label>
            <input type="text" id="helpType" name="helpType" placeholder="Food"></input>
            <label for="requestingOrganizationType">What best describes who you are?</label>
            <input type="text" id="requestingOrganizationType" name="requestingOrganizationType" placeholder="a Scool"></input>
            <label for="label">Label</label>
            <input type="text" id="label" name="label" placeholder="Placeholder"></input>
            <button type="submit">Send Request</button>
        </form>
    </div>
    );
}

export default BeneficiaryRequest;