import React from 'react';
import './FoodBankSignUp.css'
import './LandingPage.css'
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

                    <form method="POST" action="/new-food-bank-account">
                        <div class="TextBox">
                            <div><input name="name" type="text" placeholder="Name of centre or organisation" required /></div>
                            <br />
                            <div><input name="email" type="email" placeholder="Email" required /></div>
                            <br />
                            <div><input name="password1" type="password" placeholder="Password" required /></div>
                            <br />
                            <div><input name="password2" type="password" placeholder="Retype Password" required /></div>
                            <br />
                            <div><input name="address" type="text" placeholder="Full address" required /></div>
                            <br />
                            <div><input name="phoneNumber" type="text" placeholder="Contact number" required /></div>
                            <br />
                            <div><input name="helpType" type="text" placeholder="Type of help" required /></div>
                            <br />
                            <button type="submit" value="Create Account">submit</button>
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