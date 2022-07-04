import React from 'react';
import './BeneficiarySignUp.css'
import './LandingPage.css'
import './BeneficiarySignUp.css'
import smallLogo from '../images/logo.png'
import bigLogo from '../images/big-logo.png'
import HeroShot from '../images/HeroShot.png'

function BeneficiarySignUp() {
    return (
        <div className='landing-bdy'>
            <nav className='navbar'>
                <div className='full-logo'>
                    <img src={smallLogo} className='logo' />
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>

                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className='Content'>
                <div className='LHS'>
                    <div className='Header'>
                        <h1>Create an account</h1>
                        <p>Tell us about yourself</p>
                    </div>

                    <form action="/HTML/hackathon/thankyou.html">
                        <div class="TextBox">
                            <div><input type="text" placeholder="Name of centre or organisation" required /></div>
                            <br />
                            <div><input type="text" placeholder="Email" required /></div>
                            <br />
                            <div><input type="text" placeholder="Website" required /></div>
                            <br />
                            <div><input type="text" placeholder="First line of address" required /></div>
                            <br />
                            <div><input type="text" placeholder="City / Town" required /></div>
                            <br />
                            <div><input type="text" placeholder="Post code" required /></div>
                            <br />
                            <div><input type="text" placeholder="Contact number" required /></div>
                            <br />
                            <span>
                                <a class="button" href="/HTML/hackathon/thankyou.html">
                                    <input type="submit" value="Create Account" />
                                </a>
                            </span>

                        </div>
                    </form>
                </div>

                <div class="imageHolder">
                    <img src={HeroShot} alt='Hero Shot' />
                </div>


            </div>

        </div>


    );

}

export default BeneficiarySignUp;