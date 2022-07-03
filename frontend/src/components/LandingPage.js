import React from 'react';
import './LandingPage.css'
import smallLogo from '../images/logo.png'
import bigLogo from '../images/big-logo.png'

const LandingPage = () => {
    return (
        <div className='landing-bdy'>
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
            <div className='jumbotron'>
                <div>
                    <div className='jumbo-full-logo'>
                        <img src={bigLogo} className='jumbo-logo'/> 
                        <h4 className='jumbo-logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h4>
                    </div>
                    <h1 className='white jumbo-txt'>A single place to help those in need</h1>
                    <p className='white jumbo-mini-txt'>Food&Flow provides a single place to communicate with your recipients and suppliers</p>
                </div>
                <div className='circle-container'>
                    <div className='circle-one'></div>
                    <div className='circle-two'></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;